import React from 'react'
import './styles/resume.css'
import { motion, scale } from "framer-motion";

const Resume = () => {
    return (
        <motion.div initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }} style={{ position: "static", zIndex: -1 }}>
            <div className='pagecontainer container-fluid p-lg-5 p-4 pb-5 m-lg-0 mt-3'>

                <div className="header">
                    <div className="two first"><p className='m-0'>Resume </p></div>
                    <div className="two"><h2>Education</h2></div>
                </div>

                <div className="tree">
                    <div className="left d-flex">
                        <div className=" line me-3">
                            <div className="dots dot1"></div>
                            <div className="dots dot2"></div>

                        </div>
                        <div className="three ">
                            <div className="first">
                                <div className="year mb-2">
                                    Present
                                </div>
                                <div className="edu mb-3">
                                    <p className='m-0'>MERN</p>
                                    <p className='m-0 '> Trichy</p>

                                </div>
                                <div className="name">
                                    SDLC
                                </div>

                                <div className="certificate">
                                    <a href="">CERTIFICATE </a>
                                </div>
                            </div>
                            <div className="first">
                                <div className="year mb-2">
                                    2020-2021
                                </div>
                                <div className="edu mb-3">
                                    <p className='m-0'>HSC</p>
                                    <p className='m-0 '> Dindigul</p>

                                </div>
                                <div className="name">
                                    C.D Goverment Higher Secondary School
                                </div>

                                <div className="certificate">
                                    <a href="">CERTIFICATE </a>
                                </div>
                            </div>


                        </div>


                    </div>

                    <div className="right d-flex">
                        <div className=" line me-3">
                            <div className="dots dot3"></div>
                            <div className="dots dot2"></div>

                        </div>


                        <div className="three th">
                            <div className="first">
                                <div className="year mb-2">
                                    2021-2025
                                </div>
                                <div className="edu mb-3">
                                    <p className='m-0'>BE-EEE</p>
                                    <p className='m-0 '> Karur</p>

                                </div>
                                <div className="name">
                                    NSN College Of Engineering and Technology
                                </div>

                                <div className="certificate">
                                    <a href="">CERTIFICATE </a>
                                </div>
                            </div>



                            <div className="first">
                                <div className="year mb-2">
                                    2019-2020
                                </div>
                                <div className="edu mb-3">
                                    <p className='m-0'>SSLC</p>
                                    <p className='m-0 '> Dindigul</p>

                                </div>
                                <div className="name">
                                    C.D Goverment Higher Secondary School
                                </div>

                                <div className="certificate">
                                    <a href="">CERTIFICATE </a>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                

            </div>
        </motion.div>
    )
}

export default Resume