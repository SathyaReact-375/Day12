import React, { useContext, useState } from 'react'
import { loginlogoutcontext } from './Context'

function Miniproject2() {
    const uselog=useContext(loginlogoutcontext)
    const[login,setlogin]=useState(true)
  return (
    <>
    <h1>Miniproject2</h1>
    <p>{login==="Loggedin"?"Welcome user":login==="loggedout"?"gud day":"please login"}</p>
    <button onClick={()=>{setlogin(uselog)
    }}>login</button>
    <button onClick={()=>{setlogin("loggedout")}}>Logout</button>
    </>
  )
}

export default Miniproject2