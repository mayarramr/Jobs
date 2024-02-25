import React from 'react'
import Style from './Alqemam.module.css'
import company1 from '../../Assets/company1.jpg'
import { PiShareFat } from "react-icons/pi";
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';

export default function Alqemam() {
    const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Al-qemam</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="container my-5">
      <div className="mx-5">
      <div className={`row rowShadow border-1 border rounded-5 align-items-start py-4 ${isScreenSmall ? "text-center" : ""}`}>
            <div className="col-md-1">
                <div>
                    <img src={company1} className={`rounded-pill ${isScreenSmall ? "w-50" : "w-100"}`} alt="QTech" />
                </div>
            </div>
            <div className="col-md-6">
                    <h5 className="textMain fw-bold">Alqemam - QTech</h5>
                    <p>Software Company</p>
                    <p className="textDarkGray">Mansoura, Egypt</p>
                    <p className="textLightGray">11 - 50 Employees</p>
                    <p className="textBlue">info@alqemam.com.sa</p>
                    <div className="d-flex align-items-center textLightGray">
                        <PiShareFat className="fs-5" />
                        <p>Share company profile</p>
                    </div>

                </div>
        </div>

        <div className="row rowShadow border-1 border rounded-5 p-4 my-5">
            <h5 className="textMain fw-bold">About</h5>
            <div style={{color:'#D9D9D9'}}>
            <p>I believe that my ability to connect with people and my outgoing personality sets me apart from others. I am able to engage with people and make sure that they understand what I am saying. Additionally, I am always willing to answer any questions that people may have</p>
            </div>
        </div>

        <div className={`row rowShadow rounded-5 py-5 border-1 border ${isScreenSmall ? "px-2 justify-content-center" : "px-4"}`}>
            <h5 className={`fw-bold textMain ${isScreenSmall? " text-center" : ""}`}>Open Vacancies at Alqemam - QTech</h5>
           <div className={`row  ${isScreenSmall ? "gy-2" : "justify-content-around  gy-4"}`}>

                    <div className="col-md-11 rounded-5 rowShadow border-1 border p-4">
                    
                    <h5 className="textMain fw-normal">HR Administrative Assistant</h5>
                        <p>Alqemam - QTech - <span className="textDarkGray">Mansoura, Egypt</span></p>
                        <p className="textDarkGray">Entry Level . 0-2 Yrs of Exp . <span className="textBlue">Full Time</span></p>
                        

                    <div className={`d-flex justify-content-between textLightGray ${isScreenSmall ? "flex-column" : ""}`}>
                    <p className="textLightGray">In 7 days</p>
                    <div className="d-flex">
                    <div className="d-flex align-items-center">
                        <i className="fa-regular fa-bookmark mx-1 "></i>
                        <p>Save</p>
                        </div>
                    <div className="d-flex align-items-center ms-3 textLightGray">
                    <i className="fa-regular fa-share-from-square mx-1"></i>
                        <p>Share</p>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-11 rounded-5 rowShadow border-1 border p-4">
                    
                    <h5 className="textMain fw-normal">HR Administrative Assistant</h5>
                        <p>Alqemam - QTech - <span className="textDarkGray">Mansoura, Egypt</span></p>
                        <p className="textDarkGray">Entry Level . 0-2 Yrs of Exp . <span className="textBlue">Full Time</span></p>
                        

                    <div className={`d-flex justify-content-between textLightGray ${isScreenSmall ? "flex-column" : ""}`}>
                    <p className="textLightGray">In 7 days</p>
                    <div className="d-flex">
                    <div className="d-flex align-items-center">
                        <i className="fa-regular fa-bookmark mx-1 "></i>
                        <p>Save</p>
                        </div>
                    <div className="d-flex align-items-center ms-3 textLightGray">
                    <i className="fa-regular fa-share-from-square mx-1"></i>
                        <p>Share</p>
                        </div>
                    </div>
                    </div>
                    </div>
           </div>
        </div>
      </div>
    </div>
    </>
}


