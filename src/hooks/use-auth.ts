import { loginPayload } from '@/models';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/_internal';
import { authApi } from '../api-client';
export default function useAuth ( option?: Partial<PublicConfiguration>){
    const { data:profile , error , mutate} = useSWR ('/profile', 
    {
        dedupingInterval : 60 * 60 * 1000,
        revalidateOnFocus : false,
        ...option
    });
    async function login(payload :loginPayload) {
       await authApi.login(payload);
       await mutate();
    }
    async function logout() {
        await authApi.logout();
        mutate({}, false);
    }
    return {error , profile , login , logout}
}