const http = require("http");   // HTTP package for server

// Create the server
const myServer = http.createServer((req, res) => {
    console.log("New request!");

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

// Listen on port 8000
myServer.listen(8000, () => console.log("Server started successfully on port 8000"));