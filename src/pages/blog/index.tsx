import { PostItem } from "@/components/blog";
import { getDataBlogList } from "@/utils/posts";
import { DriveEta } from "@mui/icons-material";
import { Box , Container, Divider , Link as MuiLink} from "@mui/material";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
export interface BlogListPagesProps {
    postList : any[],
}
export default function BlogPage({postList}:BlogListPagesProps) {
    return ( <Box>
       <Container>
            <h1>blog</h1>
            <Box component={'ul'} sx={{listStyle : 'none' , p  :0}}>
                {postList.map( post => 
                    <li key={post.id}>
                        <Link href={'/blog/' + post.slug} legacyBehavior>
                           <MuiLink>
                                <PostItem post={post}/>
                           </MuiLink>
                        </Link>
                        <Divider sx={{my : 3}}/>
                    </li>      
                )}
            </Box>
       </Container>
    </Box> );
}


export const getStaticProps:GetStaticProps<BlogListPagesProps> = async (context : GetStaticPropsContext) => {
    const data = await getDataBlogList();
    
    return {
        props : {
            postList :data || [],
        }
    }
}