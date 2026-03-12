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

                <div className="header">
                    <div className="two first"><p className='m-0'>Contact </p></div>
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
                            <input type="email" className="w-100 " required id="inputEmail4" style={{ height: "8vh" }} value={info.email}  onChange={(e) => setInfo({ ...info, email: e.target.value })} />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputEmail4" className="form-label">Your Message</label><br />
                            <textarea name="" id="" className="w-100 " required style={{ height: "30vh" }} value={info.message} onChange={(e) => setInfo({ ...info, message: e.target.value })}></textarea>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn ">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact