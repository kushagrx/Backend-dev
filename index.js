const http = require("http");   // HTTP package for server
const fs = require("fs");
// Create the server
const myServer = http.createServer((req, res) => {
    console.log("New request!");
    const log=`New req at -> ${req.url}\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url) {
            case '/': 
                res.end("Welcome to home page");
                break;
            case '/about': 
                res.end("Hey I am Kushagra");
                break;
            default: 
                res.end("404 Not Found");
        }
    });
});

// Listen on port 8000
myServer.listen(8000, () => console.log("Server started successfully on port 8000"));