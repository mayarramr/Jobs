import React from 'react'
import Style from './CV.module.css'
import { TbCameraPlus } from "react-icons/tb";
import { SlArrowDown } from "react-icons/sl";
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';

export default function Cv() {
    const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>CV</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="container my-5 py-5">
            <div className="row ">
            <form className={`mx-auto ${isScreenSmall? "" : "w-75"}`}>
              <div>
                <input className={`${Style.searchInput} mx-2 py-2 rounded-5 ps-4 w-100`} aria-label="Search" placeholder="Provide your information to make professional CV" />
               </div>
            </form>
            </div>

            <div className={`row justify-content-evenly mt-5 ${isScreenSmall ? "mx-1" : ""}`}>
                <div className="col-md-4 gy-5">

                  <div className="row rowShadow rounded-5">
                  <div className="d-flex">
                   <div>
                   <TbCameraPlus className="fs-3" />
                   </div>
                   <div className="w-75">
                    <h5 className="ms-4">Manar Khaled</h5>
                    <div className="d-flex justify-content-evenly w-100">
                        <div className="textDarkGray">
                            <p>Location:</p>
                            <p>Education:</p>
                            <p>Experience:</p>
                        </div>
                        <div className="textLightGray">
                            <p>Mansoura, Egypt</p>
                            <p>Add Education</p>
                            <p>2 Years</p>
                        </div>
                    </div>
                   </div>
                   </div>
                  </div>

                  <div className="row my-5 rowShadow rounded-5">
                  <div className="d-flex">
                   <div className="mx-4 py-3">
                    <h5 className="">Contact Information</h5>
                    <div className="d-flex justify-content-evenly w-100">
                        <div className="textDarkGray">
                            <p>Email:</p>
                            <p>Mobile:</p>
                        </div>
                        <div className="textLightGray">
                            <p>Manarkhaled@gmai.com</p>
                            <p>Add your number</p>
                        </div>
                    </div>
                   </div>
                   </div>
                  </div>

                  <div className="row my-5 rowShadow rounded-5">
                  <div className="d-flex px-3">
                   <div className="mx-4 py-3">
                    <h5 className="">Top 5 Specialists</h5>
                    <div className="d-flex justify-content-evenly w-100">
                        <div className="textDarkGray my-2">
                        That will help you to stand out from other applicants
                        </div>
                    </div>
                    <button className="btn bgMain textwhite rounded-5">Add Specialists</button>
                   </div>
                   </div>
                  </div>

                  <div className="row my-5 rowShadow rounded-5">
                  <div className="d-flex px-3">
                   <div className="mx-4 py-3">
                    <h5 className="">Top 5 Specialists</h5>
                    <div className="d-flex justify-content-evenly w-100">
                        <div className="textDarkGray my-2">
                        That will help you to stand out from other applicants
                        </div>
                    </div>
                    <button className="btn bgMain textwhite rounded-5">Add Specialists</button>
                   </div>
                   </div>
                  </div>
                </div>

                <div className="col-md-7 gy-5">
                    <div className="row">
                        <div className="rowShadow rounded-5 py-3">
                            <div className="d-flex justify-content-between">
                            <h5 className="fw-bold">Do you have a CV file ?</h5>
                        <button className="btn bgMain rounded-5 textwhite">Upload CV</button>
                            </div>
                            <div className="w-75 textDarkGray">
                            <p>Attaching your CV file will help employers learn further about your style and presentation skills.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="rowShadow rounded-5 py-4">
                            <div className="d-flex justify-content-between">
                            </div>
                            <h5 className="fw-bold">Personal Information</h5>
                            <div className="d-flex">
                                <div className="textDarkGray">
                                    <p>Name:</p>
                                    <p className="mb-0">Birth date:</p>
                                </div>
                                <div className="textLightGray ms-4">
                                    <p>Manar Khaled</p>
                                    <p className="mb-0">Add your birth date</p>
                                </div>
                            </div>
                            <div>
                               <div className="d-flex align-items-center textDrakGray">
                               <p>Gender</p>
                                <SlArrowDown  className="mx-3" />
                               </div>
                               <div className="d-flex align-items-center textDrakGray">
                               <p>Nationality</p>
                                <SlArrowDown  className="mx-3" />
                               </div>
                               <div className="d-flex align-items-center textDrakGray">
                               <p>Residence Country</p>
                                <SlArrowDown  className="mx-3" />
                               </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="rowShadow rounded-5 py-4">
                            <div className="d-flex justify-content-between">
                            <h5 className="fw-bold">Preferred Job</h5>
                             </div>
                            <div className="w-75">
                            <div className="d-flex">
                                <div className="textDarkGray">
                                    <p>Job Title:</p>
                                </div>
                                <div className="textLightGray ms-4">
                                    <p>Add title of the job your are looking for</p>
                                </div>
                            </div>
                            <div>
                               <div className="d-flex align-items-center textDrakGray">
                               <p>Job Level</p>
                                <SlArrowDown  className="mx-3" />
                               </div>
                               <div className="d-flex align-items-center textDrakGray">
                               <p>Job Location</p>
                                <SlArrowDown  className="mx-3" />
                               </div>
                               <div className="d-flex align-items-center textDrakGray">
                               <p>Target Salary:</p>
                               <p className="textLightGray mx-4">Add Salary</p>
                               </div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

         
        </div>
    </>
}


