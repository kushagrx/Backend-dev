//Basic app structure for express:

// const http = require("http");
const express = require("express");

const app=express(); // This app acts like a handler (req,response)
app.get("/",(req,res)=>{
    return res.send("Hello from home page");
})
app.get("/about",(req,res)=>{
    return res.send("Hello from About page");
})
app.listen(8000,()=>console.log("Server started! "));