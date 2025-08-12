import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'

export default function Layout() {
  return (
    <>
    <nav>
          <Navbar/>
    </nav>

    <Outlet/>
    
    <footer>
        <Footer/> 
    </footer>
    </>
  )
}
