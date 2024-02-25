import React from 'react'
import Style from './JobsByCountry.module.css'
import egy from '../../Assets/egypt.jpg'
import sa from '../../Assets/sa.jpg'
import qatar from '../../Assets/qatar.jpg'
import kuwait from '../../Assets/kuwait.jpg'
import oman from '../../Assets/oman.jpg'
import bahrain from '../../Assets/bahrain.jpg'
import { Link } from 'react-router-dom'
export default function JobsByCountry() {
    return <>
   <div className="text-center textMain mt-5 pb-5">
   <h2>Find Jobs by Country</h2>
   </div>
    <div className="container">
   
    <div className="row justify-content-around">
         
          <Link to={'/jobs-in-egypt'} className="col-md-3 py-3 text-black" style={{height: '180px'}}>
  <div className="position-relative h-100">
    <img src={egy} className="w-100 h-100 rounded-5" alt="" />
    <div className="position-absolute top-0 start-0 end-0 bottom-0 rounded-5" style={{backgroundColor:'#ffffff90'}}>
      <div className="position-absolute top-50 start-50 translate-middle text-center ">
        <p className="fw-bolder fs-5 m-0">Egypt</p>
        <p>1000 jobs</p>
      </div>
      </div>
      </div>
      </Link>
          <div className="col-md-3 py-3" style={{height: '180px'}}>
  <div className="position-relative h-100">
    <img src={sa} className="w-100 h-100 rounded-5" alt="" />
    <div className="position-absolute top-0 start-0 end-0 bottom-0 rounded-5" style={{backgroundColor:'#ffffff90'}}>
      <div className="position-absolute top-50 start-50 translate-middle text-center ">
        <p className="fw-bolder fs-5 m-0">Saudi Arabia</p>
        <p>1000 jobs</p>
      </div>
      </div>
      </div>
      </div>
          <div className="col-md-3 py-3" style={{height: '180px'}}>
  <div className="position-relative h-100">
    <img src={qatar} className="w-100 h-100 rounded-5" alt="" />
    <div className="position-absolute top-0 start-0 end-0 bottom-0 rounded-5" style={{backgroundColor:'#ffffff90'}}>
      <div className="position-absolute top-50 start-50 translate-middle text-center ">
        <p className="fw-bolder fs-5 m-0">Qatar</p>
        <p>1000 jobs</p>
      </div>
      </div>
      </div>
      </div>

   
       
         
        </div>
    <div className="row justify-content-around">
         
          <div className="col-md-3 py-3" style={{height: '180px'}}>
  <div className="position-relative h-100">
    <img src={kuwait} className="w-100 h-100 rounded-5" alt="" />
    <div className="position-absolute top-0 start-0 end-0 bottom-0 rounded-5" style={{backgroundColor:'#ffffff90'}}>
      <div className="position-absolute top-50 start-50 translate-middle text-center ">
        <p className="fw-bolder fs-5 m-0">Kuwait</p>
        <p>1000 jobs</p>
      </div>
      </div>
      </div>
      </div>
          <div className="col-md-3 py-3" style={{height: '180px'}}>
  <div className="position-relative h-100">
    <img src={oman} className="w-100 h-100 rounded-5" alt="" />
    <div className="position-absolute top-0 start-0 end-0 bottom-0 rounded-5" style={{backgroundColor:'#ffffff90'}}>
      <div className="position-absolute top-50 start-50 translate-middle text-center ">
        <p className="fw-bolder fs-5 m-0">Oman</p>
        <p>1000 jobs</p>
      </div>
      </div>
      </div>
      </div>
          <div className="col-md-3 py-3" style={{height: '180px'}}>
  <div className="position-relative h-100">
    <img src={bahrain} className="w-100 h-100 rounded-5" alt="" />
    <div className="position-absolute top-0 start-0 end-0 bottom-0 rounded-5" style={{backgroundColor:'#ffffff90'}}>
      <div className="position-absolute top-50 start-50 translate-middle text-center ">
        <p className="fw-bolder fs-5 m-0">Bahrain</p>
        <p>1000 jobs</p>
      </div>
      </div>
      </div>
      </div>

   
       
         
        </div>
    </div>
    </> 
}


