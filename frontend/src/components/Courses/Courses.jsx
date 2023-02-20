import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Course = ({views,title,imageSrc,id,addtoPlaylistHandler,creator,description, lecture})=>{

    return(
        <VStack className='course' alignItems={['center','flex-start']}>
            <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
            <Heading 
            textAlign={['center','left']} 
            maxW='200px' 
            size={'sm'}
            fontFamily={'sans-serif'}
            noOfLines={3}
            children={title}
            />
            <Text noOfLines={2} children={description} />

            <HStack>
                <Text 
                noOfLines={2} 
                children={'Creator:'} 
                textTransform='uppercase' 
                fontWeight={'bold'}
                />
                
                <Text 
                noOfLines={2} 
                children={creator} 
                textTransform='uppercase' 
                fontFamily={'body'}
                />
            </HStack>
            <Heading 
            textAlign={'center'} 
            size='xs' 
            children={`Lectures - ${lecture}`}
            textTransform='uppercase' 
            />

            <Heading 
            size='xs' 
            children={`Views - ${views}`}
            textTransform='uppercase' 
            />

            <Stack direction={['column','row']} alignItems='center'>
                <Link to={`/course/${id}`}>
                    <Button colorScheme={'yellow'}>Watch Now</Button>
                </Link>
                <Button 
                variant={'ghost'} 
                colorScheme={'yellow'}
                onClick={()=>addtoPlaylistHandler(id)}
                >
                    Add To Playlist
                </Button>
            </Stack>
        </VStack>
    )
}

const Courses = () => {

    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");

    const categories = [
        'Web Development',
        'Artificial Intelligence',
        'Data Structures',
        'App Development',
        'Data Science',
        'Game Development'
    ];

    const addtoPlaylistHandler = ()=>{
        console.log('added to playlist')
    }

  return (
    <Container
    minH={'95vh'}
    maxW="container.lg"
    paddingY={'8'}
    >
        <Heading children='All Courses' m={'8'}/>

        <Input 
        value={keyword} 
        onChange={(e)=> setKeyword(e.target.value)} 
        placeholder='Search A Course...'
        type={'text'}
        focusBorderColor="yellow.500"
        />

        <HStack 
        overflowX={'auto'}
        paddingY='8'
        css={{'&::-webkit-scrollbar': {display: 'none',},}}
        >
            {
                categories.map((item,index)=>(
                    <Button 
                    key={index} 
                    onClick={()=> setCategory(item)} 
                    minW={'60'}
                    >
                    <Text children={item}/>
                    </Button>
                ))
            }
        </HStack>

        <Stack
        direction={['column','row']}
        flexWrap="wrap"
        justifyContent={['flex-start','space-evenly']}
        alignItems={['center','flex-start']}
        >
            <Course 
            title={'Sample'}
            description={'Sample'}
            views={23}
            imageSrc={"https://yourtechdiet.com/wp-content/uploads/2022/01/Best-AI-tools-for-Image-Processing-696x368.jpg"}
            id={'Sample'}
            creator={'Sample Boy'}
            lecture={2}
            addtoPlaylistHandler={addtoPlaylistHandler}
            />
        </Stack>
    </Container>
  )
}

export default Courses