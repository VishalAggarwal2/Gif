import React,{useState,useEffect} from 'react'
import axios from 'axios'

const useGif = (tag) => {
    const[gif,setGif]=useState('')
    const url = tag? `https://api.giphy.com/v1/gifs/random?api_key=h8PXtfTtRqGU0yP49oBYtX3RvRcVRZVK&tag=${tag}`:"https://api.giphy.com/v1/gifs/random?api_key=h8PXtfTtRqGU0yP49oBYtX3RvRcVRZVK&q=tom+and+jerry&limit=25&offset=0"

     const[load,setLoad]=useState(false);
 const generate=async()=>{
     setLoad(true)
  const data= await axios.get(url);
  console.log(data.data.data.images.downsized_small.mp4)
  const image = data.data.data.images.downsized_small.mp4;
  await setGif(image);
  setLoad(false)

 }

 useEffect(()=>{
     generate();
 },[])
 return{gif,generate,load}
}

export default useGif
