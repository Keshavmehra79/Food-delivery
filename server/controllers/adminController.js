const adminmodel=require("../models/adminmodel")

const adminLogin=async(req,res)=>{
   const { email, password }=req.body;
    const admin=await adminmodel.create({
        email:email,
        password:password
    })
    res.send({data:"working"})
}

module.exports={
    adminLogin
}