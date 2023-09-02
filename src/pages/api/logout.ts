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
    const cookies = new Cookies( req , res);
    return new Promise((resolve)=>{
     if(cookies.get('access_token')){
        cookies.set('access_token');
        res.status(200).json({ message : 'logout successful' });
     }
     resolve(true);
    });

}

export default handler;