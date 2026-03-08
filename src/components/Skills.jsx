import React from 'react'
import './styles/skills.css'
import {motion} from  "framer-motion";

const Skills = () => {
    return (

        <motion.div  initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }} style={{ position: "static", zIndex: -1 }}>
            <div className='skillcontainer container-fluid'>

                Skills
            </div>
        </motion.div>

    )
}

export default Skills