import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovie:null,
        trailerVideo:null,
        popularMovie:null,
    },
    reducers:{
        addNowplayingMovie:(state,action)=>{
            state.nowPlayingMovie=action.payload;
        },
    
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;

        },
        addPopularMovie:(state,action)=>{
            state.popularMovie=action.payload;
        },


        

    }


})
 
export const {addNowplayingMovie,addTrailerVideo, addPopularMovie}=moviesSlice.actions;
export default moviesSlice.reducer;
