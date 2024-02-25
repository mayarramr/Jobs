import React from 'react'
import Style from './CompleteApplication.module.css'
import company1 from '../../Assets/company1.jpg'
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet'

export default function CompleteApplication() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Complete Application</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
     <div className="container">
    <div className="row justify-content-center my-5">
            <div className="col-md-10">
            <div className={`rowShadow border border-1 rounded-5 mt-5 p-4`}>
                <div className={`mb-4 ${isScreenSmall ? "w-100" : "w-25"}`}>
                <img src={company1} className="w-25 rounded-pill" alt="QTech" />
                </div>
                <h6 className="textMain fw-bold">HR Manager <span className="text-black fs-6"> (Location: <span className="fw-light textLightGray fs-6">Mansoura, Egypt</span> )</span></h6>
              <div className={`${isScreenSmall ? "w-100" : "w-50"}`}>
                <p style={{color:'#6CDB39'}}>Your profile ranks highly among other applicants</p>
               <p className="textLightGray">What makes you the ideal candidate for this position?</p>
              <textarea rows="10" cols={`${isScreenSmall ? "30" : "100"}`} className={`rowShadow border border-1 rounded-5 py-2 px-4`} style={{color:'#D9D9D9' , resize:'vertical'}}>
              I believe that my ability to connect with people and my outgoing personality sets me apart from others. I am able to engage with people and make sure that they understand what I am saying. Additionally, I am always willing to answer any questions that people may have.
                </textarea>
                <button className={`rowShadow btn bgMain textwhite rounded-5 my-3`}>Submit Application</button>

                
              </div>
            </div>
            </div>
        </div>
    </div>
    </>
}


