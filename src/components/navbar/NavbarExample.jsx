import React from 'react'
import {Nav,Navbar,Container,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import './navbar.css'
import {Link} from 'react-router-dom'

const NavbarExample = () => {
  const[click, setClick] = React.useState(false)
  const  handleClick = () => setClick(!click)
  return (
    <div >
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >
            <Link to="/">Home</Link></Nav.Link>
            <Nav.Link >
            <Link to="/about">About</Link></Nav.Link>
           
            <Nav.Link href="#pricing">
            <Link to="/link">Link</Link></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
         
    </div>
  )
}

export default NavbarExample