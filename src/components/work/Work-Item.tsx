import { Work } from "@/models/work";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";

export interface PropsWorkItem {
    workData : Work
} 

function WorkItem({workData} : PropsWorkItem) {
    return <Stack direction={{xs : 'column' , sm : 'row'}} spacing={2} width={'100%'}>
        <Box width={{xs : '100%' , sm : '246px'}} flexShrink={0}>
             <Image src={workData.thumbnailUrl} alt={workData.title} width={246} height={180}/>
        </Box>
        <Box >
            <Typography sx={{mb : 2}} variant="h4" fontWeight={'bold'}>{workData.title}</Typography>
            <Stack direction={'row'} my={2}>
                <Chip color="secondary" label={new Date(Number(workData.createAt)).getFullYear()} size="small" />
                <Typography ml={3}>{workData.tagList.join(', ')}</Typography>
            </Stack>
            <Typography>{workData.shortDescription}</Typography>
        </Box>
    </Stack>;
}

export default WorkItem;