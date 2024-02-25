import React from 'react'
import Style from './OurCompanies.module.css'
import company1 from '../../Assets/company1.jpg'
import company2 from '../../Assets/company2.png'
import company3 from '../../Assets/company3.png'
import company4 from '../../Assets/company4.png'
import company5 from '../../Assets/company5.jpg'
import company6 from '../../Assets/company6.png'
import { useMediaQuery } from 'react-responsive'

export default function OurCompanies() {
    const isScreenSmall = useMediaQuery({ minWidth:0 , maxWidth:576 })
    return <>
    <div className="text-center">
    <h2 className="textMain mb-5">Our Companies</h2>
    </div>
    <div className="bgMain mb-5">
    <div className="container py-5 ">
        <div className="row">
            <div className={`col-md-2 ${isScreenSmall ? "d-flex justify-content-center" : ""}`}>
                <img src={company1} className="w-75 rounded-pill" alt="QTech" />
            </div>
            <div className={`col-md-2 ${isScreenSmall ? "d-flex justify-content-center" : ""}`}>
                <img src={company2} className="w-75" alt="algoriza" />
            </div>
            <div className={`col-md-2 ${isScreenSmall ? "d-flex justify-content-center" : ""}`}>
                <img src={company3} className="w-75" alt="awamer elshabaka" />
            </div>
            <div className={`col-md-2 ${isScreenSmall ? "d-flex justify-content-center" : ""}`}>
                <img src={company4} className="w-75" alt="" />
            </div>
            <div className={`col-md-2 ${isScreenSmall ? "d-flex justify-content-center" : ""}`}>
                <img src={company5} className="w-75" alt="al alamia" />
            </div>
            <div className={`col-md-2 ${isScreenSmall ? "d-flex justify-content-center" : ""}`}>
                <img src={company6} className="w-75" alt="roqay" />
            </div>
        </div>
    </div>
    </div>
    </>
}


