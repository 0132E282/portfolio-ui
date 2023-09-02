import { Box, Container, Stack, Typography ,Link as MuiLink} from "@mui/material";
import Link from "next/link";
import { Post } from "@/models";
import { Work } from "@/models/work";
import { WorkList } from "../work";

function FeaturedWorks() {
   const workList:Work[] = [
      {
        id : 1,
        title : 'Designing Dashboards',
        fullDescription : '',
        shortDescription : 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        tagList : ['Dashboard'],
        createAt : '1686351239502',
        updateAt : '1686351239502',
        thumbnailUrl : 'https://res.cloudinary.com/diifnrxw3/image/upload/v1686663887/protfolio-ui/Rectangle_30_m4jhza.png',
      },
      {
        id : 1,
        title : 'Vibrant Portraits of 2020',
        fullDescription : '',
        shortDescription : 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        tagList : ['Illustration'],
        createAt : '1686351239502',
        updateAt : '1686351239502',
        thumbnailUrl : 'https://res.cloudinary.com/diifnrxw3/image/upload/v1686663887/protfolio-ui/Rectangle_32_k8ez2y.png',

      },
      {
        id : 1,
        title : '36 Days of Malayalam type',
        fullDescription : '',
        shortDescription : 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        tagList : ['Typography'],
        createAt : '1686351239502',
        updateAt : '1686351239502',
        thumbnailUrl : 'https://res.cloudinary.com/diifnrxw3/image/upload/v1686663887/protfolio-ui/Rectangle_34_fxl40g.png',
      },
   ]
   
    return ( <Box component="section" sx={{py: 4} }>
        <Container >
             <Stack direction={'row'} justifyContent={{xs : 'center' , md : 'start'}} alignContent={'center'} mb={4}>
                <Typography variant="h5">Featured works</Typography>
             </Stack>
             <Box>
                 <WorkList workList={workList} />
             </Box>
        </Container>
    </Box> );
}

export default FeaturedWorks;