import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import ChartSection from './Components/currenctChart/ChartSection'
import Screen from './Components/screen/Screen'
import Context from './Components/context/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Context>

      <Screen></Screen>
      </Context>
    </>
  )
}

export default App
