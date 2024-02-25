import React from 'react'
import Style from './Users.module.css'
import { SlArrowDown } from "react-icons/sl";
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';

export default function Users() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <> 
     <Helmet>
                <meta charSet="utf-8" />
                <title>Users</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  <div className={`container ${isScreenSmall ? "" : "w-75"}`}>
  <form className=" mx-auto">
    <div className="position-relative mt-5">
      <input className={`${Style.searchInput} mx-2 py-2 rounded-5 ps-4 w-100`} aria-label="Search" placeholder="Manage Users" />
   </div>
  </form>
  <div className={`text-center ${isScreenSmall ? "my-3" : "px-5 my-5"}`}>
    <h5 className="fw-lighter">Here you can create and manage accounts for your HR and hiring team so that they can help you post jobs and screen job candidates</h5>
    <button className={`rowShadow btn rounded-5 btn-lg`}>Invited Users (0)</button>
  </div>

  <div className="row">
    <div className="col-md-5">
    <div className={`${Style.rowShadow} rounded-5 p-4`}>
    <h5>Add User</h5>
    <input type="text" className="border py-2 w-100 rounded-4 ps-2" placeholder="Username" id="workEmail" name="workEmail" required />
    <input type="text" className="border my-4 py-2 w-100 rounded-4 ps-2" placeholder="Email" id="password" name="password" required />
    <input type="text" className="border py-2 w-100 rounded-4 ps-2 mb-4" placeholder="Job Title" id="Company Name" name="Company Name" required />
    <div className="position-relative">
    <input type="text" className="border py-2 w-100 rounded-4 ps-2" placeholder="Type" id="Company Name" name="Company Name" required />
        <div className="position-absolute end-0 textLightGray top-50 translate-middle-y me-3">
        <SlArrowDown /> 
         </div>      

    </div>
  </div>
    </div>
    <div className={`col-md-1 d-flex ${isScreenSmall ? "justify-content-center my-3" : "align-items-end"}`}>
    <button className="btn bgMain textwhite rounded-5 px-4">Add</button></div>
  </div>
  </div>
    </>
}


