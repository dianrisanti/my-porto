import React from 'react'
import {
    Image,
    Carousel
} from 'react-bootstrap'
import '../css/socmed.css'
import { Project1, Project2, Project3, Project4, Project5, Project6 } from '../assets'
import Aos from 'aos'

const Project = () => {
    React.useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const photos = [Project1, Project2, Project3, Project4, Project5, Project6]

    return(
        <div style={{height: "100vh"}} id="projects">
            <h2 style={{color: "#778da9"}} data-aos="fade-right" >My simple project I've built</h2>
            <div style={{display: "flex", flexDirection: "row", width: "75vw", justifyContent: "space-between", alignItems: "center", marginTop: 40}}>
                <div style={{marginRight: 20, color: "#e5e5e5", marginTop: -80}} data-aos="fade-right">
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10}}>
                        <h4 style={{marginBottom: 20}}>E-commerce</h4>
                        <a href="https://github.com/dianrisanti/ecommerce.git">
                            <i className="fad fa-external-link-alt logo"></i>
                        </a>
                    </div>
                    <div style={{backgroundColor: "#1b263b", width: "400px", padding: 15, borderRadius: 5}}>
                        <p>A web application for buying and selling products with different warehouse locations. 
                        You could buy any available products and we would send them from the nearest warehouse location.</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "250px"}}>
                        <p>React</p>
                        <p>Node.js</p>
                        <p>Express</p>
                        <p>MySQL</p>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <Carousel>
                        {
                            photos.map((item, index) => {
                                return(
                                    <Carousel.Item key={index}>
                                        <Image
                                            className="d-block w-100"
                                            src={item.default}
                                            alt="First slide"
                                            style={{height: "20rem", width: "52rem"}}
                                        />
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Project