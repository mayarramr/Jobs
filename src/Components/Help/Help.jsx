import React from 'react'
import Style from './Help.module.css'
import { SlArrowDown } from "react-icons/sl";
import { Helmet } from 'react-helmet';

export default function Help() {
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Help</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className="container">
        <div className="row justify-content-center text-center my-5 pt-5">
            <div className="col-md-5">
            <div className="mb-5">
            <h2 className="textMain">How Can We Help You ?</h2>
            <form>
              <div className="position-relative">
                <input className={`${Style.searchInput}  py-2 rounded-5 ps-4 w-100`} aria-label="Search" placeholder="Search" />
                <i className="fa-solid fa-magnifying-glass position-absolute mx-3 gray-text small-font end-0 textMain fs-4" style={{ top: "50%", transform: "translateY(-50%)" }}></i>
              </div>
            </form>
        </div>
            </div>
        </div>

        <div className="row">
            <div className=" rowShadow rounded-5 p-4">
                <div>
                <p className="textMain fw-bold fs-5">Popular Topics</p>
                </div>
               <div className="row">
                <div className="col-md-6">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item border-0">
                        <h2 className="accordion-header border-bottom-0 ">
                        <button className="accordion-button fw-bold py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <p>Why Can’t I send my CV directly to employers ?</p>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p style={{color : '#D9D9D9'}}>I believe that my ability to connect with people and my outgoing personality sets me apart from others. I am able to engage with people and make sure that they understand what I am saying. Additionally, I am always willing to answer any questions that people may have.</p>
                       </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-between mx-4">
                    <p className="fw-bold "> Why Can’t I send my CV directly to employers ?</p>
                    <SlArrowDown />
                </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-evenly">
                 <div className="d-flex align-items-center justify-content-between mx-4">
                    <p className="fw-bold"> Why Can’t I send my CV directly to employers ?</p>
                    <SlArrowDown />
                </div>

                <div className="d-flex align-items-center justify-content-between mx-4">
                    <p className="fw-bold"> Why Can’t I send my CV directly to employers ?</p>
                    <SlArrowDown />
                </div>
                </div>
               </div>
            </div>
        </div>
    </div>
    </>
}


