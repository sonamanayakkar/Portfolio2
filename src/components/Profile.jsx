import React, { useEffect, useState } from 'react'
import './styles/profile.css'
import profile from './images/profile.png'

const Profile = () => {

   

    return (
        <div className='profilecontainer  container-fluid d-flex flex-column p-0 m-lg-0 mt-5' >
            <div className="container two wh">
                <div className="image mb-4">
                    <img src={profile} className="img-fluid" alt="..."></img>
                </div>

                <div className="informations">
                    
                    <h5 className='text-center rolee'>Fullstack Developer</h5>
                    <h3 className='text-center  name'>SONAMANAYAKKAR</h3>
                    <div className="apps ">
                        <a href="https://github.com/sonamanayakkar">  <div className="app"><i className="fa-brands fa-github"></i></div></a>
                        <a href="https://www.linkedin.com/in/sonamanayakkar-e-98bab0352/" target='_blank'><div className="app"><i className="fa-brands fa-linkedin-in"></i></div></a>


                        <a href="https://wa.me/917904087127" target='_blank'> <div className="app"><i className="fa-brands fa-whatsapp"></i></div></a>
                        <a href="https://www.instagram.com/sonu__mom__little_king/?hl=en"> <div className="app"><i className="fa-brands fa-instagram"></i></div></a>

                    </div>
                </div>

            </div>
            <div className="container two two2 p-0">
                <div className="c-2 fi text-center p-3" >
                    <a href="/Portfolio2/cv.docx" download="Sonamanayakkar.docx">
                        <h6 className='cvdownload ' style={{ cursor: "pointer" }} >Download CV</h6>
                    </a>
                </div>

                <div className="c-2 text-center p-3">
                    <a href="https://wa.me/917904087127" target='_blank'> <h6 className='cvdownload'>Contact Me</h6></a>
                   
                </div>
            </div>
        </div >
    )
}

export default Profile