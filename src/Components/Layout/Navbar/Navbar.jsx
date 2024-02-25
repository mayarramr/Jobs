import React from 'react'
import Style from './Navbar.module.css'
import { Link, useLocation } from 'react-router-dom'
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineInfo } from "react-icons/ai";
import { GoQuestion } from "react-icons/go";
import { TbLogout2 } from "react-icons/tb";
import profile from '../../../Assets/profile.png'
import { useMediaQuery } from 'react-responsive';


export default function Navbar() {
  const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
  const location = useLocation();
    return<>
    {
    ['/dashboard', '/candidates', '/posts', '/users' , '/unlocked-candidate' , '/candidate-manar'].includes(location.pathname) ? 
         <>
         <nav className="navbar navbar-expand-lg">
 <div className="container">
   <Link className={`${Style.titleFont} navbar-brand textMain fs-3`} to={'/'}>JOBS</Link>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
         <Link className="nav-link textMain active" aria-current="page" to={'/dashboard'}>Dashboard</Link>
       </li>

       <div className="btn-group me-auto">
        <Link className={`btn textMain ${isScreenSmall ? "ps-0" : ""}`} to={'/dashboard'} type="button">
        Posts
        </Link>
        <button type="button" className="btn textMain dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className={`rowShadow dropdown-menu rounded-4`}>
        <li className={`${Style.textShadow} dropdown-item`}>Manage Jobs</li>
        <li className={`${Style.textShadow} dropdown-item`}>Manage Internships</li>
        <li className={`${Style.textShadow} dropdown-item`}>Add New Job</li>
        <li className={`${Style.textShadow} dropdown-item`}>Add New Internship</li>
        <li className={`${Style.textShadow} dropdown-item`}>View All</li>
        </ul>
       </div>
        <div className="btn-group me-auto">
        <Link className={`btn textMain ${isScreenSmall ? "ps-0" : ""}`} to={'/candidates'} type="button">
        Candidates
        </Link>
        <button type="button" className="btn textMain dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className={`rowShadow dropdown-menu rounded-4`}>
        <Link to={'/unlocked-candidate'} className={`${Style.textShadow} dropdown-item`}>Unlocked Candidate</Link>
        <li className={`${Style.textShadow} dropdown-item`}>Most Potenial Candidates</li>
        </ul>
        </div>
       <li className="nav-item">
         <Link className="nav-link textMain" to={'/users'}>Users</Link>
       </li>
     </ul>
     <div className={`${isScreenSmall ? "w-100" : "w-50"}`}>
     <form>
           <div className={`position-relative ${isScreenSmall ? "" : "ms-5"}`}>
             <input className={`${Style.searchInput} ${isScreenSmall ? "ps-2" : "mx-2 ps-4"} py-2 rounded-5  w-100`} aria-label="Search" placeholder="Search Jobs, internships, companies" />
             <i className="fa-solid fa-magnifying-glass position-absolute mx-3 gray-text small-font end-0 textMain fs-5" style={{ top: "50%", transform: "translateY(-50%)" }}></i>
           </div>
         </form>
     </div>
  <div className="dropdown">
           <Link className="btn textMain dropdown-toggle fs-5 text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Manar (Elegant)
           </Link>
           <ul className={`rowShadow dropdown-menu rounded-5 px-3`}>
           
             <li className="d-flex align-items-center fs-5">
             <FaUserEdit className="" />
               <Link className={`${Style.textShadow} dropdown-item p-1`} href="#">Edit Profile</Link>
               </li>
             <li className="d-flex align-items-center fs-5">
             <GoQuestion className="fs-4" />
               <Link className={`${Style.textShadow} dropdown-item p-1`} href="#">Help</Link>
               </li>
             <li className="d-flex align-items-center fs-5">
             <AiOutlineInfo className="fs-4" />
               <Link className={`${Style.textShadow} dropdown-item p-1`} href="#">About us</Link>
               </li>
             <li className="d-flex align-items-center fs-5">
             <TbLogout2 className="fs-4" />
               <Link className={`${Style.textShadow} dropdown-item p-1`} href="#">Logout</Link>
               </li>
           
          </ul>
        </div>
   </div>
 </div>
         </nav>
     </> 
        :
        ['/explore', '/saved', '/application', '/submit-application', '/complete-application', '/cv' , '/jobs-in-egypt' , '/alqemam' , '/companies' , '/help'].includes(location.pathname) ? 
        <> 
        <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className={`${Style.titleFont} navbar-brand textMain fs-3`} to={'/'}>JOBS</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link textMain active" aria-current="page" to={'/explore'}>Explore</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link textMain active" aria-current="page" to={'/saved'}>Saved</Link>
                  </li>
                  

                  <li className="nav-item">
                    <Link className="nav-link textMain" to={'/application'}>Application</Link>
                  </li>
                </ul>
                <div className={`${isScreenSmall ? "w-100" : "w-50"}`}>
                <form>
                      <div className={`position-relative ${isScreenSmall ? "" : "ms-5"}`}>
                        <input className={`${Style.searchInput} ${isScreenSmall ? "ps-2" : "mx-2 ps-4"} py-2 rounded-5 w-100`} aria-label="Search" placeholder="Search Jobs, internships, companies" />
                        <i className="fa-solid fa-magnifying-glass position-absolute mx-3 gray-text small-font end-0 textMain fs-5" style={{ top: "50%", transform: "translateY(-50%)" }}></i>
                      </div>
                </form>
                </div>
            <div className={`dropdown d-flex ${isScreenSmall ? "justify-content-end" : "justify-content-center"}`}>
                      <Link className="w-50  btn textMain dropdown-toggle fs-5 text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={profile} className="w-25 rounded-pill" alt="profile" />
                      </Link>
                      <ul className={`rowShadow dropdown-menu rounded-5 px-3`}>
                      
                        <li className="d-flex align-items-center fs-5">
                        <FaUserEdit className="" />
                          <Link className={`${Style.textShadow} dropdown-item p-1`} href="#">Edit Profile</Link>
                          </li>
                        <li className="d-flex align-items-center fs-5">
                        <GoQuestion className="fs-4" />
                          <Link className={`${Style.textShadow} dropdown-item p-1`} href="#">Help</Link>
                          </li>
                        <li className="d-flex align-items-center fs-5">
                        <AiOutlineInfo className="fs-4" />
                          <Link className={`${Style.textShadow} dropdown-item p-1`} href="#">About us</Link>
                          </li>
                        <li className="d-flex align-items-center fs-5">
                        <TbLogout2 className="fs-4" />
                          <Link className={`${Style.textShadow} dropdown-item p-1`} href="#">Logout</Link>
                          </li>
                      
                    </ul>
                  </div>
              </div>
            </div>
        </nav>
         
      </> 
        :
        <>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className={`${Style.titleFont} navbar-brand textMain fs-3`} to={'/'}>JOBS</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link textMain" aria-current="page" to={'/cv'}>Create Your CV</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link textMain" to={'/cv'}>Find Job</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link textMain" to={'/cv'}>Post Job</Link>
                </li>
              </ul>
              <div className={`d-flex ${isScreenSmall ? "justify-content-evenly" : "w-25 justify-content-between"}`}>
                  <Link to={'/signin'} className="btn textMain">Sign In</Link>
                  <Link to={'/signup'} className="btn text-white bgMain rounded-5">Sign Up</Link>
                  <Link to={'/employee-sign-up'} className="btn bgMain rounded-5 text-white">Employer</Link>
            </div>
            </div>
          </div>
          </nav>
        </>
    }
</>

}