
import { WorkList } from "@/components/work";
import { useWorks } from "@/hooks";
import { ListParams } from "@/models/api";
import { Work } from "@/models/work";
import { Box, Container, Pagination, Skeleton, Typography } from "@mui/material";
import { useState } from "react";
export interface SkeletonWorks{
    workList: Work[];
}


function WorkPages() {
  const [filters , setFilters] = useState<Partial<ListParams>>({_page: 1 , _limit : 10}); 
  const {data:works , isLoading } = useWorks({
    params : filters, 
  });
  const {_limit, _totalRows ,_page} = works.pagination || {};
  console.log( _limit , _totalRows);
  const totalPages = Math.ceil( _totalRows /  _limit) ?? {};
  const handlePageChange =  (e : React.ChangeEvent<unknown>, value : number) =>{
    setFilters((prevFilter) =>({
      ...prevFilter,
      _page : value
    }) )
  }
    return (<Box>
      <Container>
        <Box mb={4} mt={8}>
            <Typography component={'h1'} variant={"h3"}>
                 works
            </Typography>
        </Box>
        <Box>
             <WorkList workList={works?.data} isLoading={isLoading}/>  
        </Box>
        {totalPages > 0 && 
        <Box display={'flex'} justifyContent={'center'} >
          <Pagination count={totalPages} page={_page} onChange={handlePageChange}></Pagination>
        </Box>}
      </Container>
    </Box>);
}
export async function getStaticProps(){
    return {
        props :{}
    }
}
export default WorkPages;