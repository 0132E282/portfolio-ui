import {layoutPros} from '@/models/common';
import { Box,  Stack } from '@mui/material';
import { Footer} from '@/components/common';
import dynamic from 'next/dynamic';
const Header = dynamic(()=> import('@/components/common/Header') , {ssr : false})
export default function Layout({ children}:layoutPros) {
  return (
    <Stack minHeight={'100vh'}>
      <Header/>
        <Box component={'main'} flexGrow={1}>{children}</Box>
      <Footer/>
    </Stack>
  );
}