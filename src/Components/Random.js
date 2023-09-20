import React,{useState,useEffect} from 'react'
import "./style.css"
import useGif from './useGif'
import axios from 'axios'
import Spinner from './Spinner'
const Random = () => {
const{gif,generate,load}= useGif();
  return (
    <div className='random'>
      <h1>Random Gif</h1>
    {
        load?<><Spinner></Spinner></>:<>  
<video src={gif} autoPlay loop></video>  
        
        </>
    }
  <button onClick={()=>{generate()}}>Generate</button>
    </div>
  )
}

export default Random
