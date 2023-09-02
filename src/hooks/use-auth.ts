import { PublicConfiguration } from 'swr/_internal';
import useSWR from 'swr';
import { authApi } from '../api-client';
import { loginPayload } from '@/models';
export default function useAuth ( option : Partial<PublicConfiguration>){
    const { data:profile , error , mutate} = useSWR('/profile', {
        dedupingInterval : 50000,
        revalidateOnFocus : false,
        ...option
    });
    async function login(payload :loginPayload) {
       await authApi.login(payload);
       mutate();
    }
    async function logout() {
        await authApi.logout();
        mutate({}, false);
    }
    return {error , profile , login , logout}
}