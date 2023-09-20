import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter ] = useState(0);
  const addValue = ()=> {
    setCounter(count+1)
  }
  return (
    <>
        <h1>react project</h1>
        <h2>Counter value: {count}</h2>

        <button onClick={addValue}>Add Value</button>
        <br />
        <button>Remove Value</button>
    </>
  )
}

export default App
