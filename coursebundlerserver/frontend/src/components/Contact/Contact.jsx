import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactRequest } from '../../redux/actions/other';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, SetMessage] = useState('');

  const dispatch = useDispatch();
  const { loading, message: otherMessage, error } = useSelector(state => state.other);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(contactRequest(name, email, message));
  };

  useEffect(() => {
    if(error){
        toast.error(error);
        dispatch({type:"clearError"});
    }
    if(otherMessage){
        toast.success(otherMessage);
        dispatch({type:"clearMessage"});
    }
  }, [error, otherMessage, dispatch]);

  return (
    <Container h={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing="16">
        <Heading children="Contact Us" />

        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <Box marginY={'4'}>
            <FormLabel htmlFor="name" children="Full Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter Your Full Name"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => SetMessage(e.target.value)}
              placeholder="Enter Your Message here"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button isLoading={loading} my="4" colorScheme={'yellow'} type="submit">
            Send Mail
          </Button>

          <Box my="4">
            Request For A Course?{' '}
            <Link to="/request">
              <Button colorScheme={'yellow'} variant="link">
                Click
              </Button>{' '}
              Here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
