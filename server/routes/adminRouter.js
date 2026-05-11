const express=require("express");
const razorpay =require("../razorpay.js")
const route=express.Router();
const adminController=require("../controllers/adminController")
route.post("/adminlogin",adminController.adminLogin);
route.post("/addproduct",adminController.addProduct);
route.get("/getproduct",adminController.getProduct)
route.get("/delete",adminController.delProduct)
route.get("/orders",adminController.getOrders)
route.post("/update",adminController.myUpdate)

route.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount*100, // paisa
      currency: "INR",
      receipt: "receipt_order_1",
    };

    const order = await razorpay.orders.create(options);

    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
});


module.exports=route;

