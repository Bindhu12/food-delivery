import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Header.css';

function NavMenu({showNav}) {
    return (
        <Nav className={showNav?'':'hide-nav-big'}>
            <Nav.Item>
                <Nav.Link href='/home'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/home#menu'>Menu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href='/contact'>Contact Us</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavMenu
