import React from 'react'
import Style from './Companies.module.css'
import company1 from '../../Assets/company1.jpg'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet'

export default function Companies() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Companies</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="container my-5 pt-5">
    <div className={`row justify-content-evenly ${isScreenSmall ? "gy-3 mx-2" : ""}`}>
           <Link to={'/Alqemam'} className="col-md-3 bg-white py-3 rounded-5 rowShadow text-black text-decoration-none">
            <div className="d-flex justify-content-evenly">
            <img src={company1} className="w-25 rounded-pill" alt="QTech" />
           <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw-bold fs-5">AlQemam - QTech</p>
            <p className="m-0 textDarkGray">3 jobs</p>
           </div>
            </div>
          </Link>
           <div className="col-md-3 bg-white py-3 rounded-5 rowShadow">
            <div className="d-flex justify-content-evenly">
            <img src={company1} className="w-25 rounded-pill" alt="QTech" />
           <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw-bold fs-5">AlQemam - QTech</p>
            <p className="m-0 textDarkGray">3 jobs</p>
           </div>
            </div>
          </div>
           <div className="col-md-3 bg-white py-3 rounded-5 rowShadow">
            <div className="d-flex justify-content-evenly">
            <img src={company1} className="w-25 rounded-pill" alt="QTech" />
           <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw-bold fs-5">AlQemam - QTech</p>
            <p className="m-0 textDarkGray">3 jobs</p>
           </div>
            </div>
          </div>
        </div>
    <div className={`row justify-content-evenly my-5 ${isScreenSmall ? "gy-3 mx-2" : ""}`}>
           <div className="col-md-3 bg-white py-3 rounded-5 rowShadow">
            <div className="d-flex justify-content-evenly">
            <img src={company1} className="w-25 rounded-pill" alt="QTech" />
           <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw-bold fs-5">AlQemam - QTech</p>
            <p className="m-0 textDarkGray">3 jobs</p>
           </div>
            </div>
          </div>
           <div className="col-md-3 bg-white py-3 rounded-5 rowShadow">
            <div className="d-flex justify-content-evenly">
            <img src={company1} className="w-25 rounded-pill" alt="QTech" />
           <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw-bold fs-5">AlQemam - QTech</p>
            <p className="m-0 textDarkGray">3 jobs</p>
           </div>
            </div>
          </div>
           <div className="col-md-3 bg-white py-3 rounded-5 rowShadow">
            <div className="d-flex justify-content-evenly">
            <img src={company1} className="w-25 rounded-pill" alt="QTech" />
           <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw-bold fs-5">AlQemam - QTech</p>
            <p className="m-0 textDarkGray">3 jobs</p>
           </div>
            </div>
          </div>
        </div>
    <div className={`row justify-content-evenly ${isScreenSmall ? "gy-3 mx-2" : ""}`}>
           <div className="col-md-3 bg-white py-3 rounded-5 rowShadow">
            <div className="d-flex justify-content-evenly">
            <img src={company1} className="w-25 rounded-pill" alt="QTech" />
           <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw-bold fs-5">AlQemam - QTech</p>
            <p className="m-0 textDarkGray">3 jobs</p>
           </div>
            </div>
          </div>
           <div className="col-md-3 bg-white py-3 rounded-5 rowShadow">
            <div className="d-flex justify-content-evenly">
            <img src={company1} className="w-25 rounded-pill" alt="QTech" />
           <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw-bold fs-5">AlQemam - QTech</p>
            <p className="m-0 textDarkGray">3 jobs</p>
           </div>
            </div>
          </div>
           <div className="col-md-3 bg-white py-3 rounded-5 rowShadow">
            <div className="d-flex justify-content-evenly">
            <img src={company1} className="w-25 rounded-pill" alt="QTech" />
           <div className="d-flex flex-column justify-content-center">
            <p className="m-0 fw-bold fs-5">AlQemam - QTech</p>
            <p className="m-0 textDarkGray">3 jobs</p>
           </div>
            </div>
          </div>
        </div>
    </div>
    </>
}


