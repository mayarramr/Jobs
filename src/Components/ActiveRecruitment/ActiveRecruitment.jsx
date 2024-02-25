import React from 'react'
import Style from './ActiveRecruitment.module.css'
import company1 from '../../Assets/company1.jpg'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'


export default function ActiveRecruitment() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
    <div className="my-5">
    <div className="text-center">
    <h2 className="textMain my-5">Active Recruitment Companies</h2>
    </div>
    <div className="bgMain ">
    <div className={`container-fluid py-5 ${isScreenSmall ? "px-4" : ""}`}>
        <div className={`row justify-content-evenly ${isScreenSmall ? "gy-4" : ""}`}>
           <Link to={'/companies'} className="col-md-3 bg-white py-3 rounded-5 text-black text-decoration-none">
            <div className="d-flex justify-content-evenly">
            <img src={company1} className="w-25 rounded-pill" alt="" />
           <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw-bold fs-5">AlQemam - QTech</p>
            <p className="m-0 textDarkGray">3 jobs</p>
           </div>
            </div>
          </Link>
           <div className="col-md-3 bg-white py-3 rounded-5">
            <div className="d-flex justify-content-evenly">
            <img src={company1} className="w-25 rounded-pill" alt="" />
           <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw-bold fs-5">AlQemam - QTech</p>
            <p className="m-0">3 jobs</p>
           </div>
            </div>
          </div>
           <div className="col-md-3 bg-white py-3 rounded-5">
            <div className="d-flex justify-content-evenly">
            <img src={company1} className="w-25 rounded-pill" alt="" />
           <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw-bold fs-5">AlQemam - QTech</p>
            <p className="m-0">3 jobs</p>
           </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
    </>
}


