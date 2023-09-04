import { Work } from "@/models/work";
import { Box , Divider, Typography} from "@mui/material";
import WorkItem from "./Work-Item";
import {Fragment} from 'react'
import WorksSkeleton from "./work-skeletion";
export interface PropsWorkList{
    workList: Work[];
    isLoading : boolean;
}
function WorkList({workList , isLoading}:PropsWorkList) {
    if(workList.length === 0 && !isLoading) {
        return (
            <Box><Typography>no data</Typography></Box>
        )
    }
    return ( <Box width={'100%'}>
         {( isLoading ? Array.from( new Array(3)) : workList).map((workItem , index) => 
            workItem ? (
             <Fragment key={workItem.id}>
                 <WorkItem  workData={workItem}/>
                 <Divider sx={{my : 3}}/>
            </Fragment>
            ): <WorksSkeleton key={index}/>
         )}
    </Box> );
}

export default WorkList;