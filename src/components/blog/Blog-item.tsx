import { Post } from '@/models';
import {Card , CardContent , Divider, Typography , Box} from '@mui/material'
import { format } from 'date-fns';

export interface PropsPostItem {
    post:Post
}

function postIte({post }:PropsPostItem) {
    return ( <Box>
        <Typography variant="h5" fontWeight={'bold'}>{post.title}</Typography>

        <Box component={"div"} my={2} display={'flex'} >
            <Typography variant={"body1"}>
               {format(new Date(post?.publishedDate),'dd MMM yyyy')} 
            </Typography> 
             <Divider orientation={'vertical'} sx={{mx :2}} flexItem/>
             <Typography variant={"body1"}> {post.tagList.join(', ')}</Typography>
        </Box>
           <Typography variant="body2">{post.description}</Typography>
    </Box> );
}

export default postIte;