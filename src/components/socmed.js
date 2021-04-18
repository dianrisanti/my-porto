import React from 'react'
import '../css/socmed.css'

const Socmed = () => {
    return(
        <div style={{display: "flex", flexDirection: "column", position: "fixed", marginLeft: 1200, marginTop: 270, alignItems: "center", height: "550px", justifyContent: "space-between"}}>
            <a href="https://github.com/dianrisanti">
                <i className="fab fa-github logo"></i>
            </a>
            <a href="https://www.instagram.com/dianrisanti/">
                <i className="fab fa-instagram logo"></i>
            </a>
            <a href="https://www.linkedin.com/in/dianrisanti/">
                <i className="fab fa-linkedin logo"></i>
            </a>
            <div style={{borderLeft: "3px solid #778da9", height: "400px"}}></div>
        </div>
    )
}

export default Socmed