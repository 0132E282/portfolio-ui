import HttpProxy from 'http-proxy';
import { NextApiRequest , NextApiResponse } from 'next';

const proxy = HttpProxy.createProxyServer();
export const config = {
    api : {
        bodyParser: false,
    }
}
export default function handler (req : NextApiRequest, res : NextApiResponse<any>) {
   proxy.web(req , res ,{
        target : process.env.API_URL,
        changeOrigin : true,
        selfHandleResponse : false,
    })

}
