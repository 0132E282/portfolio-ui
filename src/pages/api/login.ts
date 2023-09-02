import { ProxyResCallback } from "http-proxy";
import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "cookies";
import HttpProxy from "http-proxy";
type data = {
    message: string
}
export const config = {
    api : {
        bodyParser: false,
    }
}
const proxy = HttpProxy.createProxyServer();
function handler(req : NextApiRequest , res : NextApiResponse<data>) {
    if(req.method !== "POST") return res.status(404).json({ message : 'method not supported' });
    return new Promise((resolve , reject)=>{
        req.headers.cookie = '';
        const handlerLoginResponse: ProxyResCallback = (proxyRes , req, res  ) =>{
            let body = '';
            proxyRes.on('data' , (chunk) =>{
                body += chunk;
            })
            proxy.on('end', () =>{
               try {
                const isSuccess = proxyRes.statusCode && proxyRes.statusCode >= 200 && proxyRes.statusCode < 300;
                if(!isSuccess){
                    (res as NextApiResponse).status( proxyRes.statusCode || 500).json(body);
                    resolve(true);
                }
                const {accessToken , expiredAt} = JSON.parse(body);
                const cookies = new Cookies(req, res , {secure : process.env.NODE_ENV !== 'development'});
                cookies.set('access_token', accessToken , {
                    httpOnly : true,
                    sameSite :'lax',
                    expires : new Date(expiredAt)
                });
                (res as NextApiResponse).status(200).json({message : 'login successful' });
                 
               } catch (error) {
                (res as NextApiResponse).status(500).json({message : 'something went wrong'})
               }
            })
        }
        proxy.once('proxyRes' ,handlerLoginResponse);
        proxy.web(req, res , {
            target: 'https://js-post-api.herokuapp.com',
            changeOrigin : true,
            selfHandleResponse :true
        });
        resolve(true);
    });

}

export default handler;