import React, { useEffect, useState } from 'react'
import { tasknine } from './Context'
import contextfirst from "./Context"
import countercontext from './Countercontext'
import Task4 from './Task4'
import Task7 from './Task7'
import Task8 from './Task8'
import Task9 from './Task9'
import Task11 from './Task11'
import { themecontext } from './Context'
import Task12 from './Task12'
import { fetchcontext } from './Context'
import Task13 from './Task13'
import Miniproject1 from './Miniproject1'

function Parent() {
    const[State,Setstate]=useState("default Value")
    const[Counter,SetCounter]=useState(0)
    const[val,Setval]=useState("dummy value")
    const [theme, setTheme] = useState("light");
    const[storefetch,Setfetch]=useState([])

    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then((data)=>Setfetch(data)) 
    },[])
    
  return (
    <>
    <h1>This parent Provider</h1>
    <h1>Task2</h1>
    <p>Context Created</p>
    <h1>Task3</h1>
    <button onClick={()=>Setstate("this is value setted in parent componenet and displayed in Task 3 component")}>value button</button>

    <contextfirst.Provider value={State}>
        <Task4/>
        <Task8/>
        <Task11/>
    </contextfirst.Provider> 
    <countercontext.Provider value={Counter}>
        <Task7/>
    <button onClick={()=>SetCounter(pre=>pre-1)}>decreament</button>
    <button onClick={()=>SetCounter(Counter+1)}>Increament</button>
    </countercontext.Provider>
    <tasknine.Provider value={{val,Setval}}>
      <Task9/>
    </tasknine.Provider>
    <themecontext.Provider value={{ theme, setTheme }}>
    <Task12/>
    <Miniproject1/>
    </themecontext.Provider>
    <fetchcontext.Provider value={storefetch}>
      <Task13/>
    </fetchcontext.Provider>
    </>
  )
}

export default Parent