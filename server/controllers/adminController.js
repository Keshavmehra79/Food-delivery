const adminmodel=require("../models/adminmodel")
const multer=require("multer");
const {CloudinaryStorage}=require('multer-storage-cloudinary')
const cloudinary=require("../cloudinary")
const productModel = require("../models/productModel");

const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'product-image',
        public_id:(req,file)=>Date.now()+'-'+file.originalname,
    },

});



const Upload=multer({storage:storage}).array('images',10);
const addProduct=async(req,res)=>{
    Upload(req,res,async (err)=>{
         if(err){
        console.log("Multer Error:", err);
        return res.status(500).send(err);
    }
        try{
              const {name,price,category,description,status}=req.body;
              const imageUrls= req.files.map(file=>file.path);

              const product=await productModel.create({
                    foodname:name,
                    price:price,
                    category:category,
                    description:description,
                    status:status,
                    defaultImage:imageUrls[0],
                    images:imageUrls
            })

            res.status(200).send('Data saved succefully')
        } catch(error){
            res.status(500).send("Error saving data: "+error.message)
        }
    })



}


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
    adminLogin,
    addProduct
}