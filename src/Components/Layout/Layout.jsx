import React from 'react'
import Style from './Layout.module.css'
import Footer from './Footer/Footer.jsx'
import Navbar from './Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return <>
    <Navbar />
    <Outlet></Outlet>
    <Footer />
    </>
}


