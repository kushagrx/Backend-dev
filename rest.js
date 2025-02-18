const express = require("express");
const users = require("./MOCK_DATA.json");
const app=express();
const PORT=5000;

//routes
app.get("/users",(req,res)=>{
    return res.json(users);
})
app.listen(5000,()=>console.log("Server started"));