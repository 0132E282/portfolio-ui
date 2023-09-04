import axiosClient from "./axiosClient";
import { Work } from "@/models/work";
import { ListParams, ListResponse } from "@/models/api";

export const workAPi = {
    getAll : (params:Partial<ListParams>):Promise<ListResponse<Work>>=> {
      return  axiosClient.get('/works' , {params});
    },
    getFindId : (id : string):Promise<Work>=> {
        return  axiosClient.get('/works/' + id);
    },
    getProfile : () => {
        return  axiosClient.get('/profile');
    }
}