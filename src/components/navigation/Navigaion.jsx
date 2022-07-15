import React from 'react'
import {Router,Routes,Route,Link} from 'react-router-dom'
import Main from './Main'
import AboutUs from './AboutUs'
import Contacts from './Contacts'
import Login from './Login'
import Register from './Register'
import Services from './Services'
import Menu from './Menu'


const Navigaion = () => {
  return (
    <div>
    <Router basename='/'>
    <Menu />
      <Routes>
    <Route path='/' element={<Main/>} />
    <Route path='/about' element={<AboutUs/>} />
    <Route path='/contacts' element={<Contacts/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/services' element={<Services/>} />



      
      </Routes>
    </Router>
    
    </div>
  )
}

export default Navigaion