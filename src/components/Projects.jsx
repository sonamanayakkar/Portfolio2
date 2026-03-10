import React from 'react'
import './styles/project.css'
import { motion } from "framer-motion";
import cake from './images/projects/cake.jpg'
import spicy from './images/projects/spicyhunt.jpg'
import guitar from './images/projects/guitar.jpg'

const Projects = () => {
    return (
        <motion.div initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }} style={{ position: "static", zIndex: -1 ,transformOrigin:"left"}}>
            <div className='pagecontainer container-fluid p-lg-5 p-3 pb-5  m-lg-0 mt-3'>

                <div className="header">
                    <div className="two first"><p className='m-0'>Projects </p></div>
                    <div className="two"><h2>Explore Portfolio By Technology</h2></div>
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
                                <a href="" target='_blank' className='m-0'><div className="arrow m-0"><i className="fa-solid fa-arrow-up-right-from-square"></i></div></a>
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
                                <a href="" target='_blank' className='m-0'><div className="arrow m-0"><i className="fa-solid fa-arrow-up-right-from-square"></i></div></a>
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
                                <h5>Cream Craft</h5>
                               <div className="usetools">
                                    <div className="smallbox ">Html</div>
                                    <div className="smallbox">Css</div>
                                    <div className="smallbox">Bootstrap</div>
                                    <div className="smallbox">Java Script</div>
                                </div>
                            </div>

                            <div className="two">
                                <a href="" target='_blank' className='m-0'><div className="arrow m-0"><i className="fa-solid fa-arrow-up-right-from-square"></i></div></a>
                            </div>
                        </div>
                    </div>

                    <div className="pro pro4">
                        <div className="imageodd imageeven outer">
                            <div className="inner p-0">
                                <img src={guitar} alt="" /></div>
                        </div>

                        <div className="contents p-3">
                            <div className="two">
                                <h5>Cream Craft</h5>
                                <div className="smallbox">Html</div>
                            </div>

                            <div className="two">
                                <a href="" target='_blank' className='m-0'><div className="arrow m-0"><i className="fa-solid fa-arrow-up-right-from-square"></i></div></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </motion.div>
    )
}

export default Projects