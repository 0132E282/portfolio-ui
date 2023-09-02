import { Box, Container, Stack, Typography ,Link as MuiLink} from "@mui/material";
import PostsCard from "./Posts-card";
import { Post } from "@/models";

function RecentPost() {
    const postList:Post[] = [
      {
        id : 1,
        title : 'Making a design system from scratch',
        description : 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        publishedDate : '2022-05-15T04:00:00Z',
        tagList : ['Design','Pattern']
      },
      {
        id : 2,
        title : 'Creating pixel perfect icons in Figma',
        description : 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        publishedDate : '2022-05-15T04:00:00Z',
        tagList : ['Figma','Icon Design']
      }
   ]
    return ( <Box component="section" sx={{py: 4} } bgcolor={'secondary.light'}>
         <Container >
             <Stack direction={'row'} justifyContent={{xs : 'center' , md : 'flex-start'}} alignContent={'center'} mb={4}>
                <Typography variant="h5">Featured works</Typography>
             </Stack>
             <Stack direction={{ xs : 'column',md: 'row'}} sx={{'& > div' : {width : {xs :'100%', md : '50%'}}}} spacing={3}>
                {postList.map((item)=>{ 
                 return <Box key={item.id}>
                      <PostsCard post={item} />
                   </Box>
                })}
             </Stack>
        </Container>
    </Box> );
}

export default RecentPost;