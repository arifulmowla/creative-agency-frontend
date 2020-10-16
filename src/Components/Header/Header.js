import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';

import './header.scss'




const Header = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="/"><img className="header-logo" src={logo} alt="Logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ml-auto d-flex align-items-center">
      <Nav.Link href="#home" className="mr-2">Home</Nav.Link>
      <Nav.Link href="#portfolio" className="mr-2">Our Portfolio</Nav.Link>
      <Nav.Link href="#team" className="mr-2">Our team</Nav.Link>
                <Nav.Link href="#contact" className="mr-2">Contact Us</Nav.Link>
                {
                  loggedInUser.isAuthenticated && loggedInUser.role === 0 &&
                  <Link to="/order" className="nav-link"><Button variant="secondary" className="btn btn-secondary secondary-btn" >Dashboard</Button></Link>
                }
                {
                  loggedInUser.isAuthenticated && loggedInUser.role === 1 &&
                  <Link to="/dashboard/services-list" className="nav-link"><Button variant="secondary" className="btn btn-secondary secondary-btn" >Dashboard</Button></Link>
                }
                {
                  !loggedInUser.isAuthenticated && 
      <Link to="/login" className="nav-link" ><Button variant="secondary" className="btn btn-secondary secondary-btn">Login</Button></Link>
                }
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;