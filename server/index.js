require("dotenv").config();
const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require("mongoose")
const adminRouter=require("./routes/adminRouter");
const userRouter=require("./routes/userRouter")
app.use(cors());
app.use(express.json())
 app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Db connceted")
})


app.use("/admin",adminRouter)
app.use("/user",userRouter)





app.listen(process.env.PORT,()=>{
    console.log("server run on 9000 port ")
})