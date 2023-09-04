import { Pagination } from './../models/api';
import useSWR from 'swr';
import  { SWRConfiguration } from 'swr/_internal';
import { workAPi } from '../api-client';
import { ListParams } from '@/models/api';
import { QueryKeys } from '../../constants';

export interface useWorksListPros {
    params : Partial<ListParams>
    options?: SWRConfiguration
}

export default function useWorks ( { params , options }: useWorksListPros){
   const swrRes = useSWR([QueryKeys.WORK_LIST , params] , ()=>workAPi.getAll(params) ,{
    dedupingInterval : 5000,
    
    keepPreviousData : true,
    fallbackData : {
        data : [],
        Pagination :{
            _page : 1,
            _totalRows :10,
            _limit : 10,
        }
    },
    ...options
   } );

    return swrRes;
}