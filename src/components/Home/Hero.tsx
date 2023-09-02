import {Container,Stack,Box,Typography ,Button} from "@mui/material";
import Image from "next/image";
import avatar from '@/images/avatar.png'
function Hero() {
    return ( 
        <Box component={'section'} pt={{md : 18 , xs : 4}} pb={{md :9 , xs : 7}}>
             <Container>
                <Stack 
                direction={{xs : 'column-reverse' , md : 'row'}} 
                justifyContent={'flex-start'} 
                alignItems={{xs : 'center' , md : 'flex-start'}}
                textAlign={{xs : 'center' , md : 'left'}}
                >
                    <Box>
                        <Typography component="h1" variant="h3" fontWeight={'bold'} mb={{xs : 3.5 , md:5}}>
                            Hi, I am John,<br />
                            Creative Technologist
                        </Typography>
                        <Typography variant="body1" mb={{xs : 3.5 , md : 6}}>
                           Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </Typography>
                        <Button sx={{fontSize: 20 , px : 1}}>Download Resume</Button>
                    </Box>
                    <Box sx={{minWidth : {md: '240px'} , boxShadow :'-5px 12px',color:'secondary.light' , borderRadius:'50%' }} ml={{xs : 0 , md :10}} mb = {{xs : 4 , md : 0}} >
                         <Image src={avatar} alt="avatar-user"/>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}

export default Hero;