import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"varun",
    age :21

  }
  let newArr = [12,3,4,5,6]

  return (
   <>
   
   <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
  <br />
  <Card username="chaiwala" someObej={myObj} altarray={newArr}/>
  <Card/>
    

   </>
  )
}

export default App
