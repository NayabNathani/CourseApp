import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCourses } from '../../redux/actions/course'
import { toast } from 'react-hot-toast'
import { addToPlaylist } from "../../redux/actions/profile"
import { loadUser } from "../../redux/actions/user"

const Course = (
    {
        views,
        title,
        imageSrc,
        id,
        addtoPlaylistHandler,
        creator,
        description, 
        lecture,
        loading
    })=>{

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
                isLoading={loading}
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
    const dispatch = useDispatch();
    const {loading, courses, error, message} = useSelector(state=>state.course);

    const categories = [
        'Web Development',
        'Artificial Intelligence',
        'Data Structures',
        'App Development',
        'Data Science',
        'Game Development'
    ];

    const addtoPlaylistHandler = async (courseId)=>{
       await dispatch(addToPlaylist(courseId));
       dispatch(loadUser());
    };

    useEffect(() => {
        dispatch(getAllCourses(category,keyword));
        if(error){
            toast.error(error);
            dispatch({type:"clearError"});
        }
        if(message){
            toast.success(message);
            dispatch({type:"clearMessage"});
        }
    }, [category,keyword,dispatch, error, message]);
    

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
        {/* <Course 
            title={'Sample'}
            description={'Sample'}
            views={23}
            imageSrc={"https://yourtechdiet.com/wp-content/uploads/2022/01/Best-AI-tools-for-Image-Processing-696x368.jpg"}
            id={'Sample'}
            creator={'Sample Boy'}
            lecture={2}
            addtoPlaylistHandler={addtoPlaylistHandler}
        /> */}

            { courses.length > 0?
                courses.map((item)=>
                    (
                        <Course
                        key={item._id}
                        title={item.title}
                        description={item.description}
                        views={item.views}
                        imageSrc={item.poster.url}
                        id={item._id}
                        creator={item.createBy}
                        lecture={item.numOfVideos}
                        addtoPlaylistHandler={addtoPlaylistHandler}
                        loading={loading}
                        />
                    )
                ):
                <Heading mt='4'>Course Not Found!!</Heading>
            }
        </Stack>
    </Container>
  )
}

export default Courses