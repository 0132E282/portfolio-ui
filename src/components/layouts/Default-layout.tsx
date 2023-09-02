import useSWR from 'swr';
import {layoutPros} from '@/models/common';
import { Box, Container, Stack } from '@mui/material';
import { Footer, Header } from '@/components/common';
export default function Layout({ children}:layoutPros) {
  return (
    <Stack minHeight={'100vh'}>
      <Header/>
        <Box component={'main'} flexGrow={1}>{children}</Box>
      <Footer/>
    </Stack>
  );
}