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
                    <div className="two first"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="m19.94 7.68-.03-.09a.8.8 0 0 0-.2-.29l-5-5c-.09-.09-.19-.15-.29-.2l-.09-.03a.8.8 0 0 0-.26-.05c-.02 0-.04-.01-.06-.01H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12s-.01-.04-.01-.06c0-.09-.02-.17-.05-.26ZM6 20V4h7v4c0 .55.45 1 1 1h4v11z"></path><path d="M8 11h8v2H8zm0 4h8v2H8zm0-8h3v2H8z"></path>
                    </svg><p className='ms-2 mb-0'>Resume </p></div>
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