import { Work } from "@/models/work";
import { Box , Divider} from "@mui/material";
import WorkItem from "./Work-Item";
import {Fragment} from 'react'
export interface PropsWorkList{
    workList: Work[];
}
function WorkList({workList}:PropsWorkList) {
    return ( <Box width={'100%'}>
         {workList.map(workItem  => 
            <Fragment key={workItem.id}>
                 <WorkItem  workData={workItem}/>
                 <Divider sx={{my : 3}}/>
            </Fragment>   
         )}
    </Box> );
}

export default WorkList;