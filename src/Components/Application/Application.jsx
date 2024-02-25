import React from 'react'
import Style from './Application.module.css'
import company1 from '../../Assets/company1.jpg'
import company5 from '../../Assets/company5.jpg'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet'

export default function Application() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Application</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="container py-5 mt-5">
        <div className={`rowShadow row border-1 border rounded-5 py-4 justify-content-between mx-5 text-decoration-none text-black ${isScreenSmall ? "px-2" : "px-4"}`}>
            <div className="col-md-6">
        
           <h5 className="textMain">HR Administrative Assistant</h5>
                <p>Alqemam - QTech - <span className="textDarkGray">Mansoura, Egypt</span></p>
               <div className="textLightGray">
               <p>Applied two weeks ago</p>
                </div>
              <div className="d-flex mt-2 textLightGray">
                <Link className="btn rounded-5 btn-sm text-white py-2 me-3 rowShadow" style={{ backgroundColor:'#6CDB39'}}>In Consideration</Link>
             </div>
           </div>

           <div className="col-md-2 d-flex justify-content-end">
           <img src={company1} alt="QTech" className={`rounded-pill ${isScreenSmall ? "w-25" : "w-50 h-50"}`}/>
        
            </div>
          </div>

        <div className={`rowShadow row border-1 border rounded-5 py-4 justify-content-between mx-5 text-decoration-none text-black my-4 ${isScreenSmall ? "px-2" : "px-4"}`}>
            <div className="col-md-6">
        
           <h5 className="textMain">HR Administrative Assistant</h5>
                <p>Alqemam - QTech - <span className="textDarkGray">Mansoura, Egypt</span></p>
               <div className="textLightGray">
               <p>Applied two weeks ago</p>
                </div>
              <div className="d-flex mt-2 textLightGray">
                <Link className="btn rounded-5 btn-sm text-white py-2 me-3 rowShadow" style={{ backgroundColor:'#F9AF23'}}>Viewed</Link>
             </div>
           </div>

           <div className="col-md-2 d-flex justify-content-end">
           <img src={company1} alt="QTech" className={`rounded-pill ${isScreenSmall ? "w-25" : "w-50 h-50"}`}/>
        
            </div>
          </div>

        <div className={`rowShadow row border-1 border rounded-5 py-4 justify-content-between mx-5 text-decoration-none text-black ${isScreenSmall ? "px-2" : "px-4"}`}>
            <div className="col-md-6">
        
           <h5 className="textMain">HR Administrative Assistant</h5>
                <p>Alqemam - QTech - <span className="textDarkGray">Mansoura, Egypt</span></p>
               <div className="textLightGray">
               <p>Applied two weeks ago</p>
                </div>
              <div className="d-flex mt-2 textLightGray">
                <div className="btn rounded-5 btn-sm text-white py-2 me-3 rowShadow" style={{ backgroundColor:'#FF3F33'}}>Not Selected</div>
                <p>Reason : Underqualified</p>
             </div>
           </div>

           <div className="col-md-2 d-flex justify-content-end">
           <img src={company1} alt="QTech" className={`rounded-pill ${isScreenSmall ? "w-25" : "w-50 h-50"}`}/>
        
            </div>
          </div>
    </div>
    </>
}


