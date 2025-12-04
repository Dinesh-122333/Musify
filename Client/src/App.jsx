import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import SideNav from './Component/SideNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideNav/>
    </>
  )
}

export default App
