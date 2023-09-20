import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className='bg-green-400 text-black rounded-xl p-4'>Tailwind test</h1>
        <div className='flex'>
        <Card name = 'suman' btntxt='click me m-5'/>
        <Card name = 'jeet' btntxt='view profile' m-5/>
        <Card p-5/>
        </div>
    </>
  )
}

export default App
