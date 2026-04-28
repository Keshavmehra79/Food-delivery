const adminmodel=require("../models/adminmodel")

const adminLogin=async(req,res)=>{
   const { email, password }=req.body;
   const admin=await adminmodel.findOne({email:email})
   console.log(admin);
   
   if(!admin){
    res.status(404).send("Invalid email")
   }

   if(admin.password!=password){
    res.status(404).send("Invalid password")

   }
    res.send({admin})
}

module.exports={
    adminLogin
}