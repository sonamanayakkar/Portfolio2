import React, { useEffect, useState } from 'react'
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

    let togglemode = () => {


        setMode(!mode)
        debugger
        if (mode) {
            document.documentElement.style.setProperty("--bg-color", "linear-gradient(to right, #ffffff, rgb(255, 255, 255))")
            document.documentElement.style.setProperty("--bg-color2", "  linear-gradient(to right, #ffffff, rgb(255, 255, 255))")
            document.documentElement.style.setProperty("--white-color", "rgb(0, 0, 0)")
            document.documentElement.style.setProperty("--border-graycolor", " rgba(190, 190, 190, 0.477)")
            document.documentElement.style.setProperty("--skil-bg", " #ebebeb")
            document.documentElement.style.setProperty("--black-color", "rgb(230, 230, 230)")
        }
        else {
            document.documentElement.style.setProperty("--bg-color", "linear-gradient(to right, #1B1B1B, rgba(0, 0, 0, 0.39))")
            document.documentElement.style.setProperty("--bg-color2", " linear-gradient(to right, #1B1B1B, rgb(14, 14, 14))")

            document.documentElement.style.setProperty("--white-color", "#ffff")
            document.documentElement.style.setProperty("--border-graycolor", " rgba(255, 255, 255, .12)")
            document.documentElement.style.setProperty("--skil-bg", " #1E1E1E")
            document.documentElement.style.setProperty("--black-color", " rgb(23, 21, 21)")
        }

        console.log(mode);


    }



    //mousefollow

    let [mouse, setmouse] = useState({ x: 0, Y: 0 });
    let [mediummouse, setmediummouse] = useState({ x: 0, Y: 0 });
    let [smallmouse, setsmallmouse] = useState({ x: 0, Y: 0 });

    let mousefunction = (e) => {
        setTimeout(() => {
            setmouse({ x: (e.clientX), Y: (e.clientY) + 15 })
        }, 100);
        setTimeout(() => {
            setmediummouse({ x: (e.clientX), Y: (e.clientY) + 15 })
        }, 170);
        setTimeout(() => {
            setsmallmouse({ x: (e.clientX), Y: (e.clientY) + 15 })
        }, 300);
    }


    let threecolors = (options, mode) => {

        if (options == "yellow" && !mode) {
            console.log("yellow");
            document.documentElement.style.setProperty("--green-color", "rgb(255, 208, 0)")


        }
        else if (options == "blue") {
            console.log("blue");
            document.documentElement.style.setProperty("--green-color", "rgb(0, 157, 255)")

        }
        else if (options == "green") {
            document.documentElement.style.setProperty("--green-color", "#79cc6f")
        }
        else {
            document.documentElement.style.setProperty("--green-color", "#79cc6f")
        }


    }


    return (
        <div className="maincontainer container-fluid  p-0" onMouseMove={mousefunction}>
            {/* <video src={video} autoPlay muted loop></video> */}

            <div className={"secondarycontainer container p-0 m-0"} style={{ color: "" }}>

                <Header dark={[togglemode, mode]} color={threecolors} />
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

            <div className="mousefollower" style={{ left: mouse.x + "px", top: mouse.Y + "px" }}>

            </div>
            <div className="mousefollower mousemediumfollower" style={{ left: mediummouse.x + "px", top: mediummouse.Y + "px" }}>

            </div>
            <div className="mousefollower mousesmallfollower" style={{ left: smallmouse.x + "px", top: smallmouse.Y + "px" }}>

            </div>

        </div>
    )
}

export default Maincontainer