import { Box, TextField, TextFieldProps } from "@mui/material";
import { type } from "os";
import { Control , useController} from 'react-hook-form'
export type inputFieldValue = TextFieldProps & {
    name: string;
    label?: string;
    control: Control<any>;
}

function InputFiled( props : inputFieldValue) {
    const {
        name , 
        label, 
        control , 
        type ,
        onChange: textareaOnchange , 
        onBlur: textareaOnBlur , 
        value: textareaValue , 
        ...rest
    } = props;
    
    const {
        field : {onChange,onBlur,value,ref},
        fieldState : {error}
    } = useController({
        name ,
        control
     });
    return <TextField 
    fullWidth
    type={type}
     name={name}
     label={label}
     value={value}
     onChange={onChange}
     onBlur={onBlur}
     inputRef={ref}
     error={ !!error}
     helperText = {error?.message}
     {...rest}
     
    />;
}

export default InputFiled;