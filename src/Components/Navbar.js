import { Button, Container, Navbar, Nav, Col, Row } from 'react-bootstrap';
import Usaflag from './img/usa-flag.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar className="full-nav">
                <Container fluid={true}>
                    <Navbar.Brand href="#" className="web-logo Montserrat " >Telegraph</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="">
                        <Nav
                            className="me-auto my-2 my-lg-3 Poppins all-links"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" className="nav-link-s">Home</Link>
                            <Nav.Link href="#action2" className="nav-link-s">Developers</Nav.Link>
                            <Nav.Link href="#action2" className="nav-link-s">Use Cases</Nav.Link>
                            <Nav.Link href="#action2" className="nav-link-s">Ecosystem</Nav.Link>
                            <Nav.Link href="#action2" className="nav-link-s">Community</Nav.Link>
                            <Nav.Link href="#action2" >Resources</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="justify-content-end language-e">
                        <img src={Usaflag} />
                        <p className="Poppins ">EN</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10H7Z" fill="#30333D" /></svg>
                    </div>
                    <Button variant="primary" className="justify-content-end blue-btn Montserrat">Start Now</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default App;
