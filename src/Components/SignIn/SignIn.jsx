import React from 'react'
import Style from './SignIn.module.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function SignIn() {
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Sign In</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className=" vh-100 d-flex flex-column">
  <div className="row">
            <div className="col-md-6 ps-5 py-5 bgMain">
           
            <Link to={'/'} className={`${Style.titleFont} display-1 text-white ms-5 text-decoration-none`}>JOBS</Link>
          
            </div>
        </div>
  

        <div className="row h-100">
            <div className="col-md-6 pt-5 bgMain d-flex justify-content-center">
                <div className="row">
                    <h2 className="text-white fw-normal display-4">Welcome Back</h2>
                </div>
            </div>

            <div className="col-md-6 bg-white px-5 mb-5 pt-5">
            
                <input type="text" className="border my-3  w-100 rounded-4 ps-3" style={{height:'55px'}} placeholder="Email" id="email" name="email" required />
                <input type="text" className="border my-3  w-100 rounded-4 ps-3" style={{height:'55px'}} placeholder="Password" id="password" name="password" required />
                    <p className="font-sm m-0">Forget Password</p>
                <Link to={'/explore'} className="btn bgMain w-100 rounded-5 textwhite py-2 mt-3">Sign in</Link>
                <p className="font-sm ms-2">Don't Have and account ? <span className="textMain"> Sign Up</span></p>
            </div>

              
               
          
         
            </div>
           
            </div>
    </>
}


