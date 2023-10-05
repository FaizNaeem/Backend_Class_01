const express = require("express")
var app = express()
app.get("/hi", (req ,res)=>{
    res.send("Server ready to Go hello")
})
app.listen(3000,()=>{
    console.log("server ready" + 3000);
})
