import React from 'react'
import Style from './CandidateManar.module.css'
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';

export default function CandidateManar() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Candidate Manar</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="container">
        <div className="row justify-content-center my-5 pt-5">
            <div className="col-md-10">
            <div className={`${Style.rowShadow} border border-1 rounded-5 mt-5 p-4`}>
                <h5 className="textMain fw-bold">Manar khaled</h5>
              <div className="mt-5">
              <div className="rounded-5  text-center" style={{width:'150px' , backgroundColor:'#6CDB39'}}>
                <p>Ranking higher</p>
                </div>
                <p className="text-black">Applied for: <span className="textDrakGray">HR Manager</span></p>
                <p className="text-black">Location: <span className="textDrakGray">Mansoura, Egypt</span></p>
                <p className="textDrakGray">Entry Level. 0-2 Yrs of Exp</p>
                <p className="textLightGray">in 7 days</p>
                <p className="textLightGray">What makes you ideal candidate for this position ?</p>
                <textarea rows="5" cols={`${isScreenSmall ? "30" : "100"}`} className={`rowShadow border border-1 rounded-5 py-2 px-4`} style={{color:'#D9D9D9' , resize:'vertical'}}>
              I believe that my ability to connect with people and my outgoing personality sets me apart from others. I am able to engage with people and make sure that they understand what I am saying. Additionally, I am always willing to answer any questions that people may have.
                </textarea>
               
                <button className={`${Style.rowShadow} btn bgMain textwhite rounded-5 my-3`}>Contact Manar</button>

                
              </div>
            </div>
            </div>
        </div>
    </div>
    </>
}


