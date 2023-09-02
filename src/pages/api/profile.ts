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
    const cookies = new Cookies(req, res);
    if(cookies.get('access_token')){
        req.headers.authorization = 'Bearer ' + cookies.get('access_token') 
        console.log(cookies.get('access_token'))
    }
    return new Promise((resolve)=>{
        req.headers.cookie = '';
        const handlerLoginResponse: ProxyResCallback = (proxyRes , req, res  ) =>{
            let body = '';
            proxyRes.on('data' , (chunk) =>{
                body += chunk;
            })
            proxy.on('end', () =>{
               try {
                (res as NextApiResponse).status(200).json(JSON.parse(body))
               } catch (error) {
                (res as NextApiResponse).status(500).json({message : 'something went wrong'})
               }
               resolve(true);
            })
        }
        proxy.once('proxyRes' ,handlerLoginResponse);
        proxy.web(req, res , {
            target: 'https://js-post-api.herokuapp.com',
            changeOrigin : true,
            selfHandleResponse :true
        });
    });

}

export default handler;