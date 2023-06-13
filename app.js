require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const product_routes = require('./roots/product');
const connectDB = require('./db/connect');
app.get("/",(req,res)=>{
    res.send("hi i am live");
});


// middleware
app.use("/api/products", product_routes)

const start = async() => {
    try{
    await connectDB(process.env.MONGODB_URL);
     app.listen(port,()=>{
        console.log(`${port} yes i am connected`);
     });
    } catch(err){
        console.log(err);
    }
};
start()