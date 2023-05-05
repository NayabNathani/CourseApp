import { server } from "../store";
import axios from 'axios';

export const createCourse = (formData) => async(dispatch)=>{
    try {
        dispatch({type:"createCourseRequest"});

        const {data} = await axios.post(`${server}/createcourse`,
        formData,
        {
            headers:{
                "Content-type":"multipart/form-data"
            },
            withCredentials:true,
        }
        );
        dispatch({type:"createCourseSuccess", payload: data.lectures});
    } catch (error) {
        dispatch({type:"createCourseFail", payload: error.response.data.message});
    }
};