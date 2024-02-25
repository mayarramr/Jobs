import React from 'react'
import Style from './SubmitApplication.module.css'
import company1 from '../../Assets/company1.jpg'
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet'

export default function SubmitApplication() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Submit Application</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="container">
    <div className="row justify-content-center my-5">
            <div className="col-md-10">
            <div className={`${Style.rowShadow} border border-1 rounded-5 mt-5 p-4`}>
                <div className={`mb-4 ${isScreenSmall ? "w-100" : "w-25"}`}>
                <img src={company1} className="w-25 rounded-pill" alt="QTech" />
                </div>
                <h6 className="textMain fw-bold">HR Manager <span className="text-black fs-6"> (Location: <span className="fw-light textLightGray fs-6">Mansoura, Egypt</span> )</span></h6>
              <div className={`${isScreenSmall ? "w-100" : "w-50"}`}>
                <p>The hiring team at the company requires you to answer the below questions</p>
                <p className="textLightGray">What makes you the ideal candidate for this position?</p>
              <textarea rows="5" cols={`${isScreenSmall ? "30" : "100"}`} className={`${Style.rowShadow} border border-1 rounded-5 py-2 px-4`} style={{color:'#D9D9D9' , resize:'vertical'}}>
                Write your answer here
                </textarea>
                <button className={`${Style.rowShadow} btn bgMain textwhite rounded-5 my-3`}>Submit Application</button>

                
              </div>
            </div>
            </div>
        </div>
    </div>
    </>
}


