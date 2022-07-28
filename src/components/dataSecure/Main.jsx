import React from 'react'
import { BrowserRouter, Route, Link, Router, hashHistory, withRouter, Routes } from 'react-router-dom'
import Hero from './Hero'
import Cloud from './Cloud'
import Recovery from './Recovery'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'

const Main = () => {
  return (
    <div>
     <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
      <Footer />
      

    </div>
  )
}

export default Main