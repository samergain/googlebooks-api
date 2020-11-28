import React from "react";
import Nav from 'react-bootstrap/Nav';

function NavBar() {
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
            <Nav.Link href="/Search">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/Saved">Saved</Nav.Link>
            </Nav.Item>
        </Nav>
    );
  }
  
  export default NavBar;