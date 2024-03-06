import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import ChartSection from './Components/currenctChart/ChartSection'
import Screen from './Components/screen/Screen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Screen></Screen>
    </>
  )
}

export default App
