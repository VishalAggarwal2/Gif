import React,{useState,useEffect} from 'react'
import "./style.css"
import axios from 'axios'
import Spinner from './Spinner'
import useGif from './useGif'
const Searchgif = () => {

   const[tag,setTag]=useState("car ");

const ch=(e)=>{
    setTag(e.target.value);
}
const {gif,load,generate}= useGif(tag);

  return (
    <div className='random'>
      <h1>Seach Your Gif</h1>
      <input type="text" className='search' onChange={ch} value={tag} />
    {
        load?<><Spinner></Spinner></>:<>  
<video src={gif} autoPlay loop></video>  
        
        </>
    }
  <button onClick={()=>{generate()}}>Generate</button>
    </div>
  )
}

export default Searchgif
