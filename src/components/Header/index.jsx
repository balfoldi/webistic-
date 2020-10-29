import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import CheckLanguageDisplay from '../CheckLanguageDisplay';

const Header = () => {
  return (
    <>
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'> Webistic</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/works'>Works</Nav.Link>
        </Nav>
        <CheckLanguageDisplay />
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};
export default Header;