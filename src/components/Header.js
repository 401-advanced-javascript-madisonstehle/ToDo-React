import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href="#home">ToDo</Navbar.Brand>
    </Navbar>
  );
}

export default Header;