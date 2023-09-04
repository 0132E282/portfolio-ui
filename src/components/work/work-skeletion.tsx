import { Work } from "@/models/work";
import { Box, Chip, Skeleton, Stack, Typography } from "@mui/material";


function WorksSkeleton() {
    const date = new Date();
    return <Stack direction={{xs : 'column' , sm : 'row'}} spacing={2} width={'100%'} mb={3}>
        <Box width={{xs : '100%' , sm : '246px'}} flexShrink={0}>
            <Skeleton variant="rectangular" width={246} height={180} />
        </Box>
        <Box flexGrow={1}>
           <Typography sx={{mb : 2}} variant="h4" fontWeight={'bold'}> <Skeleton  /></Typography> 
           
          <Stack direction={'row'} my={2}>
            <Skeleton variant="rectangular" width={50} height={20}/>
            <Typography ml={3} flexGrow={1} height={20}>
                <Skeleton/>
            </Typography>
          </Stack>
          <Typography>
            <Skeleton/>
            <Skeleton/>
            <Skeleton width="40%"/>
          </Typography>
        </Box>
    </Stack>;
}

export default WorksSkeleton;