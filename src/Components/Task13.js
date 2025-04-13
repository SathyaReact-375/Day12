import React, { useContext } from 'react'
import { fetchcontext } from './Context'

function Task13() {
    const fetchdata=useContext(fetchcontext)
  return (
    <>
    <h1>Task13</h1>
    <ul>
        {fetchdata.map((val)=>(
            <li>{val.name}</li>
        ))}
    </ul>
    </>
  )
}

export default Task13