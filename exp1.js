const http = require("http");
const express = require("express");

const app=express(); // This app acts like a handler (req,response)
app.get("/",(req,res)=>{
    return res.send("Hello from home page");
})
app.get("/about",(req,res)=>{
    return res.send("Hello from About page");
})
const myServer = http.createServer(app);
myServer.listen(8000,()=>console.log("Started on port 8000"));