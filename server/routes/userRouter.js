const express=require("express");
const route=express.Router();
const userController=require("../controllers/userController")
route.post("/sendemail",userController.Orders);
route.get("/orderproduct",userController.orderProduct);
route.post("/userlogin",userController.userlogin);
route.post("/userauth",userController.userAuth);

module.exports=route;