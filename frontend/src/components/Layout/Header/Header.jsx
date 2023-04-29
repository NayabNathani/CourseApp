import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import {ColorModeSwitcher} from '../../../ColorModeSwitcher'
import {RiDashboardFill, RiLogoutBoxRLine, RiMenu5Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


const LinkButton = ({url="/", title='Home',onClose})=>(
    <Link to={url} onClick={onClose}>
        <Button variant={'ghost'}>{title}</Button>
    </Link>
)

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const isAuthenticated = true;
    const user = {
        role: 'admin',
    };

const logoutHandler = ()=>{
    console.log('Logged Out')
    onClose();

}

  return (
    <>
        <ColorModeSwitcher/>

        <Button 
        onClick={onOpen}
        colorScheme={'yellow'} 
        width='12' height={'12'} 
        rounded='full' 
        position={'fixed'}
        zIndex={'overlay'} 
        top='6' 
        left='6'>
            <RiMenu5Fill/> 
        </Button>

        <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay backdropFilter={'blur(2px)'}/>
            <DrawerContent>
                <DrawerHeader borderBottomWidth={'1px'} >Course Bundler</DrawerHeader>
                <DrawerBody>
                    <VStack
                    spacing={'6'}
                    alignItems="flex-start"

                    >
                        <LinkButton onClose={onClose} url="/" title="Home"/>
                        <LinkButton onClose={onClose} url="/courses" title="Browse Courses"/>
                        <LinkButton onClose={onClose} url="/request" title="Request A Course"/>
                        <LinkButton onClose={onClose} url="/contact" title="Contact Us"/>
                        <LinkButton onClose={onClose} url="/about" title="About US"/>

                        <HStack
                        justifyContent={'space-evenly'}
                        position='absolute'
                        bottom={'2rem'}
                        width='80%'
                        >
                            {
                                isAuthenticated?
                                (
                                <>
                                    <VStack>
                                        <HStack>
                                            <Link to="/profile"><Button variant={'ghost'} colorScheme={'yellow'} onClick={onClose} >Profile</Button></Link>
                                            <Button variant={'ghost'} onClick={logoutHandler}> <RiLogoutBoxRLine/> Logout</Button>
                                        </HStack>
                                        {
                                            user && user.role ==='admin' && 
                                            <Link to='/admin/dashboard' onClick={onClose}>
                                            <Button colorScheme={'purple'} variant='ghost'>
                                                <RiDashboardFill style={{margin: '4px '}}/> 
                                                Dashboard
                                            </Button>
                                            </Link>

                                        }
                                    </VStack>
                                </>
                                )
                                :(
                                <>
                                    <Link to="/Login" onClick={onClose}><Button colorScheme={'yellow'}>Login</Button></Link>
                                    <p>OR</p>
                                    <Link to="/register" onClick={onClose}><Button colorScheme={'yellow'}>Sign Up</Button></Link>
                                </>
                                )
                            }
                        </HStack>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header

