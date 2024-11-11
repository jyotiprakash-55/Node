const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res) => {
    const log = `${Date.now()}: ${req.url} New req received\n`
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data) => {
        switch(myUrl.pathname){
            case "/":
                res.end("Hii jp homepage");
                break;
            case "/about":
                const qp = myUrl.query.name;
                res.end(`hi, ${qp}`);
            default:
                res.end("404 not found");
        }
    });

    
});

myServer.listen('8000',() => console.log("server started"));