import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from '../../assests/videos/intro.mp4'

const  CoursePage = () => {

    // const lectureTitle = "Hello";
    const [lectureNumber, setLectureNumber] = useState(0);

    const lectures=[
    {
        _id : "abcd",
        title: "Sample",
        description : "Sample Desc",
        video:{
            url:"abc",
        },
    },

    {
        _id : "abcde",
        title: "Sample2",
        description : "Sample Desc3",
        video:{
            url:"abcde",
        },
    },

    {
        _id : "abcdef",
        title: "Sample3",
        description : "Sample Desc3",
        video:{
            url:"abcde",
        },
    },

];

    

  return (
    <Grid
    minH={'90vh'}
    templateColumns={['1fr','3fr 1fr']}
    >

        <Box>
            <video width={'100%'}
                controls
                controlsList='nodownload noremoteplayback'
                disablePictureInPicture
                disableRemotePlayback
                src={introVideo}
            > 
            </video>

            <Heading m={'4'} children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`} />

            <Heading m={'4'} children='Description' />
            <Text m={'4'} children={lectures[lectureNumber].description} />
        </Box>

        <VStack>
            {
                lectures.map((item,index) =>(
                    <button key={item._id} onClick={()=> setLectureNumber(index)}
                        style={{
                            width: "100%",
                            padding: '1rem',
                            textAlign: 'center',
                            margin:0,
                            borderBottom: '1px solid rgba(0,0,0,0.2)'
                        }}
                    >
                        <Text noOfLines={1}>
                            #{index+1} {item.title}
                        </Text>
                    </button>
                ))
            }
        </VStack>
    </Grid>
  )
}

export default CoursePage