import React from 'react'
import Style from './SignUp.module.css'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet'

export default function EmployeeSignUp() {
    const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Seeker Sign Up</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
   
  <div className=" vh-100 d-flex flex-column">
  <div className="row">
            <div className="col-md-6 ps-5 py-5 bgMain">
           
            <Link to={'/'} className={`${Style.titleFont} display-1 text-white ms-5 text-decoration-none`}>JOBS</Link>
          
            </div>
        </div>
  

        <div className="row h-100">
            <div className="col-md-6 pt-5 bgMain d-flex flex-column align-items-center">
                <div className="row">
                    <div className="col-md-9">
                    <h2 className="text-white fw-normal">Create an Account to Find Job Faster</h2>
                        <h5 className="fw-normal">Employer ? <span className="textwhite" >Sign up as employer.</span></h5> 
                    </div>
                </div>
            </div>

            <div className={`col-md-6 bg-white mb-5 ${isScreenSmall ? "px-3 my-3" : "px-5"}`}>
                <div className="w-100 d-flex">
                    <input type="text" className="border w-50 rounded-4 ps-3 me-4" placeholder="First Name" id="firstName" name="firstName" required />
                    <input type="text" className="border w-50 rounded-4 ps-3" style={{height:'55px'}} placeholder="Last Name" id="lastName" name="lastName" required />
                </div>
                <input type="text" className="border my-3  w-100 rounded-4 ps-3" style={{height:'55px'}} placeholder="Work Email" id="workEmail" name="workEmail" required />
                <input type="text" className="border my-3  w-100 rounded-4 ps-3" style={{height:'55px'}} placeholder="Password" id="password" name="password" required />
                <input type="text" className="border my-3  w-100 rounded-4 ps-3" style={{height:'55px'}} placeholder="What job titles are you looking for ?" />
                <div className="d-flex font-sm align-items-center">
                <div className="position-relative d-flex flex-column justify-content-center align-items-center">
                <input type="checkbox" className="mx-2"/>
                <i class="fa-solid fa-check position-absolute fa-xs"></i>
                </div>
                <p>I've read and agree with <span className="textMain">Terms of Service</span> and our <span className="textMain">Privacy Police</span></p>

                </div>
                <Link to={'/explore'} className="btn bgMain w-100 rounded-5 textwhite py-2 mt-3">Sign Up</Link>
                <p className="font-sm ms-2">Have and account ? <span className="textMain"> Sign in</span></p>
            </div>

              
               
          
         
            </div>
           
            </div>
  

    </>
}


