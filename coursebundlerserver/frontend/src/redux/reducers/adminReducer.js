import { createReducer } from "@reduxjs/toolkit";

// const initialState = {
//     message: null,
//     loading: false,
//   };

export const adminReducer = createReducer({},{

    getAdminStatsRequest:(state)=>{
        state.loading=true;
    },
    getAdminStatsSuccess:(state, action)=>{
        state.loading=false;
        state.stats = action.payload.stats;
        state.usersCount = action.payload.usersCount;
        state.viewsCount = action.payload.viewsCount;
        state.subscriptionCount = action.payload.subscriptionCount;
        state.subscriptionPercentage = action.payload.subscriptionPercentage;
        state.viewsPercentage = action.payload.viewsPercentage;
        state.usersPercentage = action.payload.usersPercentage;
        state.usersProfit = action.payload.usersProfit;
        state.subscriptionProfit = action.payload.subscriptionProfit;
        state.viewsProfit = action.payload.viewsProfit;
    },
    getAdminStatsFail:(state, action)=>{
        state.loading=false;
        state.error = action.payload;
    },
    
    createCourseRequest:(state)=>{
        state.loading=true;
    },
    createCourseSuccess:(state, action)=>{
        state.loading=false;
        state.message = action.payload;
    },
    createCourseFail:(state, action)=>{
        state.loading=false;
        state.error = action.payload;
    },

    deleteCourseRequest:(state)=>{
        state.loading=true;
    },
    deleteCourseSuccess:(state, action)=>{
        state.loading=false;
        state.message = action.payload;
    },
    deleteCourseFail:(state, action)=>{
        state.loading=false;
        state.error = action.payload;
    },

    deleteLectureRequest:(state)=>{
        state.loading=true;
    },
    deleteLectureSuccess:(state, action)=>{
        state.loading=false;
        state.message = action.payload;
    },
    deleteLectureFail:(state, action)=>{
        state.loading=false;
        state.error = action.payload;
    },

    addLectureRequest:(state)=>{
        state.loading=true;
    },
    addLectureSuccess:(state, action)=>{
        state.loading=false;
        state.message = action.payload;
    },
    addLectureFail:(state, action)=>{
        state.loading=false;
        state.error = action.payload;
    },

    getAllUsersRequest:(state)=>{
        state.loading=true;
    },
    getAllUsersSuccess:(state, action)=>{
        state.loading=false;
        state.users = action.payload;
    },
    getAllUsersFail:(state, action)=>{
        state.loading=false;
        state.error = action.payload;
    },

    deleteUserRequest:(state)=>{
        state.loading=true;
    },
    deleteUserSuccess:(state, action)=>{
        state.loading=false;
        state.message = action.payload;
    },
    deleteUserFail:(state, action)=>{
        state.loading=false;
        state.error = action.payload;
    },

    updateUserRequest:(state)=>{
        state.loading=true;
    },
    updateUserSuccess:(state, action)=>{
        state.loading=false;
        state.message = action.payload;
    },
    updateUserFail:(state, action)=>{
        state.loading=false;
        state.error = action.payload;
    },
    
    clearError:(state)=>{
        state.error=null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
})