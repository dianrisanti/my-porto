import React from 'react'
import {
    Image
} from 'react-bootstrap'
import { ProjectFoto } from '../assets'

const Project = () => {
    return(
        <div>
            <h2 style={{color: "#778da9"}}>My simple project I've built</h2>
            <div style={{display: "flex", flexDirection: "row", width: "75vw", justifyContent: "space-between", alignItems: "center", marginTop: 40}}>
                <div style={{marginRight: 30, color: "#e5e5e5", marginTop: -50}}>
                    <h4 style={{marginBottom: 30}}>E-commerce</h4>
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
                <Image
                    src={ProjectFoto.default}
                    style={{borderRadius: 5}}
                />
            </div>
        </div>
    )
}

export default Project