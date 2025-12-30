// import { useState } from 'react'

import './App.css'
import Home from './Component/Home'
import Explore from './Component/Explore'
import SideNav from './Component/SideNav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Playbutton from './Component/Playbutton'

function App() {
 

  return (
    <Router> 
      <div className="flex"> 
        <SideNav /> 
        <div className="flex-1 p-5"> 
          <Routes> 
            <Route path="/" element={<Home/>} /> 
            <Route path="/explore" element={<Explore/>} /> 
          </Routes> 
        </div>
        
      </div>
      <Playbutton/> 
    </Router>
  )
}

export default App
