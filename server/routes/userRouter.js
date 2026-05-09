const express=require("express");
const route=express.Router();
const userController=require("../controllers/userController")
route.post("/sendemail",userController.Orders);

module.exports=route;