import React, { useContext, useState } from 'react'
import "../style.css"
import { languagecontext } from './Context'
function Miniproject4() {
  const uselangcontext=useContext(languagecontext)
  const[State,Setstate]=useState()
  return (
    <>
    <h1>Miniproject4</h1>
    <form>
      <select onChange={(e)=>Setstate(e.target.value)}>
        <option value="eng">English</option>
        <option value="fre">French</option>
</select>
    <p>{State==="eng"?(<p>{uselangcontext}</p>): State==="fre"?(<p>Contenu linguistique</p>):""}</p>
    </form>
    </>
  )
}

export default Miniproject4