const http = require("http");
const myServer = http.createServer((req,res) => {
    console.log("New Request");
    res.end("hello from server");
});