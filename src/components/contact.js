import React from 'react'
import Aos from 'aos'

const Contact = () => {
    React.useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return(
        <div id="contact" style={{width: "450px", textAlign: "center", marginLeft: "28%", height: "70vh"}} data-aos="fade-right">
            <h1 style={{color: "#778da9"}}>Contact</h1>
            <div style={{color: "#e5e5e5", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <p style={{fontSize: 25}}>
                    Thank you for taking the time to visit my website. 
                    If you have an opportunity, please do not hesitate to contact me.
                </p>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <i className="fad fa-envelope" style={{marginTop: 8, marginRight: 5, fontSize: 25}}></i>
                    <p style={{fontSize: 25}}>dianrisantia@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact