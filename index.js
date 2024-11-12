const express = require("express");
const app = express();
const users = require('./MOCK_DATA.json');

app.get('/api/users', (req,res) => {
    return res.json(users);
})

app.get('/users', (req, res) => {
    const html = `<ul>${users.map(user => `<li>${user.first_name}</li>`).join('')}</ul>`;
    res.send(html);
});

//dynamic path parameters :
app.get('/api/users/:id',(req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})


app.listen(8000, () => console.log("server started"));



// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const express = require("express");

// const app = express();

// app.get("/",(req,res) => {
//     return res.send("Hello from homepage");
// });

// app.get("/about",(req,res) => {
//     return res.send(`Hello ${req.query.name} and your age is ${req.query.age}`);
// });

// app.listen(8000,() => console.log("server started"));

// const myServer =  http.createServer(app);

// const myServer = http.createServer((req,res) => {
//     const log = `${Date.now()}: ${req.url} New req received\n`
//     const myUrl = url.parse(req.url,true);
//     console.log(myUrl);
//     fs.appendFile("log.txt",log,(err,data) => {
//         switch(myUrl.pathname){
//             case "/":
//                 res.end("Hii jp homepage");
//                 break;
//             case "/about":
//                 const qp = myUrl.query.name;
//                 res.end(`hi, ${qp}`);
//             default:
//                 res.end("404 not found");
//         }
//     });

    
// });

// myServer.listen('8000',() => console.log("server started"));