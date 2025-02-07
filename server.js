const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New request received.\n`;

    // Append to log.txt and handle errors
    fs.appendFile('log.txt', log, (err) => { // Removed 'data' from callback
        if (err) {
            console.error("Error writing to log file:", err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("Internal Server Error");
        }

        res.end("Hello f servthis is my server! :)");
    });
});
myServer.listen(8000, () => console.log("Server is turned on!"));