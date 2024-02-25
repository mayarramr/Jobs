import React from 'react'
import Style from './CandidateManar.module.css'
import { VscEye } from "react-icons/vsc";
import { Helmet } from 'react-helmet';

export default function CandidateManar() {
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
               
                <button className={`${Style.rowShadow} btn bgMain textwhite rounded-5 my-3`}>Contact Manar</button>

                
              </div>
            </div>
            </div>
        </div>
    </div>
    </>
}


