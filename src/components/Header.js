import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap'

function Header ({ toggle, status, pageChange }) {
  return (
    <div className='header'>
      <Navbar color='light' light expand='md'>
        <NavbarBrand>blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={status} navbar>
          <Nav className='ml-auto' navbar>
            <p onClick={pageChange} className='nav-item' id='about'>
              about
            </p>
            <p onClick={pageChange} className='nav-item' id='github'>
              GitHub
            </p>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
