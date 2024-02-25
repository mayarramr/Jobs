import React from 'react'
import Style from './UnlockedCandidate.module.css'
import { VscEye } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';

export default function UnlockedCandidate() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Unlocked Candidates</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="container">
        <div className={`row my-5 justify-content-evenly ${isScreenSmall ? "mx-2" : ""}`}>
            <Link to={'/candidate-manar'} className={`rowShadow border border-1 text-decoration-none text-dark col-md-5 rounded-5 mt-5 p-4`}>
                <h5 className="textMain fw-bold">Manar khaled</h5>
              <div className={`${isScreenSmall ? "" : "mt-5"}`}>
              <div className="rounded-5  text-center" style={{width:'150px' , backgroundColor:'#6CDB39'}}>
                <p>Ranking higher</p>
                </div>
                <p className="text-black">Applied for: <span className="textDrakGray">HR Manager</span></p>
                <p className="text-black">Location: <span className="textDrakGray">Mansoura, Egypt</span></p>
                <p className="textDrakGray">Entry Level. 0-2 Yrs of Exp</p>
                <p className="textLightGray">in 7 days</p>
                <div className="d-flex align-items-center textLightGray">
                    <VscEye className="" />
                    <p>View Application</p>
                </div>
                
              </div>
            </Link>
            <div className={`rowShadow border border-1 col-md-5 rounded-5 mt-5 p-4`}>
                <h5 className="textMain fw-bold">Manar khaled</h5>
              <div className={`${isScreenSmall ? "" : "mt-5"}`}>
                <p className="text-black">Applied for: <span className="textDrakGray">HR Manager</span></p>
                <p className="text-black">Location: <span className="textDrakGray">Mansoura, Egypt</span></p>
                <p className="textDrakGray">Entry Level. 0-2 Yrs of Exp</p>
                <p className="textLightGray">in 7 days</p>
                <div className="d-flex align-items-center textLightGray">
                    <VscEye className="" />
                    <p>View Application</p>
                </div>
                
              </div>
            </div>
        </div>

        <div className={`row my-5 justify-content-evenly ${isScreenSmall ? "mx-2" : ""}`}>
            <div className={`rowShadow border border-1 col-md-5 rounded-5 mt-5 p-4`}>
                <h5 className="textMain fw-bold">Manar khaled</h5>
              <div className={`${isScreenSmall ? "" : "mt-5"}`}>
                <p className="text-black">Applied for: <span className="textDrakGray">HR Manager</span></p>
                <p className="text-black">Location: <span className="textDrakGray">Mansoura, Egypt</span></p>
                <p className="textDrakGray">Entry Level. 0-2 Yrs of Exp</p>
                <p className="textLightGray">in 7 days</p>
                <div className="d-flex align-items-center textLightGray">
                    <VscEye className="" />
                    <p>View Application</p>
                </div>
                
              </div>
            </div>
            <div className={`rowShadow border border-1 col-md-5 rounded-5 mt-5 p-4`}>
                <h5 className="textMain fw-bold">Manar khaled</h5>
              <div className={`${isScreenSmall ? "" : "mt-5"}`}>
                <p className="text-black">Applied for: <span className="textDrakGray">HR Manager</span></p>
                <p className="text-black">Location: <span className="textDrakGray">Mansoura, Egypt</span></p>
                <p className="textDrakGray">Entry Level. 0-2 Yrs of Exp</p>
                <p className="textLightGray">in 7 days</p>
                <div className="d-flex align-items-center textLightGray">
                    <VscEye className="" />
                    <p>View Application</p>
                </div>
                
              </div>
            </div>
        </div>
    </div>
    </>
}


