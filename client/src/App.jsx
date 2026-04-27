import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import AdminLogin from './admin/AdminLogin'
import AdminDashboard from './admin/AdminDashboard'
function App() {
  return (<>
  <BrowserRouter>
      <Routes path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Routes>

    <Routes >

    <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
    </Routes>
  </BrowserRouter>
  
  </>
  )
}

export default App