import React, { useState } from 'react'
import Random from './Components/Random'
import Searchgif from './Components/Searchgif'

function App() {
  const[gif,setGif]=useState("")
  const seetgif=()=>{

  }
  return (
    <div>
<Random></Random>
<Searchgif></Searchgif>
    </div>
  )
}

export default App
