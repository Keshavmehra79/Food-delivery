import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Header from './component/Header'
import Cards from './component/Cards.'
import Slider from './component/Slider'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (<>
  <Navbar/>
  <Header/>
  <Slider/>
    <Cards/>
    <Footer/>
  </>
  )
}

export default Layout