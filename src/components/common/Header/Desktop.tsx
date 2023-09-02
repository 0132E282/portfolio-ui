import {Container, Stack ,Link as MuiLink} from "@mui/material";
import {Box } from "@mui/system";
import { TypeMenu} from "./RouterMenu";
import Link from "next/link";
import clsx from "clsx";
import {  useRouter } from "next/router";
import { useAuth } from "@/hooks";
interface PropsHeaderDesktop {
    menuList :Array<TypeMenu>
}

function HeaderDesktop({menuList}:PropsHeaderDesktop) {
  const { profile,logout } = useAuth({});
  const router = useRouter();
  const isLoggerIn = Boolean(profile?.username);
  const routeList = menuList.filter(item => !item.requiresLogin || isLoggerIn);
  return (
    <Box component="header" display={{ xs: "none", lg: "block"}} py={3}>
       <Container>
           <Stack direction={'row'} justifyContent={'flex-end'} alignItems={'content'} >
               {routeList.map((item,index) =>
                  <Link key={index} href={item.path} legacyBehavior>
                    <MuiLink sx={{ml : 4 , fontWeight:"medium" }} className={clsx({active : router.pathname === item.path })}>{item.label}</MuiLink>
                </Link>
              )}
              {!isLoggerIn ?  
              <Link href={'/login'} legacyBehavior>
                    <MuiLink sx={{ml : 4 , fontWeight:"medium" }} className={clsx({active : router.pathname === '/login' })}>Login</MuiLink>
              </Link> 
              :(<MuiLink sx={{ml : 4 , fontWeight:"medium" }} onClick={logout}>logout</MuiLink>)}
           </Stack>
       </Container>
    </Box>
  );
}

export default HeaderDesktop;