import React, { useState } from 'react'
import{useDispatch} from 'react-redux';
import Love from './Love'

import { ADD } from './Action/Action'

function App() {
  const [name,setname]=useState("")
   const dispatch = useDispatch()

  return (
    <div>
      <input type="text" placeholder="add items" onChange={(e)=>{setname(e.target.value)} } value={name}></input>
      <button onClick={()=>dispatch(ADD(name),setname(""))}>Add</button>
      <Love/>
    </div>
  )
}

export default App
