import React, { useContext } from 'react'
import "../style.css"
import contextdefault, { contexttwo } from './defaultcontext'
function Task10() {
    const useCont=useContext(contextdefault)
    const usetwo=useContext(contexttwo)
  return (
    <>
    <h1>Task10</h1>
    <p>{useCont}</p>
    <p>{usetwo}</p>
    </>
  )
}

export default Task10