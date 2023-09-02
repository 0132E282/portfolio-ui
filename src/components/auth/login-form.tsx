import { Box, Button, CircularProgress, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// library handlers form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

import { useState} from 'react';

// file 
import { InputField } from "@/components/form"
import { loginPayload } from "@/models";

export interface loginFormProps {
  onSubmit?: (payload : loginPayload) => void;
}
function LoginForm({onSubmit}: loginFormProps) {
  const schema = yup.object({
    username : yup.string().required('username in not empty').min(4, 'username must be at least 4 characters'),
    password : yup.string().required('password in not empty').min(6, 'password must be at least 6 characters')
  })
    const  { control , handleSubmit , formState : {isSubmitting }}= useForm({
        defaultValues : {
            username : '',
            password : ''
        },
        resolver : yupResolver(schema),
    });

    const [showPassword , setShowPassword ] =useState(false);
  async function handleLoginSubmit(payload : loginPayload){
        await onSubmit?.(payload);
    }
    return <Box component={'form'} onSubmit={handleSubmit(handleLoginSubmit)}>
        <InputField name={"username"} control={control} sx={{mb:2}} label={"username"}/>
        <InputField type={ showPassword ? 'text':'password'} name={"password"} control={control}  InputProps={{
             endAdornment : (
                <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={ ()=>setShowPassword(show => !show)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
             )
        }}
        sx={{mb:2}} label={'password'}/>
        <Button 
          disabled={isSubmitting} 
          startIcon={isSubmitting ? <CircularProgress color={"inherit"} size={'1em'}/> : null}
          type="submit" fullWidth sx={{py:2}} >login</Button>
    </Box>;
}

export default LoginForm;