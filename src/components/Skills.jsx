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
import express from './images/skills/express.png'
import git from './images/skills/git.png'
import github from './images/skills/github.png'
import vscode from './images/skills/vscode.png'
import vercel from './images/skills/vercel.png'

const Skills = () => {
    return (

        <motion.div initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }} style={{ position: "static", zIndex: -1 }}>

            <div className='pagecontainer container-fluid p-lg-5 p-4 pb-5  m-lg-0 mt-3'>

                <div className="pages mb-5">
                    <div className="header mb-4">
                        <div className="two first"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M22 8c0-.55-.45-1-1-1h-2V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v5h-4V6c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H3c-.55 0-1 .45-1 1v3H1v2h1v3c0 .55.45 1 1 1h2v1c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1h2c.55 0 1-.45 1-1v-3h1v-2h-1zM4 15V9h1v6zm4 2H7V7h1zm9 0h-1V7h1zm3-2h-1V9h1z"></path>
                        </svg><p className='ms-2 mb-0'>Technical skills</p></div>
                        <div className="two mt-3"><h2>Frontend Development</h2></div>
                    </div>

                    <div className="skillcontainer container">

                        <motion.div initial={{x:-30, opacity: 0 }} animate={{x:0, opacity: 1 }} transition={{ duration: .5, delay: .5, ease: "easeIn" }}>
                            <div className="outsidedrop n1">
                                <div className="drop ">
                                    <div className="skill">
                                        <img src={html} alt="" />
                                    </div>
                                </div>
                                <div className="slidecontent"> <h4 className='text-center m-0 p-1'>HTML</h4></div>

                            </div>
                        </motion.div>
                        <motion.div initial={{x:-30, opacity: 0 }} animate={{x:0, opacity: 1 }}  transition={{ duration: .5, delay: 1, ease: "easeIn" }}>
                            <div className="outsidedrop n2">
                                <div className="drop ">
                                    <div className="skill">
                                        <img src={css} alt="" />
                                    </div>
                                </div>
                                <div className="slidecontent"> <h4 className='text-center m-0 p-1'>CSS</h4></div>

                            </div>
                        </motion.div>
                        <motion.div initial={{x:-30, opacity: 0 }} animate={{x:0, opacity: 1 }}  transition={{ duration: .5, delay: 1.5, ease: "easeIn" }}>
                            <div className="outsidedrop n3">
                                <div className="drop ">
                                    <div className="skill">
                                        <img src={js} alt="" />
                                    </div>
                                </div>
                                <div className="slidecontent"> <h4 className='text-center m-0 p-1'>Java Script</h4></div>

                            </div>
                        </motion.div>
                        <motion.div initial={{x:-30, opacity: 0 }} animate={{x:0, opacity: 1 }}  transition={{ duration: .5, delay: 2, ease: "easeIn" }}>
                            <div className="outsidedrop n4">
                                <div className="drop ">
                                    <div className="skill">
                                        <img src={bootstrap} alt="" />
                                    </div>
                                </div>
                                <div className="slidecontent"> <h4 className='text-center m-0 p-1'>Bootstrap</h4></div>

                            </div>
                        </motion.div>
                        <motion.div initial={{x:-30, opacity: 0 }} animate={{x:0, opacity: 1 }}  transition={{ duration: .5, delay: 2.5, ease: "easeIn" }}>
                            <div className="outsidedrop n5">
                                <div className="drop ">
                                    <div className="skill">
                                        <img src={jquery} alt="" />
                                    </div>
                                </div>
                                <div className="slidecontent"> <h4 className='text-center m-0 p-1'>jQuery</h4></div>

                            </div>
                        </motion.div>
                        <motion.div initial={{x:-30, opacity: 0 }} animate={{x:0, opacity: 1 }}  transition={{ duration: .5, delay: 3, ease: "easeIn" }}>
                            <div className="outsidedrop n6">
                                <div className="drop ">
                                    <div className="skill">
                                        <img src={react} alt="" />
                                    </div>
                                </div>
                                <div className="slidecontent"> <h4 className='text-center m-0 p-1'>React</h4></div>

                            </div>
                        </motion.div>



                    </div>
                </div>

                <div className="pages mb-5">
                    <div className="header mb-4">
                        <div className="two"><h2>Backend Development</h2></div>
                    </div>

                    <div className="skillcontainer container">
                        <motion.div initial={{x:-30, opacity: 0 }} animate={{x:0, opacity: 1 }}  transition={{ duration: .5, delay: 3.5, ease: "easeIn" }}>
                            <div className="outsidedrop">
                                <div className="drop ">
                                    <div className="skill">
                                        <img src={node} alt="" />
                                    </div>
                                </div>
                                <div className="slidecontent"> <h4 className='text-center m-0 p-1'>Node</h4></div>

                            </div>
                        </motion.div>

                        <motion.div initial={{x:-30, opacity: 0 }} animate={{x:0, opacity: 1 }}  transition={{ duration: .5, delay: 4, ease: "easeIn" }}>
                            <div className="outsidedrop">
                                <div className="drop ">
                                    <div className="skill">
                                        <img src={express} alt="" />
                                    </div>
                                </div>
                                <div className="slidecontent"> <h4 className='text-center m-0 p-1'>Express js</h4></div>

                            </div>
                        </motion.div>
                        <motion.div initial={{x:-30, opacity: 0 }} animate={{x:0, opacity: 1 }}  transition={{ duration: .5, delay: 4.5, ease: "easeIn" }}>
                            <div className="outsidedrop">
                                <div className="drop ">
                                    <div className="skill">
                                        <img src={mongodb} alt="" />
                                    </div>
                                </div>
                                <div className="slidecontent"> <h4 className='text-center m-0 p-1'>Mongodb</h4></div>

                            </div>
                        </motion.div>




                    </div>
                </div>
                <div className="pages">
                    <div className="header mb-4">
                        <div className="two"><h2>Tools & Technologies</h2></div>
                    </div>

                    <div className="skillcontainer container">

           <motion.div initial={{x:-30, opacity: 0 }} animate={{x:0, opacity: 1 }}  transition={{ duration: .5, delay: 5, ease: "easeIn" }}>
                        <div className="outsidedrop">
                            <div className="drop ">
                                <div className="skill">
                                    <img src={git} alt="" />
                                </div>
                            </div>
                            <div className="slidecontent"> <h4 className='text-center m-0 p-1'>Git</h4></div>

                        </div>
                         </motion.div>
                            <motion.div initial={{x:-30, opacity: 0 }} animate={{x:0, opacity: 1 }}  transition={{ duration: .5, delay: 5.5, ease: "easeIn" }}>
                        <div className="outsidedrop">
                            <div className="drop ">
                                <div className="skill">
                                    <img src={github} alt="" />
                                </div>
                            </div>
                            <div className="slidecontent"> <h4 className='text-center m-0 p-1'>GitHub</h4></div>

                        </div>
                         </motion.div>

                           <motion.div initial={{x:-30, opacity: 0 }} animate={{x:0, opacity: 1 }}  transition={{ duration: .5, delay: 6, ease: "easeIn" }}>
                        <div className="outsidedrop">
                            <div className="drop ">
                                <div className="skill">
                                    <img src={vscode} alt="" />
                                </div>
                            </div>
                            <div className="slidecontent"> <h4 className='text-center m-0 p-1'>VS Code</h4></div>

                        </div>
                         </motion.div>


                    </div>
                </div>


            </div>
        </motion.div>

    )
}

export default Skills