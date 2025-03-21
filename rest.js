const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const fs=require("fs");

app.use(express.urlencoded({extended:false})); //added a plugin to handle form data for post req

//connection for mongo
mongoose.connect('mongodb://127.0.0.1:27017/my-first-db')
        .then(()=>console.log("MongoDB successfully connected"))
        .catch((err)=>console.log("Mongo error",err));

//schema for mongodb
const userSchema=new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    jobTitle:{
        type: String,
    },
    gender:{
        type: String,
    }
})

const User = mongoose.model("user",userSchema);


// REST API routes
app.get("/users", (req, res) => {
    return res.json(users);
});

app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
});

app.post("/users/:id",(req,res)=>{
    const body=req.body;
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",id:users.length});
    });
});

app.patch("/users/:id",(req,res)=>{
    //to do: update new user
    const body=req.body;
    return res.json({status:"pending"});
})

app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);  // Get the id from the URL and convert it to a number
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ status: "error", message: "User not found" });
    }

    // Remove the user at the found index
    users.splice(userIndex, 1);

    // Save the updated data
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "Failed to write data" });
        }
        return res.json({ status: "success", id });
    });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));