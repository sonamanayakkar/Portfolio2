import React, { useEffect, useState } from 'react'
import './styles/profile.css'
import profile from './images/profile.png'
import { motion } from 'framer-motion'

const Profile = () => {



    return (
        <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: .5, ease: "easeInOut" }}>
            <div className='profilecontainer  container-fluid d-flex flex-column p-0 m-lg-0 mt-5' >
                <div className="container two wh">
                    <div className="image mb-4">
                        <img src={profile} className="img-fluid" alt="..."></img>
                    </div>

                    <div className="informations">

                        <h5 className='text-center rolee'>MERN Developer</h5>
                        <h3 className='text-center  name'>SONAMANAYAKKAR</h3>
                        <div className="apps ">
                            <a href="https://github.com/sonamanayakkar" target='_blank'>  <div className="app"><i className="fa-brands fa-github"></i></div></a>
                            <a href="https://www.linkedin.com/in/sonamanayakkar-e-98bab0352/" target='_blank'><div className="app"><i className="fa-brands fa-linkedin-in"></i></div></a>


                            <a href="https://wa.me/917904087127" target='_blank'> <div className="app"><i className="fa-brands fa-whatsapp"></i></div></a>
                            <a href="https://www.instagram.com/sonu__mom__little_king/?hl=en" target='_blank'> <div className="app"><i className="fa-brands fa-instagram"></i></div></a>

                        </div>
                    </div>

                </div>
                <div className="container two two2 p-0">
                    <div className="c-2 fi text-center p-3" >
                        <a href="../../public/cv.pdf" download="Sonamanayakkar.pdf">
                            <h6 className='cvdownload ' style={{ cursor: "pointer" }} >Download CV<i className="fa-solid fa-download ms-2"></i></h6>
                        </a>
                    </div>

                    <div className="c-2 text-center p-3">
                        <a href="tel:+917904087127" target='_blank'> <h6 className='cvdownload'>Contact Me<i className="fa-solid fa-address-book ms-2"></i></h6></a>

                    </div>
                </div>
            </div >
        </motion.div>
    )
}

export default Profile