const OrderModel = require("../models/orderModel");
const productModel=require("../models/productModel")
const nodemailer=require("nodemailer");
const userModels = require("../models/userModels");
const jwt =require("jsonwebtoken")

let mailTransporter =
    nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'mehrasachin7909@gmail.com',
                pass: 'quzg diut nzvc jkvh'
            }
        }
    );


const Orders=async(req,res)=>{
     try {
       //sendmail
       const {customer}=req.body;
       let mailDetails = {
    from: 'mehrasachin7909@gmail.com',
    to: customer.email,
     subject: 'Order Confirmation',
    html: `
<div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
  
  <div style="max-width:600px; margin:auto; background:white; padding:30px; border-radius:10px;">
    
    <h2 style="color:#16a34a; text-align:center;">
      Order Placed Successfully ✅
    </h2>

    <p>Hello <strong>${customer.name}</strong>,</p>

    <p>
      Thank you for your order. Your order has been placed successfully.
    </p>

    <hr />

    <p><strong>Name:</strong> ${customer.name}</p>
    <p><strong>Delivery Address:</strong> ${customer.address}</p>
    <p><strong>Mobile:</strong> ${customer.phone}</p>

    <p style="margin-top:25px; color:#666;">
      We will contact you soon regarding your delivery.
    </p>

  </div>
</div>
`
            
};

mailTransporter
    .sendMail(mailDetails,
        function (err, data) {
            if (err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });
        //SAVEDATA ON MONGODB
        // const order = await OrderModel.create(req.body);  

        res.status(201).json({
          message: "Order Saved",
          // order,
        });

        }

      
         
   catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
}

const orderProduct=async(req,res)=>{
  const {id}=req.query;
  const product=await productModel.findById(id)
  res.send(product)
}


const userlogin=async(req,res)=>{

    const {name, email, password}=req.body;
    const user=await userModels.findOne({email:email})
      
   if(!user){
    res.status(400).send("Invalid Info")
   }

    if(password!=user.password){
        res.status(400).send("Invalid password")
    }   

    const token=await jwt.sign({id:user._id},"keshav1234",{expiresIn:"30 days"});

    res.status(200).send({token:token})
}


const userAuth=async(req,res)=>{

  
  const userAuth = async (req, res) => {
  try {
    const token = req.header("mytoken");

    console.log(token);

    const verified = jwt.verify(token, "keshav1234");

    console.log(verified);

    const user = await userModel.findById(verified.id);

    console.log(user);

    res.status(200).send({ user });

  } catch (error) {
    console.log(error);

    res.status(500).send({ msg: "Authentication failed" });
  }
};
}

module.exports={
    Orders,
    orderProduct,
    userlogin,
    userAuth
}