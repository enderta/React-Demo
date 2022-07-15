import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import {fiAlingRight,fixCircle,fiChevronDown} from 'react-icons/fi'
import './menu.css'


const Menu = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logo">
              <NavLink exact to="/">
                <img src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" alt="logo" className='logo' />
              </NavLink>
            </div>
            <div className="main-menu">
            <nav className='nav'>
              <ul className='nav-items'>
                <li className='menu-item'>
                  <NavLink exact to="/" className='nav-link'>Home</NavLink>
                </li>
                <li className='menu-item'>
                  <NavLink to="/about"  className='nav-link'>About</NavLink>
                </li>
                <li className='menu-item'>
                  <NavLink to="/services"  className='nav-link'>Services</NavLink>
                </li>
                <li className='menu-item sub-menu-item'>
                  <Link to="/#" className='nav-link sub-nav-link'>
                  Account <fiChevronDown className='down' />
                  </Link>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <NavLink to="/login"  className='nav-link'>Login</NavLink>
                    </li>
                    <li className='menu-item'>
                      <NavLink to="/register"  className='nav-link'>Register</NavLink>
                      </li>
                  </ul>
                </li>
                <li className='menu-item'>
                  <NavLink to="/contacts"  className='nav-link'>Contacts</NavLink>
                </li>
                
              </ul>
            </nav>




            </div>
          </div>

        </div>
      </header>
    </div>
    
  )
}

export default Menu