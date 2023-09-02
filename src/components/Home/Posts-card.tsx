import { Post } from '@/models';
import {Card , CardContent , Divider, Typography , Box} from '@mui/material'
import { format } from 'date-fns';
import { PostItem } from '../blog';

export interface PropsPostsCard {
    post : Post
}

function PostsCard({post}:PropsPostsCard) {
    return ( <Card >
        <CardContent>
            <PostItem post={post}/>
        </CardContent>
    </Card> );
}

export default PostsCard;