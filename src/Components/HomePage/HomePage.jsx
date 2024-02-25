import React from 'react'
import Style from './HomePage.module.css'
import OurCompanies from '../OurCompanies/OurCompanies'
import ActiveRecruitment from '../ActiveRecruitment/ActiveRecruitment'
import JobsByCountry from '../JobsByCountry/JobsByCountry'
import UseMediaQuery, { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet'
export default function HomePage() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  <div className="d-flex flex-column">
  <div className={`${Style.customheight} d-flex align-items-center`}>
   <div className="container ">
        <div className="d-flex justify-content-center mb-5 text-center">
            <h2 className={"textMain"}>Do what you love to love what you do.</h2>
           
        </div>

        <div className="row justify-content-center">

           <div className="col-md-6">
           <form>
              <div className="position-relative">
                <input className={`${Style.searchInput} mx-2 py-2 rounded-5 ps-4 w-100`} aria-label="Search" placeholder="Search Jobs, internships, companies" />
                <i className="fa-solid fa-magnifying-glass position-absolute mx-3 gray-text small-font end-0 textMain fs-4" style={{ top: "50%", transform: "translateY(-50%)" }}></i>
              </div>
            </form>
            <div className="d-flex justify-content-start py-3">
                <button className="btn textMain">Popular Search</button>
                <button className="btn text-white bgMain rounded-5 px-3 mx-3">UI UX</button>
                <button className="btn text-white bgMain rounded-5 px-3">HR</button>
            </div>
           </div>
           <div className="col-md-2">
           <form>
              <div className="position-relative">
                <input className={`${Style.searchInput} mx-2 py-2 rounded-5 ps-4 w-100`} aria-label="Search" placeholder="Location" />
                <i className="fa-solid fa-location-dot position-absolute mx-3 fs-4 gray-text small-font end-0 textMain" style={{ top: "50%", transform: "translateY(-50%)" }}></i>
              </div>
            </form>
           </div>
           <div className={`col-md-1 ${isScreenSmall ? "d-flex justify-content-center my-3" : ""}`}>
            <button className="btn text-white bgMain rounded-5 px-4" style={{height:'55px'}}>Search</button>
           </div>
          
            </div>
           
    </div>
   </div>

   <OurCompanies />
    
   <ActiveRecruitment />
 
   <JobsByCountry />
  </div>
    </>
}


