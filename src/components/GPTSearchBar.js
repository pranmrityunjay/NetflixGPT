import React from "react";
import lang from "../utils/languageConstants";
import { useState } from "react";
import { useSelector } from "react-redux";


const GPTSearchBar = () => {
    // const [choose,chnangeChoose]=useState("eng");


    const choose=useSelector((store)=>store.config.lang)
  return (
    <div>
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black p-3 grid grid-cols-12 rounded-sm ">
          <input
            className="col-span-9 p-2 mx-3 bg-gray-700"
            type="text"
            placeholder={
                choose == "en" ? lang.en.gptSeacrhPlaceHolder :
                choose == "hin" ? lang.hin.gptSeacrhPlaceHolder :
                choose == "french" ? lang.french.gptSeacrhPlaceHolder :
                ""
            }
          ></input>
          <button className="col-span-3 p-2 bg-red-700">
          {
                choose == "en" ? lang.en.seacrh:
                choose == "hin" ? lang.hin.search:
                choose == "french" ? lang.french.search :
                ""
            }
          </button>
        </form>
      </div>

      {/* <div className="bg-green-600 w-1/2 mx-auto my-2 rounded-sm">
        <span className="text-white mx-2">Select your language:</span>
        <span onClick={(e)=>chnangeChoose("en")}> English </span>
        <span onClick={(e)=>chnangeChoose("hin")}> Hindi </span>
        <span onClick={(e)=>chnangeChoose("french")}> French </span>

        
      </div> */}


    </div>
  );
};

export default GPTSearchBar;
