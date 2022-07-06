import React from 'react'
import { Routes,Route, Router } from 'react-router-dom'
import About from './About'
import Link from './Link'
import Main from './Main'
import NavbarExample from './NavbarExample'

const Home = () => {
  return (
    <div>

    <NavbarExample  />
    <Routes>
            <Route path='/' element={<Main  />} />
            <Route path="/about" element={<About />} />
            <Route path="/link" element={<Link />} />
        </Routes>
       
        
    </div>
  )
}

export default Home