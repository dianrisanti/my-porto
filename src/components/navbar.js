import React from 'react'
import {
    Nav,
    Navbar,
    Button
} from 'react-bootstrap'

const Navigation = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#features">Experiences</Nav.Link>
                    <Nav.Link href="#pricing">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Button variant="resume">Resume</Button>
            </Navbar>
        </div>
    )
}

export default Navigation