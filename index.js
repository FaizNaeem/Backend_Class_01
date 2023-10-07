const express = require("express")
var app = express()
const user = require("./user");
const morgan = require("morgan");


const middelever=(req ,res , next)=>{
console.log("Middlewere console");
next()
}
app.use(middelever)
app.get("/hi", (req ,res)=>{
    res.send("Server ready to Go hello")

})
app.use('/user', user)
app.use(morgan("tiny"))
// get user id using params 
// app.get('/user/:id', (req, res) => {
//     console.log('console.log-->', req.params.id)
//     console.log('console.log-->', req.query)
//     res.send({ 
//         status: 200,
//         msg: "User id is " + req.params.id
//     })
// })
app.get("/about", (req ,res)=>{
    res.send({
        status :200,
        massage :"About working"
    })
    

})











app.listen(3000,()=>{
    console.log("server ready" + 3000);
})
// some step use node js 
// / asynchronous / non-blocking 
// synchronous  / blocking 
// Request Fucntion / Get / Put / Patch / Post / Delete
//command 
// step 01 --> : npm init
// step 02 --> : npm i express
// step 03 -->: npm i nodemon -g
// step 04 -->: Run Terminal / node index.js
// step 05 -->: Run Terminal / nodemon index.js
// step 06 --> : Install Thunder Client Extention And Go to Thander Client and click new Request and paste url 