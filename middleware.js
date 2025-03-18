const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse URL-encoded request body
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("Hello from middleware1");
    next();
});

app.use((req, res, next) => {
    console.log("Hello from middleware2");
    res.end("hey");
});

app.get('/', (req, res) => {
    res.send("Hello from the root route!");
});

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));