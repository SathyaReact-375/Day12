import React, { useContext } from 'react'
import contextfirst from './Context'
import "../style.css"
function Task8() {
    const using=useContext(contextfirst)
    
  return (
    <>
    <h1>Task8</h1>
    <p>Task8 Component is a child rendered under parent componenet</p>
    <p>Passed value is:{using}</p>
    </>
  )
}

export default Task8