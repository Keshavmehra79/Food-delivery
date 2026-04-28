const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    foodname:String,
    price:Number,
    category:String,
    description:String,
    status:String,
    defaultImage:String,
    images:[String]
})

module.exports=mongoose.model('product',productSchema)