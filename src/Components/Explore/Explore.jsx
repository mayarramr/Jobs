import React from 'react'
import Style from './Explore.module.css'
import company1 from '../../Assets/company1.jpg'
import company5 from '../../Assets/company5.jpg'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet'

export default function Explore() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Explore</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="container py-5 mt-5">
        <Link to={'/hr-administrative-assistant'} className={`rowShadow row border-1 border rounded-5 py-4 justify-content-between text-decoration-none text-black ${isScreenSmall ? "mx-2 px-2" : " px-4 mx-5"}`}>
            <div className="col-md-4">
        
           <h5 className="textMain">HR Administrative Assistant</h5>
                <p>Alqemam - QTech - <span className="textDarkGray">Mansoura, Egypt</span></p>
                <p className="textDarkGray">Entry Level . 0-2 Yrs of Exp . <span className="textBlue">Full Time</span></p>
                <p className="textLightGray">In 7 days</p>

              <div className={`d-flex textLightGray ${isScreenSmall ? "" : " mt-5"}`}>
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
           <div className="col-md-3 d-flex justify-content-end">
           <img src={company1} alt="QTech" className={`rounded-pill ${isScreenSmall ? "w-25" : "w-50 h-50"}`}/>
        
            </div>
        </Link>

        <div className={`rowShadow row border-1 border rounded-5 py-4 justify-content-between text-decoration-none text-black my-4 ${isScreenSmall ? "mx-2 px-2" : " px-4 mx-5"}`}>
            <div className="col-md-4">
        
           <h5 className="textMain">HR Administrative Assistant</h5>
                <p>Alqemam - QTech - <span className="textDarkGray">Mansoura, Egypt</span></p>
                <p className="textDarkGray">Entry Level . 0-2 Yrs of Exp . <span className="textBlue">Full Time</span></p>
                <p className="textLightGray">In 7 days</p>

              <div className={`d-flex textLightGray ${isScreenSmall ? "" : " mt-5"}`}>
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
           <div className="col-md-3 d-flex justify-content-end">
           <img src={company5} alt="al alamia" className={`rounded-pill ${isScreenSmall ? "w-25" : "w-50 h-50"}`}/>
        
            </div>
        </div>

        
        <div className={`rowShadow row border-1 border rounded-5 py-4 justify-content-between text-decoration-none text-black ${isScreenSmall ? "mx-2 px-2" : " px-4 mx-5"}`}>
            <div className="col-md-4">
        
           <h5 className="textMain">HR Administrative Assistant</h5>
                <p>Alqemam - QTech - <span className="textDarkGray">Mansoura, Egypt</span></p>
                <p className="textDarkGray">Entry Level . 0-2 Yrs of Exp . <span className="textBlue">Full Time</span></p>
                <p className="textLightGray">In 7 days</p>

              <div className={`d-flex textLightGray ${isScreenSmall ? "" : " mt-5"}`}>
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
           <div className="col-md-3 d-flex justify-content-end">
           <img src={company5} alt="al alamia" className={`rounded-pill ${isScreenSmall ? "w-25" : "w-50 h-50"}`}/>
        
            </div>
        </div>
    </div>
    </>
}


