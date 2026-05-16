import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
function Users() {
      const [users,setUsers]=useState([]);
        
          const loaddata=async()=>{
            try {
              const response=await axios.get("http://localhost:9000/admin/users")
        
              setUsers(response.data.users);      
              
            } catch (error) {
                console.log(error);
            }
          }
          
        
          useEffect(()=>{
            loaddata();
            
        },[])
  return (<>

   <div className="min-h-screen bg-gray-100 p-6">

        <h1 className="text-3xl font-bold text-center mb-8">
          All Users
        </h1>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

          <table className="w-full">

            <thead className="bg-gray-800 text-white">

              <tr>
                <th className="p-4 text-left">#</th>
                <th className="p-4 text-left">User ID</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
              </tr>

            </thead>

            <tbody>

              {
                users.map((item,index)=>{

                  return(
                    <tr
                      key={item._id}
                      className="border-b hover:bg-gray-100 transition"
                    >

                      <td className="p-4 font-semibold">
                        {index + 1}
                      </td>

                      <td className="p-4 text-sm text-gray-600">
                        {item._id}
                      </td>

                      <td className="p-4 font-medium">
                        {item.name}
                      </td>

                      <td className="p-4 text-blue-600">
                        {item.email}
                      </td>

                     

                    </tr>
                  )

                })
              }

            </tbody>

          </table>

        </div>

      </div>

  
  </>
  )
}

export default Users