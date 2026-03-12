import React, { useEffect, useState } from 'react'
import './styles/about.css'
import { motion } from "framer-motion";

const About = () => {


  let [completedproject, setcompletedproject] = useState(1)
  let [technicalproject, settechnicalproject] = useState(1)
  // let [name, setName] = useState({ name: "", condition: true })

  useEffect(() => {
    if (completedproject <= 9) {
      setTimeout(() => {
        setcompletedproject(completedproject + 1)
      }, 100);
    }
    if (technicalproject <= 3) {
      setTimeout(() => {
        settechnicalproject(technicalproject + 1)
      }, 200);
    }

  }, [completedproject, technicalproject])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (name.condition) {
  //       setName({ name: "SONAMANAYAKKAR", condition: false })
  //     }
  //     else {
  //       setName({ name: "MERN Developer", condition: true })
  //     }


  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [name])


  return (
    <motion.div initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.5 }} style={{ position: "static", zIndex: -1000, height: "100%" }}>

      <div className='pagecontainer banner container-fluid p-lg-5 m-lg-0 mt-3 p-3  '>
        <div className="container scrollcontents ">
          <h3 className=''>Hello, I’m <span className="namediv m-0" style={{ display: "inline-block" }}>
            <span className="insidenamediv mainname1">SONAMANAYAKKAR</span></span></h3>
          <h1 className='role'><span className='course'>MERN </span>  Developer | Full Stack Developer</h1>
          <p>Passionate MERN Stack Developer with a strong foundation in Web development and electrical engineering. Skilled in building modern web applications using MongoDB, Express.js, React, and Node.js. I enjoy creating clean, responsive, and user-friendly applications while continuously learning new technologies.</p>
          <div className="count container">
            <div className="row row-cols-lg-3 row-cols-2">

              <div className="col  d-flex align-items-center gap-3">
                <h1 className='fw-normal' >{completedproject}</h1>
                <p className='completed'>Completed Projects</p>
              </div>
              <div className="col  d-flex align-items-center gap-2">
                <h1 className='fw-normal'>1</h1>
                <p className='completed'>Years of Learning & Development</p>
              </div>
              <div className="col  d-flex align-items-center gap-2">
                <h1 className=' fw-normal'>{technicalproject}</h1>
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