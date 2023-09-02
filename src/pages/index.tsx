import { FeaturedWorks, Hero , RecentPosts} from "@/components/Home";
import { Seo } from "@/components/common";
import { DefaultLayout } from "@/components/layouts";
import { NextPageWidLayout} from "@/models/common";
import { Box } from "@mui/material";

 const HomePages:NextPageWidLayout = ({})=>{
    const dataSeo = {
        title : 'portfolio ui | nextJs',
        description : 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        url : '',
        thumbnailUrl : 'https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs',
    }
    return <Box>
        <Seo data={dataSeo}/>
        <Hero/>
        <RecentPosts/>
        <FeaturedWorks/>
    </Box>
}
HomePages.Layout = DefaultLayout;
export default HomePages;