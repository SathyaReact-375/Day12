import React, { useContext } from 'react'
import { themecontext } from './Context'


function Task12() {
    const { theme, setTheme } = useContext(themecontext)
    

  return (
    <>
    <h1>Task12</h1>
    <div className={theme === "light" ? "light-mode" : "dark-mode"}>
 <h1>Theme: {theme}</h1>
 <button id='theme' onClick={() => {setTheme(theme === "light" ?(document.body.style.backgroundColor = "#333", document.body.style.color = "#fff", "dark") 
      : 
      (document.body.style.backgroundColor = "#fff", document.body.style.color = "#000", "light"))
   
 }}>Toggle Theme</button>
 </div>
    </>
  )
}

export default Task12