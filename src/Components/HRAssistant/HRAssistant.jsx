import React from 'react'
import Style from './HRAssistant.module.css'
import company1 from '../../Assets/company1.jpg'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet'

export default function HrAssistant() {
    const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })

    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>HR Assistant</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="container py-5 mt-5">
        <div className={`row justify-content-evenly ${isScreenSmall ? "gy-3 px-4" : "px-5"}`}>
            <div className={`rowShadow col-md-7 border border-1 rounded-5 p-4`}>
                <div className="row justify-content-between">
                    <div className="col-md-7">
                        <h5 className="textMain">HR Administrative Assistant</h5>
                    <p>Alqemam - QTech - <span className="textDarkGray">Mansoura, Egypt</span></p>
                <p className="textDarkGray">Entry Level . 0-2 Yrs of Exp . <span className="textBlue">Full Time</span></p>
                <p className="textLightGray">In 7 days</p>
                <p className="textLightGray">50 Applicants fro 2 open positions</p>

              <div className={`d-flex textLightGray ${isScreenSmall ? "flex-column" : ""}`}>
              <Link to={'/submit-application'} className={`${Style.rowShadow} btn bgMain textwhite rounded-5 fw-normal`}>Apply for Job</Link>
             
              <div className="d-flex">
              <div className="d-flex align-items-center mx-3">
                <i className="fa-regular fa-bookmark mx-1 "></i>
                <p>Save</p>
                </div>
              <div className="d-flex align-items-center textLightGray">
              <i className="fa-regular fa-share-from-square mx-1"></i>
                <p>Share</p>
                </div>
              </div>
              </div>
                    </div>
                    <div className="col-md-2">
                        <img src={company1} className={`rounded-pill ${isScreenSmall ? "w-50" : "w-100"}`} alt="" />
                    </div>
                </div>
            </div>

            <div className={`rowShadow col-md-4 border border-1 rounded-5 p-4 position-relative`}>
            <h5 className="textMain fw-bold">About Alqemam - Qtech</h5>
                <p>Software Company</p>
                <p className="textDarkGray">Mansoura, Egypt</p>
                <p className="textLightGray">11 - 50 Employees</p>
                <p className="textBlue">Browse all vacancies at Alqemam</p>
                <p className="textLightGray position-absolute end-0 mx-4">View more</p>


            
            </div>
        </div>

        <div className={`row justify-content-evenly my-5 ${isScreenSmall ? "gy-3 px-4" : "px-5"}`}>
            <div className={`${Style.rowShadow} col-md-7 border border-1 rounded-5 p-4`}>
                <div className="row justify-content-between">
                    <div className="col-md-7">
                        <h5 className="fw-bold">Job Details</h5>
                    <p className="textDarkGray">Experience Needed: <span className="text-black">0-2 Years</span></p>
                    <p className="textDarkGray">Career Level: <span className="text-black">Entry Level</span></p>
                    <p className="textDarkGray">Education Level: <span className="text-black">Not Specified</span></p>
                    <p className="textDarkGray">Salary: <span className="text-black">Confidential</span></p>
    
          
                    </div>
                 
                </div>
            </div>

            <div className={`${Style.rowShadow} col-md-4 border border-1 rounded-5 p-4 position-relative`}>
            <h5 className="text-black fw-bold">Find Related Jobs</h5>
               <p className="textBlue">HR Manager</p>
               <p className="textBlue ">HR Manager</p>
               <p className="textBlue">HR Manager</p>
               <p className="textBlue">HR Manager</p>
                

            
            </div>
        </div>

        <div className={`row my-5 ${isScreenSmall ? "mx-2" : "px-5 mx-4"}`}>
            <div className={`rowShadow border border-1 rounded-5 ${isScreenSmall ? " px-2 py-3" : "p-4"}`}>
                        <h5 className="fw-bold">Job Description</h5>
                        <ul className='textDarkGray'>
                            <li>Handling office tasks, such as filing, generating reports and presentations, setting up for meetings.</li>
                            <li>Answer and direct phone calls.</li>
                            <li>Organize and schedule appointments.</li>
                            <li>Develop and maintain a filing system.</li>
                            <li>Order office supplies and research new deals and suppliers.</li>
                            <li>Order office supplies and research new deals and suppliers.</li>
                            <li>Order office supplies and research new deals and suppliers.</li>
                            <li>Order office supplies and research new deals and suppliers.</li>
                        </ul>
            </div>
        </div>


        <div className={`row my-5 ${isScreenSmall ? "mx-2" : "px-5 mx-4"}`}>
            <div className={`rowShadow border border-1 rounded-5 ${isScreenSmall ? " px-2 py-3" : "p-4"}`}>
                        <h5 className="fw-bold">Job Requirments</h5>
                        <ul className='textDarkGray'>
                           <li>Has good English (Writing and speaking).</li>
                           <li>Well Organized.</li>
                            <li>Passionate to Learn.</li>
                            <li>Develop and maintain a filing system.</li>
                            <li>Order office supplies and research new deals and suppliers.</li>
                            <li>Order office supplies and research new deals and suppliers.</li>
                            <li>Order office supplies and research new deals and suppliers.</li>
                            <li>Order office supplies and research new deals and suppliers.</li>
                        </ul>
            </div>
        </div>


 
  
</div>
    </>
}


