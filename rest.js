const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 5000;
const fs=require("fs");

app.use(express.urlencoded({extended:false})); //added a plugin to handle form data for post req

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
    return res.json({status:"pending"});
})
app.delete("/users/:id",(req,res)=>{
    //to do: delete user
    return res.json({status:"pending"});
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));