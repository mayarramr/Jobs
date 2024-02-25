import React from 'react'
import Style from './Candidates.module.css'
import { TbCameraPlus } from "react-icons/tb";
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';

export default function Candidates() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Candidates</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
     <div className={`py-5 mt-5 ${isScreenSmall ? "" : "container"}`}>
    <form className="mx-5">
      <div className="position-relative mt-5">
        <input className={`${Style.searchInput} ${isScreenSmall ? "ps-2" : "ps-4"} mx-2 py-2 rounded-5 w-100`} aria-label="Search" placeholder="Hello Manar !" />
        <button className={`${Style.rowShadow} btn position-absolute top-0 end-0 bgMain rounded-5 my-3 textwhite`}>Add New Post</button>
      </div>
    </form>

    <div className={`row px-5 justify-content-evenly ${isScreenSmall ? "gy-4 my-2"  : "my-5"}`}>
    <div className={`${Style.rowShadow} col-md-7 border border-1 rounded-5 p-4 text-center d-flex justify-content-center`}>
      
            <div className=" text-center">
                <h5>Your Assistant</h5>
                <p className={`${isScreenSmall ? "" : "mx-5"}`}>Once you add your jobs and receive candidates, your assistant will highlight the most potential candidates for you to check</p>
         <div className="d-flex justify-content-center">
         <button className={`${Style.rowShadow} btn rounded-5 bg-white text-black me-3 btn-lg`}>Active Users (0)</button>
   
         </div>
            </div>
        
    </div>

    <div className={`${Style.rowShadow} col-md-4 border border-1 rounded-5 p-4 text-center`}>
    <h5 className="text-black fw-bold">Complete Company Profile</h5>
    <button className={`${Style.rowShadow} btn rounded-5 bgMain textwhite w-100 py-2`}>Company Main Info</button>
    <button className={`${Style.rowShadow} btn rounded-5 bgMain textwhite w-100 py-2 my-3`}>Company Website</button>
    <button className={`${Style.rowShadow} btn rounded-5 bgMain textwhite w-100 py-2`}>Company Logo</button>
    
    
    </div>
</div>

    <div className={`row px-5 justify-content-evenly ${isScreenSmall ? "gy-4 my-2"  : "my-5"}`}>
    <div className={`${Style.rowShadow} col-md-7 border border-1 rounded-5 p-4 text-center d-flex justify-content-center`}>
      
            <div className=" text-center">
                <h5>Team Activity</h5>
                <p className={`my-2 ${isScreenSmall ? "" : "mx-5"}`}>Your team members activity on different jobs will appear here</p>
         <div className="d-flex justify-content-center">
         <button className={`${Style.rowShadow} btn rounded-5 bgMain textwhite me-3`}>Add Team Member</button>
    
         </div>
            </div>
        
    </div>

    <div className={`${Style.rowShadow} d-flex align-items-center h-50 col-md-4 border border-1 rounded-pill p-4 text-center`}>
    <TbCameraPlus className="fs-1 me-3 textLightGray" />
  
   <div>
   <h5 className="text-black fw-bold">Add Logo</h5>
    <p>Edit Profile</p>
    
   </div>
    
    </div>
</div>
</div>
    </>
}


