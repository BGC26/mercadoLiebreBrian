const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve (__dirname, "./public");

app.listen(3030, ()=>{
    console.log("La app esta funcionando en http://localhost:3030");
});

app.use (express.static(publicPath));

app.get("/", function (req, res) {
    res.send("Hola mundo!");
});

app.get("/home", function(req, res){
    res.sendFile (path.join(__dirname, "/views/index.html"));
});

app.get("/register", function(req, res) {
    res.sendFile (path.join(__dirname, "/views/register.html"));
});

app.get("/login", function(req, res) {
    res.sendFile (path.join(__dirname, "/views/login.html"));
});

app.get("*", function (req, res){
    res.send("NOT FOUND", 404);
});


