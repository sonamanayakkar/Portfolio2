import React from 'react'
import './styles/profile.css'
import profile from './images/profile.png'

const Profile = () => {
    return (
        <div className='profilecontainer container-fluid d-flex flex-column p-0 ' >
            <div className="container two wh">
                <div className="image mb-4">
                    <img src={profile} className="img-fluid" alt="..."></img>
                </div>

                <div className="informations">
                    <h5 className='text-center rolee'>Fullstack Developer</h5>
                    <h3 className='text-center  name'>SONAMANAYAKKAR</h3>
                    <div className="apps ">
                        <div className="app"><i className="fa-brands fa-linkedin-in"></i></div>
                        <div className="app"><i className="fa-brands fa-github"></i></div>
                        <div className="app"><i className="fa-brands fa-whatsapp"></i></div>
                        <div className="app"><i className="fa-brands fa-instagram"></i></div>
                    </div>
                </div>

            </div>
            <div className="container two two2 p-0">
                <div className="c-2 fi text-center p-3" >
                    <h6 className='cvdownload'>Download CV</h6>
                </div>
                <div className="c-2 text-center p-3">
                    <h6 className='cvdownload'>Contact Me</h6>
                </div>
            </div>
        </div>
    )
}

export default Profile