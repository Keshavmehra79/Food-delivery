import React, { useEffect } from 'react'
import Layout from '../Layout'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Home() {
    const nav=useNavigate();
  const userAuth=async()=>{
    try {
      const token=await localStorage.getItem("token");
    if(token){
         let api="http://localhost:9000/user/userauth"; 
      const res=await axios.post(api,null,{headers:{"mytoken":token}})
      localStorage.setItem("name",res.data.user.name);
      localStorage.setItem("email",res.data.user.email);
    }
    else{
      nav("/userlogin")
    }
      
    } catch (error) {
        console.log(error)
        nav("/userlogin")
    }
    
  }

  useEffect(()=>{
    userAuth()
  },[])
  return (<>



  </>
  )
}

export default Home