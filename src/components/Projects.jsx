import React from 'react'
import './styles/project.css'
import { motion } from "framer-motion";
import cake from './images/projects/cake.jpg'
import spicy from './images/projects/spicyhunt.jpg'
import guitar from './images/projects/guitar.jpg'
import age from './images/projects/age.jpg'
import salary from './images/projects/salary.jpg'
import flight from './images/projects/flight.jpg'


const Projects = () => {
    return (
        <motion.div initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }} style={{ position: "static", zIndex: -1, transformOrigin: "left" }}>
            <div className='pagecontainer container-fluid p-lg-5 p-4 pb-5  m-lg-0 mt-3'>

                <div className="proj">
                    <div className="header">
                        <div className="two first mb-3"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M9 4h6v2H9zM8 8h12v3.07l-.83.39a16.78 16.78 0 0 1-14.34 0L4 11.07V8zM4 20v-6.72c2.54 1.19 5.27 1.79 8 1.79s5.46-.6 8-1.79V20z"></path>
                        </svg><p className='ms-2 mb-0'>Projects </p></div>
                        <div className="two mb-4"><h2>  Featured Projects</h2></div>
                    </div>

                    <div className="projects">

                         <div className="pro pro1">
                            <div className="imageodd  outer">
                                <div className="inner p-0">

                                    <div className="front">
                                        <img src={cake} alt="" />
                                    </div>

                                    <div className="back contents ">

                                        <h5>Cream Craft</h5>

                                        <div className="usetools">
                                            <span>Tech Stack</span>
                                            <div className="smallbox ">Html</div>
                                            <div className="smallbox">Css</div>
                                           
                                        </div>




                                        <a href="https://cream-craft-online-cake-ordering-sy.vercel.app/" target='_blank' className='m-0'><div className="arrow m-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" viewBox="0 0 24 24" >
                                            <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                                        </svg></div></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="pro pro1">
                            <div className="imageodd  outer">
                                <div className="inner p-0">

                                    <div className="front">
                                        <img src={spicy} alt="" />
                                    </div>

                                    <div className="back contents ">

                                        <h5>SpicyHunt</h5>

                                        <div className="usetools">
                                            <span>Tech Stack</span>
                                            <div className="smallbox ">Html</div>
                                            <div className="smallbox">Css</div>
                                            <div className="smallbox">Bootstrap</div>
                                        </div>




                                        <a href="https://spicyhunt-41gcqb22q-esonaman2-6387s-projects.vercel.app/" target='_blank' className='m-0'><div className="arrow m-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" viewBox="0 0 24 24" >
                                            <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                                        </svg></div></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="pro pro1">
                            <div className="imageodd  outer">
                                <div className="inner p-0">

                                    <div className="front">
                                        <img src={guitar} alt="" />
                                    </div>

                                    <div className="back contents ">

                                        <h5>Rhytmix</h5>

                                        <div className="usetools">
                                            <span>Tech Stack</span>
                                            <div className="smallbox ">Html</div>
                                            <div className="smallbox">Css</div>
                                            <div className="smallbox">Bootstrap</div>
                                            <div className="smallbox">Java Script</div>
                                        </div>




                                        <a href="https://online-music-instruments-store-with-admin-management-6xy48j96b.vercel.app/" target='_blank' className='m-0'><div className="arrow m-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" viewBox="0 0 24 24" >
                                            <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                                        </svg></div></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="pro pro1">
                            <div className="imageodd  outer">
                                <div className="inner p-0">

                                    <div className="front">
                                        <img src={flight} alt="" />
                                    </div>

                                    <div className="back contents ">

                                        <h5>Real-Time Flight Tracking System with Live Weather Integration</h5>

                                        <div className="usetools">
                                            <span>Tech Stack</span>
                                            <div className="smallbox ">React.js</div>
                                            <div className="smallbox">Css</div>
                                            <div className="smallbox">Bootstrap</div>
                                            <div className="smallbox">Java Script</div>
                                        </div>




                                        <a href="https://flight-tracker-ochre-rho.vercel.app/" target='_blank' className='m-0'><div className="arrow m-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" viewBox="0 0 24 24" >
                                            <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                                        </svg></div></a>

                                    </div>
                                </div>

                            </div>
                        </div>

                        






                    </div>
                </div>

                <div className="proj">
                    <div className="header">
                        <div className="two mb-4"><h2>  Mini Projects</h2></div>
                    </div>

                    <div className="projects">


                         <div className="pro pro1">
                            <div className="imageodd  outer">
                                <div className="inner p-0">

                                    <div className="front">
                                        <img src={age} alt="" />
                                    </div>

                                    <div className="back contents ">

                                        <h5>Age Calculator</h5>

                                        <div className="usetools">
                                            <span>Tech Stack</span>
                                            <div className="smallbox ">Html</div>
                                            <div className="smallbox">Css</div>
                                            <div className="smallbox">Java Script</div>
                                        </div>




                                        <a href="https://agecalculator-eight-kappa.vercel.app/" target='_blank' className='m-0'><div className="arrow m-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" viewBox="0 0 24 24" >
                                            <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                                        </svg></div></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                         <div className="pro pro1">
                            <div className="imageodd  outer">
                                <div className="inner p-0">

                                    <div className="front">
                                        <img src={salary} alt="" />
                                    </div>

                                    <div className="back contents ">

                                        <h5>Employee Salary Management System</h5>

                                        <div className="usetools">
                                            <span>Tech Stack</span>
                                            <div className="smallbox ">Html</div>
                                            <div className="smallbox">Css</div>
                                            <div className="smallbox">JQUERY</div>
                                        </div>




                                        <a href="https://employee-database-management-panel-5l2wgcils.vercel.app/" target='_blank' className='m-0'><div className="arrow m-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" viewBox="0 0 24 24" >
                                            <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                                        </svg></div></a>

                                    </div>
                                </div>

                            </div>
                        </div>
                      






                    </div>
                </div>


            </div>
        </motion.div>
    )
}

export default Projects