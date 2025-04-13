import React, { useContext } from 'react'
import "../style.css"
import contextdefault from './defaultcontext'
function Task6() {
    const useCont=useContext(contextdefault)
  return (
    <>
    <h1>Task6</h1>
    <p>{useCont}</p>
    </>
  )
}

export default Task6