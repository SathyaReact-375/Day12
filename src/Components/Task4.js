import React, { useContext, useState} from 'react'
import "../style.css"
import contextfirst from './Context'
function Task4() {
    const useCont=useContext(contextfirst)
    const [get,set] = useState("");
    
  return (
   <>
   <p>{useCont}</p>
   <h1>Task4</h1>
   <p>I have already created parent componenet for Context Now Task 4 is our child now i access a parent's default value by using use context</p>
   <p>{get}</p>
   <button onClick={()=>set(useCont)}>click me</button>
   <h1>Task5</h1>
   <p>Task 5 is a sibbling Same value for<b> Task 4 & 5:</b>{get}</p>
   <p>Click the Task 4 button</p>
   </>
  )
}

export default Task4