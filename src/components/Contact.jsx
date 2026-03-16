import React, { useState } from 'react'
import './styles/contact.css'
import { motion } from "framer-motion";
const Contact = () => {

    let [info, setInfo] = useState({ name: '', email: '', message: '' })

    let formfill = (e) => {
        e.preventDefault()
        let date = new Date()

        const templateparameters = {
            email: info.email,
            name: info.name,
            message: info.message,
            time: date.toLocaleTimeString()
        }

        emailjs.send("service_ecqfehk", "template_twzziy5", templateparameters)
            .then(() => {
                console.log("successfull");

                setInfo({
                    name: '', email: '', message: ''
                })
            })
            .catch(err => alert("Failed"));




    }




    return (
        <motion.div initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }} style={{ position: "static", zIndex: -1 }}>
            <div className='pagecontainer container-fluid p-lg-5 p-4 pb-5  m-lg-0 mt-3'>

                <div className="header ">
                    <div className="two first mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M19 2H5c-.55 0-1 .45-1 1v4H2v2h2v2H2v2h2v2H2v2h2v4c0 .55.45 1 1 1h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V4h13z"></path><path d="M12.5 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5m4.5 9c0-1.66-1.34-3-3-3h-3c-1.66 0-3 1.34-3 3v1h9z"></path>
                    </svg><p className='ms-2 mb-0'>Contact </p></div>
                    <div className="two"><h2>Let's Get in Touch!</h2></div>
                </div>

                <div className="contacts mb-5">
                    <div className="up">

                        <div className="three">
                            <div className="l">
                                <i className="fa-regular fa-address-book"></i>
                                <p className='m-0'>Phone</p>
                            </div>
                            <div className="r">
                                +91 79 04 08 71 27
                            </div>
                        </div>
                        <div className="three">
                            <div className="l">
                                <i className="fa-regular fa-envelope"></i>
                                <p className='m-0'></p>
                            </div>
                            <div className="r">
                                esonaman2@gmail.com
                            </div>
                        </div>
                        <div className="three">
                            <div className="l">
                                <i className="fa-regular fa-map"></i>
                                <p className='m-0'>Address</p>
                            </div>
                            <div className="r">
                                Guziliyamparai,Dindigul(Dt)-624 703
                            </div>
                        </div>

                    </div>
                </div>

                <div className="header">
                    <div className="two"><h2>Let’s Build Something Amazing Together</h2></div>
                </div>

                <div className="contacts">
                    <form className="row g-3" onSubmit={formfill}>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Full Name</label><br />
                            <input type="text" className="w-100 " required id="inputEmail4" style={{ height: "8vh" }} value={info.name} onChange={(e) => setInfo({ ...info, name: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label><br />
                            <input type="email" className="w-100 " required id="inputEmail4" style={{ height: "8vh" }} value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputEmail4" className="form-label">Your Message</label><br />
                            <textarea name="" id="" className="w-100 " required style={{ height: "30vh" }} value={info.message} onChange={(e) => setInfo({ ...info, message: e.target.value })}></textarea>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn "><span>send message</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact