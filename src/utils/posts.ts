import path from "path";

import fs from "fs";
// https://www.npmjs.com/package/gray-matter
import matter from "gray-matter";
import { Post } from "@/models";
// get file blog
const BLOG_FOLDER = path.join(process.cwd() , 'blog');

export async function getDataBlogList():Promise<Post[]> {
    // read content the file blogs 
    const fileNameList = fs.readdirSync(BLOG_FOLDER);
    const postList:Post[] = [];
    for(const fileName of fileNameList){
        const filePath = path.join(BLOG_FOLDER, fileName);
        const fileContent = fs.readFileSync(filePath,'utf8');
        const {data , excerpt , content} = matter(fileContent, {excerpt_separator: '<!-- truncate-->'});
        postList.push({
            id : fileName,
            slug : data.slug,
            title : data.title,
            thumbnailUrl : data.image || '',
            author : {
                name : data.author,
                title : data.author_title,
                profileUrl : data.profile_url || '',
                avatarUrl : data.avatar_url || '',
            },
            tagList : data.tags,
            publishedDate :'2022-05-15T04:00:00Z',
            description : excerpt || '',
            mdContent : content,
        })
    }
    return postList ;
}