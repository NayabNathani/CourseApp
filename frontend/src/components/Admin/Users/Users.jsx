import { Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import cursor from '../../../assests/images/cursor.png'
import Sidebar from '../Sidebar';


const Users = () => {

  const users = [{
    _id:"abcde",
    name:"Ali Nayab",
    role:'admin',
    subscription:{
      status:"active"
    },
    email:'nayabnathani6@gmil.com'

  }];

  const updateHandler= (userId)=>{
    console.log(userId)
  };

  const deleteButtonHandler= (userId)=>{
    console.log(userId)
  };

  return (
    <Grid 
    minH={'100vh'} 
    templateColumns={['1fr','5fr 1fr']} 
    css={{
        cursor: `url(${cursor}), default`,
        }}
>
    <Box p={['0','16']} overflowX="auto">
      <Heading 
      textTransform={'uppercase'}
      my='16'
      textAlign={['center','left']} 
      children='All Users' 
      />
        <TableContainer w={['100vh','full']}>
        <Table variant={'simple'} size='lg'>
        <TableCaption>All Available Users in DataBase</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Roll</Th>
            <Th>Subscription</Th>
            <Th isNumeric>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            users.map(item=>(
              <Row 
              updateHandler={updateHandler} 
              deleteButtonHandler={deleteButtonHandler}
              key={item._id} 
              item={item} />
            ))
          }
        </Tbody>
      </Table>
    </TableContainer>
    </Box>
    <Sidebar/>
</Grid>
  )
}

export default Users;

function Row({item, updateHandler, deleteButtonHandler}){

  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.roll}</Td>
      <Td>{item.subscription.status==='active' ? 'Active' : 'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button 
            variant={'outline'} 
            color='purple.500' 
            onClick={()=>updateHandler(item._id)}>
            Change Role
            </Button>
          <Button color={'purple.600'} onClick={()=>deleteButtonHandler(item._id)}>
            <RiDeleteBin7Fill/>
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}