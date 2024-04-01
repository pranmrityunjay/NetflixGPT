import React from 'react'
import { useDispatch } from 'react-redux'
import  {API_Option}  from '../utils/constants';
import { addNowplayingMovie } from '../utils/moviesSlice';
import { useEffect } from 'react';



export const useNowPlayingMovies = () => {
  
const dispatch=useDispatch();
  const fetchNowPlayingMovies=async ()=>{
    const responce=await fetch ("https://api.themoviedb.org/3/movie/now_playing",API_Option)
    const data=await responce.json();
   
    dispatch(addNowplayingMovie(data.results))
  }

  useEffect(()=>{
    fetchNowPlayingMovies();

  },[])


  
}

export default useNowPlayingMovies