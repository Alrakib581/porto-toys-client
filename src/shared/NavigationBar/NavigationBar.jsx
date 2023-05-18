import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import logo from '../../../public/porto-toys.png'
import ActiveLink from '../../components/ActiveLink/ActiveLink';

const NavigationBar = () => {
    return (
        <div className=''>
            <div  className='container bg-white d-flex justify-content-between align-items-center py-3'>
                <div className='d-flex align-items-center'>
                    <img className='logo' src={logo} alt="logo" />
                    <h5 className='ms-3'><Link className='fw-bold company-name text-decoration-none'>Porto Toys</Link></h5>
                </div>
                <div  className='d-flex align-items-center'>
                    <NavDropdown  className='fw-semibold' title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            <Link>My Toys</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"> <Link>Add A Toy</Link> </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href=""> <button className='btn fw-semibold'>Logout</button> </NavDropdown.Item>
                    </NavDropdown>
                    <img className='logo ms-4' src="" alt="logo" />
                    <Link className='btn btn-outline-dark' to='/login'>Login</Link>
                </div>
            </div>
            <Navbar className='nav-bg-color py-3' expand="lg">
                <Container>
                    {/* <Navbar.Brand className='text-white' href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto d-md-flex align-items-center gap-3">
                            <ActiveLink to='/'>Home</ActiveLink>
                            <ActiveLink to='/alltoys'>All Toys</ActiveLink>
                            <ActiveLink to='/blog'>Blog</ActiveLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;