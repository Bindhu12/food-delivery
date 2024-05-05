import React, { useState } from 'react';
import './Header.css';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavMenu from './NavMenu';
import User from '../User/User';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { FaRegUser } from "react-icons/fa";

function Header() {
    const [showNav, setShowNav] = useState(false);
    const [showModal, setShowModal]=useState(false);
    const isLoggedIn=useSelector(state=>state.userDet.isLoggedIn);
    
    return (
        <header className='container-fluid header-position'>
            <NavBar expand='sm'>
                <Container fluid>
                    <NavBar.Toggle onClick={() => setShowNav(true)} />
                    <NavBar.Brand className='nav-color hide-nav-big'>Hungry Basket</NavBar.Brand>
                    <NavMenu showNav={showNav} />
                    <NavBar.Text>
                        <Link to="/cart"><FaShoppingCart className='me-3 icon-cursor' /></Link>
                        {
                            isLoggedIn?<FaRegUser className='me-3 icon-cursor'/>: <Button className='bg-light text-dark border-secondary sign-in' onClick={()=>setShowModal(true)}>Sign in</Button>
                        }
                    </NavBar.Text>
                    <User show={showModal} setShowModal={setShowModal}/>

                    <Offcanvas show={showNav} onHide={() => setShowNav(false)}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <NavBar.Brand className='nav-color'>Hungry Basket</NavBar.Brand>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <NavMenu showNav={showNav} />
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>

            </NavBar>





            {/* <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <h1 className="navbar-brand nav-color pb-0">Hungry Basket</h1>
                    <ul className="navbar-nav text-center hide-nav">
                        <li className="nav-item">
                            <a href="" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Contact us</a>
                        </li>
                    </ul>
                    <div className="navbar-text">
                        <FaSearch className='me-3 icon-cursor' />
                        <FaShoppingCart className='me-3 icon-cursor' />
                        <button className='btn border rounded-pill signin-color'>Sign in</button>
                    </div>

                </div>
            </nav> */}
        </header>
    )
}

export default Header
