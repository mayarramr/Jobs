import React from 'react'
import Style from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return <>
    <div className="bgMain mt-5">
        <div className="container py-5 ">
            <div className="row border-bottom py-4">
                <div className="col-md-3">
                    <p className={`${Style.titleFont} fs-3 text-white`}>JOBS</p>
                </div>
                <div className="col-md-3 text-white">
                    <p className="fs-5 fw-normal mb-3">Quick Links</p>
                   <div className="fw-light">
                   <p>About</p>
                    <p>Companies</p>
                    <Link to={'/help'} className="text-decoration-none textwhite">Help</Link>
                   </div>
                 </div>
                <div className="col-md-3 d-flex flex-column justify-content-center text-white fw-light">
                   <p>Jobs in Egypt</p>
                    <p>Jobs in Saudi Arabia</p>
                 </div>
                <div className="col-md-3 d-flex flex-column justify-content-around text-white fw-light">
                   <div className="fw-normal fs-5">
                   <p>Follow us</p>
                   </div>
                   <div className="d-flex fs-5 justify-content-evenly w-50">
                   <i className="fa-brands fa-facebook"></i>
                   <i className="fa-brands fa-instagram"></i>
                   <i className="fa-brands fa-twitter"></i>
                   </div>
                   <div>
                    <p>Copyright @ 2023.jobs </p>
                   </div>
                 </div>
            </div>
        </div>
    </div>
    </>
}


