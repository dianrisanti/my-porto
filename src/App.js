import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import About from './components/about'
import Experience from './components/experience'
import Project from './components/project'
import Contact from './components/contact'

const App = () => {
    return(
        <div style={{backgroundColor: "#14213d"}}>
            <Navbar/>
            <About/>
            <Experience/>
            <Project/>
            <Contact/>
        </div>
    )
}

export default App