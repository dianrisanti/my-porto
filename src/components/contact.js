import React from 'react'

const Contact = () => {
    return(
        <div style={{width: "350px", textAlign: "center"}}>
            <h2 style={{color: "#778da9"}}>Contact</h2>
            <div style={{color: "#e5e5e5", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <p>
                    Thank you for taking the time to visit my website. 
                    If you have an opportunity, please do not hesitate to contact me.
                </p>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <i className="fad fa-envelope" style={{marginTop: 5, marginRight: 5}}></i>
                    <p>dianrisantia@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact