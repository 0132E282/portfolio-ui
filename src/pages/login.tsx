import LoginForm from "@/components/auth/login-form";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useAuth  } from "@/hooks";
import {authApi  } from "@/api-client";
import { loginPayload } from "@/models";
import { useRouter  } from "next/router";

function LoginPage() {
    const {profile ,  login , logout } = useAuth({});
    const router =  useRouter ();

     const handleLoginSubmit = async (payload : loginPayload)  => { 
        try {
           await login(payload);
           router.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <Box>
            <Paper elevation={4} sx={{
                mt: 6, p: 4, maxWidth : '480px', mx:'auto',textAlign : 'center'
            }}>
                <h1>Login</h1>
                <LoginForm onSubmit={handleLoginSubmit}/>
            </Paper>
       </Box>
     );
}

export default LoginPage;