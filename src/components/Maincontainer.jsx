import React from 'react'
import video from "../../public/video.mp4"
import "./styles/maincontainer.css"
import Header from './Header'
import Profile from './Profile'
import Page from './About'
import About from './About'
import { Route, Routes, useLocation } from 'react-router-dom'
import Skills from './Skills'
import { AnimatePresence } from "framer-motion";

const Maincontainer = () => {
    const location=useLocation()
    return (
        <div className="maincontainer container-fluid  ">
            <video src={video} autoPlay muted loop></video>

            <div className="secondarycontainer container p-0">

                <Header />
                <Profile />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<About />} />
                        <Route path='/skills' element={<Skills />} />

                    </Routes>
                </AnimatePresence>
                <div className="contents .container"></div>
            </div>

        </div>
    )
}

export default Maincontainer