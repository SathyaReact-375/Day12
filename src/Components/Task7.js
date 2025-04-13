import React, { useContext } from 'react'
import "../style.css"
import countercontext from './Countercontext'
import Task6 from './Task6'
function Task7() {
const usecont=useContext(countercontext)
  return (
    <>
    <Task6/>
    <h1>Task7</h1>
    <p>{usecont}</p>
    </>
  )
}

export default Task7