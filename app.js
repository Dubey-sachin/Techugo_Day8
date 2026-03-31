require('dotenv').config();
const express=require('express');
const connectDB=require('./db')
const app=express();

connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}` )
    
})







