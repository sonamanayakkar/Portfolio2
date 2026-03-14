import React from 'react'
import './styles/project.css'
import { motion } from "framer-motion";
import cake from './images/projects/cake.jpg'
import spicy from './images/projects/spicyhunt.jpg'
import guitar from './images/projects/guitar.jpg'
import age from './images/projects/age.jpg'
import salary from './images/projects/salary.jpg'


const Projects = () => {
    return (
        <motion.div initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }} style={{ position: "static", zIndex: -1, transformOrigin: "left" }}>
            <div className='pagecontainer container-fluid p-lg-5 p-4 pb-5  m-lg-0 mt-3'>

                <div className="proj">
                    <div className="header">
                        <div className="two first mb-3"><p className='m-0'>Projects </p></div>
                        <div className="two mb-4"><h2>  Featured Projects</h2></div>
                    </div>

                    <div className="projects">

                        <div className="pro pro1">
                            <div className="imageodd  outer">
                                <div className="inner p-0">
                                    <img src={cake} alt="" /></div>
                            </div>

                            <div className="contents p-3">
                                <div className="two">
                                    <h5>Cream Craft</h5>
                                    <div className="usetools">
                                        <div className="smallbox ">Html</div>
                                        <div className="smallbox">Css</div>
                                    </div>

                                </div>

                                <div className="two">
                                    <a href="https://sonamanayakkar.github.io/CreamCraft-Online-Cake-Ordering-System/home.html" target='_blank' className='m-0'><div className="arrow m-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                                    </svg></div></a>
                                </div>
                            </div>
                        </div>

                        <div className="pro pro2">
                            <div className="imageodd imageeven outer">
                                <div className="inner p-0">
                                    <img src={spicy} alt="" /></div>
                            </div>

                            <div className="contents p-3">
                                <div className="two">
                                    <h5>Spicy Hunt</h5>
                                    <div className="usetools">
                                        <div className="smallbox ">Html</div>
                                        <div className="smallbox">Css</div>
                                        <div className="smallbox">Bootstrap</div>
                                    </div>
                                </div>

                                <div className="two">
                                    <a href="https://spicyhunt-ebon.vercel.app/" target='_blank' className='m-0'><div className="arrow m-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                                    </svg></div></a>
                                </div>
                            </div>
                        </div>

                        <div className="pro pro3">
                            <div className="imageodd  outer">
                                <div className="inner p-0">
                                    <img src={guitar} alt="" /></div>
                            </div>

                            <div className="contents p-3">
                                <div className="two">
                                    <h5>Rhythmix</h5>
                                    <div className="usetools">
                                        <div className="smallbox ">Html</div>
                                        <div className="smallbox">Css</div>
                                        <div className="smallbox">Bootstrap</div>
                                        <div className="smallbox">Java Script</div>
                                    </div>
                                </div>

                                <div className="two">
                                    <a href="https://online-music-instruments-store-with.vercel.app/" target='_blank' className='m-0'><div className="arrow m-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                                    </svg></div></a>
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
                                    <img src={age} alt="" /></div>
                            </div>

                            <div className="contents p-3">
                                <div className="two">
                                    <h5>Age Calculator</h5>
                                    <div className="usetools">
                                        <div className="smallbox ">Html</div>
                                        <div className="smallbox">Css</div>
                                        <div className="smallbox">Java Script</div>
                                    </div>

                                </div>

                                <div className="two">
                                    <a href="https://agecalculator-eight-kappa.vercel.app/" target='_blank' className='m-0'><div className="arrow m-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                                    </svg></div></a>
                                </div>
                            </div>
                        </div>

                        <div className="pro pro4">
                            <div className="imageodd imageeven outer">
                                <div className="inner p-0">
                                    <img src={salary} alt="" /></div>
                            </div>

                            <div className="contents p-3">
                                <div className="two">
                                    <h5>Employee's Salary Management System</h5>
                                    <div className="usetools">
                                        <div className="smallbox ">Html</div>
                                        <div className="smallbox">Css</div>
                                        <div className="smallbox">Bootstrap</div>
                                        <div className="smallbox">Jquery</div>
                                    </div>
                                </div>

                                <div className="two">
                                    <a href="https://employee-database-management-panel.vercel.app/" target='_blank' className='m-0'><div className="arrow m-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                                    </svg></div></a>
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