import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import logo from '../../../public/porto-toys.png'

const NavigationBar = () => {
    return (
        <div>
            <div className='container d-flex justify-content-between align-items-center py-3'>
                <div className='d-flex align-items-center'>
                    <img className='logo' src={logo} alt="logo" />
                    <h5 className='fw-bold ms-3 company-name'>Porto Toys</h5>
                </div>
                <div className='d-flex align-items-center'>
                    <NavDropdown className='fw-semibold' title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            <Link>My Toys</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"> <Link>Add A Toy</Link> </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href=""> <button className='btn fw-semibold'>Logout</button> </NavDropdown.Item>
                    </NavDropdown>
                    <img className='logo ms-4' src="" alt="logo" />
                    <button className='btn btn-outline-dark'>Login</button>
                </div>
            </div>
            <Navbar  className='nav-bg-color py-3' expand="lg">
                <Container>
                    {/* <Navbar.Brand className='text-white' href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className='text-white fw-semibold' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-white fw-semibold' href="#link">All Toys</Nav.Link>
                            <Nav.Link className='text-white fw-semibold' href="#link">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;