import React from 'react'
import './navbar.css'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

const Navbar = () => {
    const[click, setClick] = React.useState(false)
    const  handleClick = () => setClick(!click)
  return (
    <div className='navbar'>
        <div className='container'>
        <h1><span ><BsFillHouseFill/>Real</span>Estate</h1>
        <button className='btn'>sign in</button>
        <ul className={click ? 'nav-menu active' :'nav-menu'}>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Search</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
        <div className='hamburger'>
        {click ? (<FaTimesCircle className='icon'/>) : (<HiOutlineMenuAlt4 className='icon'/>)}
            
            </div>
    </div>
    
    </div>
  )
}

export default Navbar