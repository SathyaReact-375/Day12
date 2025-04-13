import React from 'react'
import "../style.css"
function Task1() {
  return (
    <>
    <div>
        <h1>Task1</h1>
  <h2>React Context API Explained</h2>
  
  <p>
    The <strong>React Context API</strong> is a built-in feature in React that provides a way to pass data through the component tree without having to pass props down manually at every level. Think of it as a mechanism for sharing state across multiple components, regardless of their nesting depth.
  </p>
  
  <h3>Why is it used?</h3>
  
  <p>
    It primarily solves the problem of <strong>"prop drilling"</strong>. Prop drilling occurs when you need to pass data from a top-level component to a deeply nested child component. To do this without Context, you would have to pass the data as props through all the intermediate components, even if those intermediate components don't actually need the data themselves. This can make components less reusable and the codebase harder to maintain and refactor.
  </p>
  
  <p>
    Context API offers a cleaner alternative:
  </p>
  <ul>
    <li>You create a 'Context' object using <code>React.createContext()</code>.</li>
    <li>You use a 'Provider' component (e.g., <code>MyContext.Provider</code>) higher up in the tree to wrap the components that need access to the data. The Provider accepts a `value` prop containing the data to be shared.</li>
    <li>Components further down the tree that need the data can subscribe to this context using either the `useContext` Hook (the modern approach) or a 'Consumer' component (<code>MyContext.Consumer</code>).</li>
  </ul>
  
  <p>
    In essence, the Context API allows components to tap into shared data directly, simplifying state management for global or semi-global data like themes, user authentication status, language preferences, etc., without cluttering intermediate components with unnecessary props.
  </p>
</div>
    </>
  )
}

export default Task1