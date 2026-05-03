import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import AdminLogin from './admin/AdminLogin'
import AdminDashboard from './admin/AdminDashboard'
import Seeproducts from './admin/Seeproducts'
import DashboardHome from './admin/DashboardHome'
import AddProduct from './admin/AddProduct'
import Mycart from './component/Mycart'
function App() {
  return (<>
<BrowserRouter>
  <Routes>

    {/* User Layout */}
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
      <Route path='/cart' element={<Mycart />} />

    {/* Admin Login */}
    <Route path="/admin" element={<AdminLogin />} />

    {/* Admin Dashboard */}
    <Route path="/admindashboard" element={<AdminDashboard />}>
      <Route index element={<DashboardHome />} />
      <Route path="seeproducts" element={<Seeproducts />} />
       <Route path="addproduct" element={<AddProduct />} /> 
    </Route>

  </Routes>
</BrowserRouter>

  </>
  )
}

export default App