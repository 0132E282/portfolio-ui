import { Post } from "@/models";
import { getDataBlogList } from "@/utils/posts";
import { GetStaticPaths, GetStaticPropsContext , GetStaticProps} from "next";
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import {reporter} from 'vfile-reporter';
import { Box, Container } from "@mui/material";
import remarkToc from "remark-toc";
import Script from "next/script";
import remarkPrism from "remark-prism";
import { Seo } from "@/components/common";
export interface DetailsBlogProps {
    post : Post
};


export default function DetailBlog({post} : DetailsBlogProps) {
    const dataSeo = {
        title : post.title,
        description :  post.description,
        url : '',
        thumbnailUrl : post.thumbnailUrl || '',
    }
    return (
        <Box>
          <Seo data={dataSeo}/>
         <Container>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html : post.htmlContent || ''}}></div> 
        </Container>
        <Script src="/prism.js" strategy="afterInteractive" id="1"> </Script>
     </Box>
    );
};

export const getStaticPaths : GetStaticPaths = async () => { 
    const postList = await getDataBlogList();
    return {
        paths : postList.map( ( post ) => ({params : {slug : post.slug}})),
        fallback : false
    }

}
export const getStaticProps : GetStaticProps<DetailsBlogProps> = async (context : GetStaticPropsContext) => {
    const postList =  await getDataBlogList();
    const post = postList.find((post) => post.slug === context.params?.slug);
    if(!post ) return {notFound : true};

    // convert HTML 
    const file = await  unified()
    .use(remarkParse)
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeDocument, {title: 'blog details page'})
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(remarkToc ,{heading: 'AGENGA'})
    .process(post.mdContent || '');
    post.htmlContent = file.toString();
    return {
        props : {
            post : post
        }
    }
}