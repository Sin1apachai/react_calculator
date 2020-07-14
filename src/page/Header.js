import React from 'react'
import { Navbar } from 'react-bootstrap';
// import { Link } from 'react-router'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Calculator</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    )
}
export default Header