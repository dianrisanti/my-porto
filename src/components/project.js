import React from 'react'
import {
    Image
} from 'react-bootstrap'
import { ProjectFoto } from '../assets'
import Aos from 'aos'

const Project = () => {
    React.useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return(
        <div style={{height: "100vh"}} id="projects">
            <h2 style={{color: "#778da9"}} data-aos="fade-right" >My simple project I've built</h2>
            <div style={{display: "flex", flexDirection: "row", width: "75vw", justifyContent: "space-between", alignItems: "center", marginTop: 40}}>
                <div style={{marginRight: 20, color: "#e5e5e5", marginTop: -80}} data-aos="fade-right">
                    <h4 style={{marginBottom: 20}}>E-commerce</h4>
                    <div style={{backgroundColor: "#1b263b", width: "400px", padding: 15, borderRadius: 5}}>
                        <p>A web application for buying and selling products with different warehouse locations. 
                        You could buy any available products and we would send them from the nearest warehouse location.</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "250px"}}>
                        <p>React</p>
                        <p>Node.js</p>
                        <p>Express</p>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <a href="https://github.com/Franky777shg/PWD-Warehouse-3.git">
                        <Image
                            src={ProjectFoto.default}
                            style={{borderRadius: 5}}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project