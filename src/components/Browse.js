import React, { useEffect } from 'react'
import Header from './Header'
import MainContainer from "./MainContainer"
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from "./SecondaryContainer"
import {usePopularMovie} from "../hooks/usePopularMovie"
import GPTSearch from './GPTSearch'
import GPTContext from '../utils/createContext'
import { useContext } from 'react'
import { useSelector } from 'react-redux'


const Browse = () => {
  const contextValue = useContext(GPTContext);
  useNowPlayingMovies ();
  usePopularMovie();
  const isGPT=useSelector((store)=>store?.GPT?.isGPT)
 
  
  
  return (
    // <div>
    //   <Header />
    //    {contextValue.isGPT ? <GPTSearch /> : <MainContainer />}
    //    {contextValue.isGPT ? null : <SecondaryContainer />}
    // </div>

    <div>
      <Header />
       {isGPT ? <GPTSearch /> :
       <>
        <MainContainer />
        <SecondaryContainer />
        </>
        }
       
    </div>
  );

}

export default Browse