import React, { useContext } from 'react'
import { tasknine } from "./Context";
import "../style.css"
function Task9() {
    const { val, Setval } = useContext(tasknine);
  return (
    <>
    <h1>Task9</h1>
    <p>{val}</p>
    <button onClick={()=>Setval("updated  value from Task9")}>update</button>
    </>
  )
}

export default Task9