import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assests/images/cursor.png'
import Sidebar from '../Sidebar';


const AdminCourses = () => {
  return (
    <Grid 
    minH={'100vh'} 
    templateColumns={['1fr','5fr 1fr']} 
    css={{
        cursor: `url(${cursor}), default`,
        }}
>
    <Box>
    </Box>
    <Sidebar/>
</Grid>
  )
}

export default AdminCourses