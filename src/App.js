import React from 'react'

import Navbar from './components/navbar'
import Introduction from './components/introduction'
import About from './components/about'
import Experience from './components/experience'
import Project from './components/project'
import Contact from './components/contact'
import Socmed from './components/socmed'

const App = () => {
    return(
        <div style={{backgroundColor: "#14213d"}}>
            <Navbar/>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{padding: 50, marginLeft: 70}}>
                    <Introduction/>
                    <About/>
                    <Experience/>
                    <Project/>
                    <Contact/>
                </div>
                <Socmed/>
            </div>
        </div>
    )
}

export default App