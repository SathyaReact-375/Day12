import React, { useContext, useState } from 'react'
import "../style.css"
import countercontext from './Countercontext'
function Task11() {
    const useing=useContext(countercontext)
    const[val,Setval]=useState(0)
    console.log(val);
    
  return (
   <>
   <h1>Task11</h1>
   <p>click the button see the console if value above 0 it will display something</p>
   {val>0?(<p>something</p>):""}
    <button onClick={()=>{Setval(useing)
      Setval((pre)=>pre+1)}
    }>click</button>
   </>
  )
}

export default Task11