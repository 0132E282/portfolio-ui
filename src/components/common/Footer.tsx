import { Facebook , Instagram , Twitter ,Telegram} from "@mui/icons-material";
import { Box, Stack , Typography} from "@mui/material";

function Footer() {
    const socialLinks = [
        {
            id :  1,
            path : '',
            icon : Facebook
        },
        {
            id : 2,
            path : '',
            icon : Instagram
        }, 
        {
            id :3,
            path : '',
            icon : Twitter
        },
        {
            id :4,
            path : '',
            icon : Telegram
        }
    ]
    return ( <Box component={'footer'} py={2} textAlign={'center'}>
        <Stack direction={'row'} justifyContent={'center'}>
             {socialLinks.map((socialLink) => {
                const Icon = socialLink.icon;
               return <Box key={socialLink.id} component={'a'} px={2} href={socialLink.path} target="_blank" rel="noopener noreferrer">
                     <Icon sx={{fontSize : '36px' , color : 'black'}}/>
                 </Box>
             })}
        </Stack>
        <Typography>Copyright ©{new Date().getFullYear()} All rights reserved </Typography>
    </Box> );
}

export default Footer;