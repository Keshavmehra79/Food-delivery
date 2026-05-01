const express=require("express");
const route=express.Router();
const adminController=require("../controllers/adminController")
route.post("/adminlogin",adminController.adminLogin);
route.post("/addproduct",adminController.addProduct);
route.get("/getproduct",adminController.getProduct)


module.exports=route;

