import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import cursor from '../../../assests/images/cursor.png'
import Sidebar from '../Sidebar';
import CourseModal from './CourseModal';


const AdminCourses = () => {

  const courses = [{
    _id:"abcde",
    title:"React course",
    category:'Web Development',
    poster:{
      url:"https://yourtechdiet.com/wp-content/uploads/2022/01/Best-AI-tools-for-Image-Processing-696x368.jpg"
    },
    createdBy:'Ali Nayab Nathani',
    views:123,
    numOfVideos:12

  },];

  const {isOpen, onClose, onOpen} = useDisclosure();

  const courseDetailsHandler= (userId)=>{
    onOpen();
    console.log(userId)
  };

  const deleteButtonHandler= (userId)=>{
    console.log(userId)
  };

  const deleteLectureButtonHandler = (courseId, lectureId)=>{
    console.log(courseId)
    console.log(lectureId)
  }
  
  const addLectureHandler = (e, courseId, title, desription, video)=>{
    e.preventDefaullt();
  }

  return (
    <Grid 
    minH={'100vh'} 
    templateColumns={['1fr','5fr 1fr']} 
    css={{
        cursor: `url(${cursor}), default`,
        }}
>
    <Box p={['0','8']} overflowX="auto">
      <Heading 
      textTransform={'uppercase'}
      my='16'
      textAlign={['center','left']} 
      children='All Courses' 
      />
        <TableContainer w={['100vh','full']}>
        <Table variant={'simple'} size='lg'>
        <TableCaption>All Available Courses</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Poster</Th>
            <Th>Title</Th>
            <Th>Category</Th>
            <Th>Creator</Th>
            <Th isNumeric>Views</Th>
            <Th isNumeric>Lectures</Th>
            <Th isNumeric>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            courses.map(item=>(
              <Row 
              courseDetailsHandler={courseDetailsHandler} 
              deleteButtonHandler={deleteButtonHandler}
              key={item._id} 
              item={item} />
            ))
          }
        </Tbody>
      </Table>
    </TableContainer>
    <CourseModal 
      isOpen={isOpen} 
      onClose={onClose}
      id={'lol123'}
      courseTitle = "React Course"
      deleteButtonHandler={deleteLectureButtonHandler}
      addLectureHandler={addLectureHandler}
    />
    </Box>
    <Sidebar/>
</Grid>
  )
}

function Row({item, courseDetailsHandler, deleteButtonHandler}){

  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url}/>
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>

      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button 
            variant={'outline'} 
            color='purple.500' 
            onClick={()=>courseDetailsHandler(item._id)}>
            View Lectures
            </Button>
          <Button color={'purple.600'} onClick={()=>deleteButtonHandler(item._id)}>
            <RiDeleteBin7Fill/>
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}

export default AdminCourses