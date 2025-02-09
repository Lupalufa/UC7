const express = require("express")
const server = express()

const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

server.get("/", function(req,res) {
    return res.render("homepage.html")
})

server.listen(3000, function(){
    console.log("Iniciando o servidor!")
})