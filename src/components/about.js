import React from 'react'
import {
    Image
} from 'react-bootstrap'
import { Foto, MySQL  } from '../assets'

const About = () => {
    return(
        <div style={{marginTop: 30}}>
            <div style={styles.title}>
                <h2 style={{color: "#778da9"}}>About Me</h2>
                <br style={{width: "5rem"}}/>
            </div>

            <div style={{display: "flex", flexDirection: "row", width: "65vw", justifyContent: "space-between"}}>
                <div style={{color: "#e5e5e5"}}>
                    <p>
                        Hello! My name is Dian. I graduated from the University of Indonesia majoring in Physics. My interest in application development started back in 2020 when I volunteered as a Tutor in Artificial Intelligence Center Indonesia - turns out, developing application is a very fun thing! 
                    </p>
                    <p>
                        Then, I decided to join Purwadhika Startup and Coding School in Full Stack Development. Here are a few programming languages and tools that I've learned:
                    </p>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <i className="fab fa-js-square" style={{fontSize: "40px"}}></i>
                        <i className="fab fa-html5" style={{fontSize: "40px"}}></i>
                        <i className="fab fa-css3-alt" style={{fontSize: "40px"}}></i>
                        <i className="fab fa-react" style={{fontSize: "40px"}}></i>
                        <i className="fab fa-node-js" style={{fontSize: "40px"}}></i>
                        <Image
                            src={MySQL.default}
                            style={{width: "43px", height: "45px"}}
                        />
                    </div>
                </div>
                
                <div style={{position: "relative", border: "1px solid #e5e5e5", borderRadius: "5px", width: "15rem", height: "15rem",marginLeft: "5rem", padding: 10, marginTop: 20}}>
                    <Image 
                        src={Foto.default}
                        style={{width: "15rem", height: "15rem", marginLeft: "5rem", borderRadius: "5px", position: "relative", float: "right", marginRight: "10px", marginTop: -30}}
                    />
                </div>
            </div>
        </div>
    )
}

const styles = {
    title: {
        display: "flex",
        flexDirection: "row",
        width: "10rem"
    }
}

export default About