import React from "react";
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar sticky="bottom" bg='dark' variant= 'dark'>
      <Navbar.Brand>&copy; 2020 Madison Stehle</Navbar.Brand>
    </Navbar>
  );
}

export default Footer;