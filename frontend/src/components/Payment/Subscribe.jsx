import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { server } from '../../redux/store';
import { buySubscription } from '../../redux/actions/user';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import logo from "../../assests/images/logo.png";

const Subscribe = ({user}) => {

  const dispatch = useDispatch();
  const [key, setKey] = useState("");

  const { loading,error,subscriptionId } = useSelector(state=>state.subscription);
  const { error:courseError } = useSelector(state=>state.course);

  const subscriptionHandler = async () => {

    const { data } = await axios.get(`${server}/razorpaykey`);

    setKey(data.key);
    // console.log(data.key)
    dispatch(buySubscription());
  };

  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
    }
    if(courseError){
      toast.error(error);
      dispatch({type:"clearError"});
    }
    if(subscriptionId){
      const openPopUp = ()=>{
        console.log(subscriptionId)
        const options={
          key,
          name:"CourseBundler",
          description:"Get access to all premium content",
          image:logo,
          subscription_id:subscriptionId,
          callback_url:`${server}/paymentverification`,
          prefill:{
            name:user.name,
            email:user.email,
            contact:""
          },
          notes:{
            address:"Ali Nayab Nathani @LinkedIn"
          },
          theme:{
            color:"#FFC800"
          }

        };
        // console.log(options)
        const razor = new window.Razorpay(options);
        
        razor.open();
      }
      openPopUp();
    }

  }, [dispatch,error,courseError,user.name,user.email,key,subscriptionId])
  
  

  return (
    <Container h={'90vh'} padding='16'>

      <Heading children='Welcome' my={'8'} textAlign={'8'} />

      <VStack
        boxShadow={'lg'}
        alignItems='stretch'
        borderRadius={'lg'}
        spacing='0'
      >
        <Box bg={'yellow.400'} p='4' css={{ borderRadius: "8px 8px 0 0" }}>
          <Text children={`Pro Pack - Rs.500.00`} color='black' />
        </Box>
        <Box p={'4'}>
          <VStack
            textAlign={"center"}
            px='8' mt={'4'}
            spacing='8'
          >
            <Text children={`Join Pro Pack and get access to all content.`} />
            <Heading size='md' children={`Rs.500 Only`} />
          </VStack>

          <Button isLoading={loading} my={'8'} width='full' colorScheme={'yellow'} onClick={subscriptionHandler}>Buy Now</Button>
        </Box>

        <Box bg={'blackAlpha.600'} p='4' css={{ borderRadius: "0 0 8px 8px" }}>
          <Heading
            size='sm'
            children={'100% refund at cancellation'}
            color='white'
            textTransform={'uppercase'}
          />

          <Text fontSize={'sm'} color='white' children={'*Terms & Conditions Applied'} />
        </Box>
      </VStack>

    </Container>
  )
}

export default Subscribe