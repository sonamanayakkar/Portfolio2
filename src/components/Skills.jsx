import React from 'react'
import './styles/skills.css'
import { motion } from "framer-motion";
import html from './images/skills/html2.png'
import css from './images/skills/css2.png'
import js from './images/skills/js.png'
import bootstrap from './images/skills/Bootstrap.png'
import jquery from './images/skills/jquery.png'
import mongodb from './images/skills/mongodb.png'
import react from './images/skills/react2.png'
import node from './images/skills/node.png'

const Skills = () => {
    return (

        <motion.div initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }} style={{ position: "static", zIndex: -1 }}>
            <div className='pagecontainer container-fluid p-lg-5 p-2 pb-5  m-lg-0 mt-3'>
                <div className="header">
                    <div className="two first"><p className='m-0'>Technical skills</p></div>
                    <div className="two"><h2>Technologies</h2></div>
                </div>

                <div className="skillcontainer container">

                    <div className="outsidedrop">
                        <div className="drop ">
                            <div className="skill">
                                <img src={html} alt="" />
                            </div>
                        </div>
                        <div className="slidecontent"> <h4 className='text-center m-0 p-1'>Html</h4></div>
                       
                    </div>
                    <div className="outsidedrop">
                        <div className="drop ">
                            <div className="skill">
                                <img src={css} alt="" />
                            </div>
                        </div>
                        <div className="slidecontent"> <h4 className='text-center m-0 p-1'>CSS</h4></div>
                       
                    </div>
                    <div className="outsidedrop">
                        <div className="drop ">
                            <div className="skill">
                                <img src={js} alt="" />
                            </div>
                        </div>
                        <div className="slidecontent"> <h4 className='text-center m-0 p-1'>Java Script</h4></div>
                       
                    </div>
                    <div className="outsidedrop">
                        <div className="drop ">
                            <div className="skill">
                                <img src={bootstrap} alt="" />
                            </div>
                        </div>
                        <div className="slidecontent"> <h4 className='text-center m-0 p-1'>Bootstrap</h4></div>
                       
                    </div>
                    <div className="outsidedrop">
                        <div className="drop ">
                            <div className="skill">
                                <img src={mongodb} alt="" />
                            </div>
                        </div>
                        <div className="slidecontent"> <h4 className='text-center m-0 p-1'>Mongodb</h4></div>
                       
                    </div>
                    <div className="outsidedrop">
                        <div className="drop ">
                            <div className="skill">
                                <img src={jquery} alt="" />
                            </div>
                        </div>
                        <div className="slidecontent"> <h4 className='text-center m-0 p-1'>jQuery</h4></div>
                       
                    </div>
                    <div className="outsidedrop">
                        <div className="drop ">
                            <div className="skill">
                                <img src={react} alt="" />
                            </div>
                        </div>
                        <div className="slidecontent"> <h4 className='text-center m-0 p-1'>React</h4></div>
                       
                    </div>
                    <div className="outsidedrop">
                        <div className="drop ">
                            <div className="skill">
                                <img src={node} alt="" />
                            </div>
                        </div>
                        <div className="slidecontent"> <h4 className='text-center m-0 p-1'>Node</h4></div>
                       
                    </div>

                  
                </div>

            </div>
        </motion.div>

    )
}

export default Skills