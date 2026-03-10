import React from 'react'
import './styles/about.css'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.5 }} style={{ position: "static",zIndex:-1000,height:"100%"}}>

      <div className='pagecontainer container-fluid p-lg-5 m-lg-0 mt-3 p-3  '>
        <div className="container scrollcontents ">
          <h3 className=''>Hello, I’m <span className='mainname'>SONAMANAYAKKAR</span></h3>
          <h1 className='role'><span className='course'>MERN </span>  Developer | Electrical & Electronics Engineer</h1>
          <p>Passionate MERN Stack Developer with a strong foundation in software development and electrical engineering. Skilled in building modern web applications using MongoDB, Express.js, React, and Node.js. I enjoy creating clean, responsive, and user-friendly applications while continuously learning new technologies.</p>
          <div className="count container">
            <div className="row row-cols-lg-3 row-cols-2">

              <div className="col  d-flex align-items-center gap-3">
                <h1 className='fw-normal'>10</h1>
                <p className='completed'>Completed Projects</p>
              </div>
              <div className="col  d-flex align-items-center gap-2">
                <h1 className='fw-normal'>1</h1>
                <p className='completed'>Years of Learning & Development</p>
              </div>
              <div className="col  d-flex align-items-center gap-2">
                <h1 className=' fw-normal'>4</h1>
                <p className='completed'> Technical Projects & Innovations</p>
              </div>
    
            </div>
          </div>
        </div>
      </div>

    </motion.div>

  )
}

export default About