const OrderModel = require("../models/orderModel");

const Orders=async(req,res)=>{
     try {
    const order = await OrderModel.create(req.body);
        console.log(order);
        
    res.status(201).json({
      message: "Order Saved",
      order,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
}

module.exports={
    Orders
}