import React from 'react'
import {
    Nav,
    Navbar,
    Image
} from 'react-bootstrap'
import { Logo  } from '../assets'
import { Link } from "react-scroll"
import '../css/cursor.css'

const Navigation = () => {
    return(
        <div>
            <Navbar sticky="top" style={{backgroundColor: "#14213d"}}>
                <Navbar.Brand>
                    <Link activeClass="active" to="introduction" spy={true} smooth={true} duration={1000} style={{color: "#e5e5e5"}}>
                        <Image
                            src={Logo.default}
                            style={{width: "43px", height: "45px", cursor: "pointer"}}
                        />
                    </Link>
                </Navbar.Brand>
                <Nav className="mr-auto nav-link" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "25vw"}}>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-250} duration={1000} style={{color: "#e5e5e5", cursor: "pointer"}}>
                        About
                    </Link>
                    <Link activeClass="active" to="experiences" spy={true} smooth={true} offset={-180} duration={1000} style={{color: "#e5e5e5", cursor: "pointer"}}>
                        Experiences
                    </Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={1000} style={{color: "#e5e5e5", cursor: "pointer"}}>
                        Projects
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={1000} style={{color: "#e5e5e5", cursor: "pointer"}}>
                        Contact
                    </Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation