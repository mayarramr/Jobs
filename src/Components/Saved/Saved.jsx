import React from 'react'
import Style from './Saved.module.css'
import company1 from '../../Assets/company1.jpg'
import company5 from '../../Assets/company5.jpg'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet'

export default function Saved() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Saved</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
     <div className="container py-5 mt-5">
        <Link to={'/complete-application'} className={`rowShadow row border-1 border rounded-5 py-4 justify-content-between  text-decoration-none text-black ${isScreenSmall ? "mx-2 px-2" : " px-4 mx-5"}`}>
            <div className="col-md-6">
        
           <h5 className="textMain">HR Administrative Assistant</h5>
                <p>Alqemam - QTech - <span className="textDarkGray">Mansoura, Egypt</span></p>
                <p className="textDarkGray">Entry Level . 0-2 Yrs of Exp . <span className="textBlue">Full Time</span></p>
               <div className="textLightGray">
               <p>In 7 days</p>
                <p>50 Applicants fro 2 open positions</p>
               </div>
              <div className="d-flex mt-2 textLightGray">
                <button className="btn bgMain rounded-5 btn-sm text-white py-2">Complete Application</button>
                <button className="btn btn-sm textLightGray">Remove from Saved</button>
              </div>
           </div>

           <div className="col-md-3 d-flex justify-content-end">
           <img src={company1} alt="QTech" className={`rounded-pill ${isScreenSmall ? "w-25" : "w-50 h-50"}`}/>
        
            </div>
        </Link>

        <div className={`rowShadow row border-1 border rounded-5 p-4 justify-content-between my-5  ${isScreenSmall ? "mx-2 px-2" : " px-4 mx-5"}`}>
            <div className="col-md-6">
        
           <h5 className="textMain">HR Administrative Assistant</h5>
                <p>Alqemam - QTech - <span className="textDarkGray">Mansoura, Egypt</span></p>
                <p className="textDarkGray">Entry Level . 0-2 Yrs of Exp . <span className="textBlue">Full Time</span></p>
                <div className="textLightGray">
               <p>In 7 days</p>
                <p>50 Applicants fro 2 open positions</p>
               </div>
              <div className="d-flex mt-2 textLightGray">
                <Link to={'/complete-application'} className="btn bgMain rounded-5 btn-sm text-white py-2">Complete Application</Link>
                <button className="btn btn-sm textLightGray">Remove from Saved</button>
              </div>
           </div>

           <div className="col-md-3 d-flex justify-content-end">
           <img src={company5} alt="Al Alamia" className={`rounded-pill ${isScreenSmall ? "w-25" : "w-50 h-50"}`}/>
        
            </div>
        </div>

        <div className={`rowShadow row border-1 border rounded-5 py-4 justify-content-between ${isScreenSmall ? "mx-2 px-2" : " px-4 mx-5"}`}>
            <div className="col-md-4">
        
           <h5 className="textMain">HR Administrative Assistant</h5>
                <p>Alqemam - QTech - <span className="textDarkGray">Mansoura, Egypt</span></p>
                <p className="textDarkGray">Entry Level . 0-2 Yrs of Exp . <span className="textBlue">Full Time</span></p>
               <div className="textLightGray">
               <p>In 7 days</p>
                <p>50 Applicants fro 2 open positions</p>
               </div>
              <div className="d-flex mt-2 textLightGray">
                <button className="btn bgMain rounded-5 btn-sm text-white py-2">Complete Application</button>
                <button className="btn btn-sm textLightGray">Remove from Saved</button>
              </div>
           </div>
           <div className="col-md-3 d-flex justify-content-end">
           <img src={company5} alt="Al Alamia" className={`rounded-pill ${isScreenSmall ? "w-25" : "w-50 h-50"}`}/>
        
            </div>
        </div>
    </div>
    </>
}


