import React from 'react'
import { useDispatch } from 'react-redux'
import  {API_Option}  from '../utils/constants';
import { addPopularMovie } from '../utils/moviesSlice'
import { useEffect } from 'react';

export const usePopularMovie = () => {
const dispatch=useDispatch();
  const fetchPopularMovies=async ()=>{
    const responce=await fetch ("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_Option)
    const data=await responce.json();
    dispatch(addPopularMovie(data.results))
  }

  useEffect(()=>{
    fetchPopularMovies();

  },[])

}

