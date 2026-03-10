import React, { useState } from 'react'
import video from "../../public/video.mp4"
import "./styles/maincontainer.css"
import Header from './Header'
import Profile from './Profile'
import Page from './About'
import About from './About'
import { Route, Routes, useLocation } from 'react-router-dom'
import Skills from './Skills'
import { AnimatePresence } from "framer-motion";
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'

const Maincontainer = () => {
    const location = useLocation()


    let [mode, setMode] = useState(true);

    let togglemode=()=>{
        setMode(!mode)
        console.log(mode);
        
    }


    //mousefollow

     let [mouse, setmouse] = useState({x:0,Y:0});
 
    let mousefunction=(e)=>{
        setTimeout(() => {
             setmouse({x:e.clientX,Y:e.clientY})
        }, 100);
    }
   
    return (
        <div className="maincontainer container-fluid  p-0" onMouseMove={mousefunction}>
            {/* <video src={video} autoPlay muted loop></video> */}

            <div className= {mode?"secondarycontainer container p-0 m-0":"secondarycontainer lightmode container p-0 m-0"} >

                <Header dark={togglemode}/>
                <Profile />
                <div className="holdcontainer p-0" >
                    <AnimatePresence mode="wait" >
                        <Routes location={location} key={location.pathname}>
                            <Route path='/' element={<About />} />
                            <Route path='/skills' element={<Skills />} />
                            <Route path='/projects' element={<Projects />} />
                            <Route path='/resume' element={<Resume />} />
                            <Route path='/contact' element={<Contact />} />

                        </Routes>
                    </AnimatePresence>
                </div>

                <div className="contents .container"></div>
            </div>

            <div className="mousefollower" style={{left:mouse.x+"px",top:mouse.Y+"px"}}>

            </div>

        </div>
    )
}

export default Maincontainer