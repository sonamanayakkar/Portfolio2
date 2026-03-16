import React, { useState } from 'react'
import './styles/header.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = ({ dark, color }) => {

  let [bar, setBar] = useState(true);


  let check = () => {
    setBar(!bar)

  }





  return (

    <motion.div initial={{y:-400,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:2.5}} >

      <header className='d-flex flex-lg-column gap-3 p-lg-0'>
        <div className="nameandrole" >
          <h5>SONAMANAYAKKAR</h5>
          <h6>Full stack Developer</h6>
        </div>

        <div className="customizations">
          <div className="two mb-lg-3 filter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="currentColor" viewBox="0 0 24 24" > <path d="M8.5 1.5C6.92 1.5 5.6 2.56 5.16 4H2v2h3.16c.43 1.44 1.76 2.5 3.34 2.5s2.9-1.06 3.34-2.5H22V4H11.84A3.495 3.495 0 0 0 8.5 1.5m0 5C7.67 6.5 7 5.83 7 5s.67-1.5 1.5-1.5S10 4.17 10 5s-.67 1.5-1.5 1.5m0 9c-1.58 0-2.9 1.06-3.34 2.5H2v2h3.16c.43 1.44 1.76 2.5 3.34 2.5s2.9-1.06 3.34-2.5H22v-2H11.84a3.495 3.495 0 0 0-3.34-2.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m8-12c-1.58 0-2.9 1.06-3.34 2.5H2v2h11.16c.43 1.44 1.76 2.5 3.34 2.5s2.9-1.06 3.34-2.5H22v-2h-2.16a3.495 3.495 0 0 0-3.34-2.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"></path>
          </svg>
            <div className="colors">
              <p className='m-0'>Theme colors</p>

              <div className="colss">
                <div className="color yellow" onClick={() => color("yellow")}></div>
                <div className="color blue" onClick={() => color("blue")}></div>
                <div className="color green" onClick={() => color("green")}></div>
              </div>

            </div>

          </div>

          <div className="two" onClick={dark[0]}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="currentColor" viewBox="0 0 24 24" style={dark[1] ? { display: "block" } : { display: "none" }}>
            <path d="M12 17.01c2.76 0 5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12s2.25 5.01 5.01 5.01M12 9c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01-3.01-1.35-3.01-3.01S10.34 9 12 9m1 10h-2v3h2zm0-17h-2v3h2zM2 11h3v2H2zm17 0h3v2h-3zM4.22 18.36l.71.71.71.71 1.06-1.06 1.06-1.06-.71-.71-.71-.71-1.06 1.06zM19.78 5.64l-.71-.71-.71-.71-1.06 1.06-1.06 1.06.71.71.71.71 1.06-1.06zm-12.02.7L6.7 5.28 5.64 4.22l-.71.71-.71.71L5.28 6.7l1.06 1.06.71-.71zm8.48 11.32 1.06 1.06 1.06 1.06.71-.71.71-.71-1.06-1.06-1.06-1.06-.71.71z" ></path>
          </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="currentColor" viewBox="0 0 24 24" style={dark[1] ? { display: "none" } : { display: "block" }}>
              <path d="M20.71 13.51c-.78.23-1.58.35-2.38.35-4.52 0-8.2-3.68-8.2-8.2 0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1s-.64-.36-1-.25A10.17 10.17 0 0 0 2 11.8C2 17.42 6.57 22 12.2 22c4.53 0 8.45-2.91 9.76-7.24.11-.35.01-.74-.25-1s-.64-.36-1-.25M12.2 20C7.68 20 4 16.32 4 11.8a8.15 8.15 0 0 1 4.18-7.15c-.03.34-.05.68-.05 1.02 0 5.62 4.57 10.2 10.2 10.2.34 0 .68-.02 1.02-.05C17.93 18.38 15.23 20 12.2 20M16 8l.94-2.06L19 5l-2.06-.94L16 2l-.94 2.06L13 5l2.06.94zm4.25-.5-.55 1.2-1.2.55 1.2.55.55 1.2.55-1.2 1.2-.55-1.2-.55z"></path>
            </svg>
          </div>
        </div>
        <div className={bar ? "navs d-flex flex-column gap-2 m-0" : " navs navscome d-flex flex-column gap-2 m-0"}>
          <Link to='/' onClick={() => setBar(true)}>
            <div className="box">

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24" >

                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
              </svg>

              <div className="notify">

                <span>About</span>
              </div>

            </div>
          </Link>
          <Link to='/skills' onClick={() => setBar(true)}>
            <div className="box">

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M20 9.8C19.9 5.27 16.36 2 11.5 2s-9.49 3.24-9.49 8.67c0 2.71 1.03 5.05 2.99 6.79V22h2v-5.48l-.37-.3c-1.74-1.4-2.62-3.26-2.62-5.55C4.01 6.34 7.87 4 11.5 4c3.83 0 6.5 2.47 6.5 6v.19L19.52 14H17v4h-4v4h2v-2h2c1.1 0 2-.9 2-2v-2h1.26a1.5 1.5 0 0 0 1.39-2.06L19.99 9.8Z"></path><path d="M8 13c.16 0 .31-.02.46-.06a2.496 2.496 0 0 0 4.08 0c.15.04.3.06.46.06.81 0 1.51-.49 1.82-1.18.69-.31 1.18-1.01 1.18-1.82 0-.75-.42-1.39-1.02-1.74A2.49 2.49 0 0 0 12.5 6c-.49 0-.94.15-1.33.39A1.98 1.98 0 0 0 10 6c-.75 0-1.39.42-1.74 1.03C8.17 7.02 8.09 7 8 7c-1.1 0-2 .9-2 2 0 .37.11.7.28 1-.17.3-.28.63-.28 1 0 1.1.9 2 2 2"></path>
              </svg>

              <div className="notify">
                <span>Skills</span>
              </div>
            </div>
          </Link>
          <Link to='/projects' onClick={() => setBar(true)}>
            <div className="box">

              <i className="fa-solid fa-toolbox"></i>

              <div className="notify">
                <span>Projects</span>
              </div>
            </div>
          </Link>
          <Link to='/resume' onClick={() => setBar(true)}>
            <div className="box">
              <i className="fa-regular fa-file-lines"></i>

              <div className="notify">
                <span>Resume</span>
              </div>
            </div>
          </Link>
          <Link to='/contact' onClick={() => setBar(true)}>
            <div className="box">

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24" >
                <path d="M19 2H5c-.55 0-1 .45-1 1v4H2v2h2v2H2v2h2v2H2v2h2v4c0 .55.45 1 1 1h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 4h8v16H6zm13 16h-3v-2.5h3zm0-4.5h-3V13h3zm0-4.5h-3V8.5h3zm0-4.5h-3V4h3z"></path>
              </svg>

              <div className="notify">
                <span>Contact</span>
              </div>

            </div>
          </Link>
        </div>
        <i className="fa-solid fa-bars" onClick={(check)}></i>
      </header >
    </motion.div>
  )
}

export default Header