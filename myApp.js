let express = require('express');
let app = express();

const bodyPraser= require("body-parser");
const { bodyParserMountPosition } = require('fcc-express-bground/globals');
app.use(bodyPraser.urlencoded({extended:false}))
app.use(bodyPraser.json());

//console.log("hello world");

// require('dotenv').config();
// app.get("/json",function (req,res) {
//     if (process.env.MESSAGE_STYLE=="uppercase") {
//         res.json({message: "hello json".toUpperCase()})
//       } 
//     else {
//         res.json({message: "Hello json"})
//       }
// });

// const absolutePath = __dirname + '/views/index.html';
// app.get("/",function (req,res) {
//     res.sendFile(absolutePath);
// });

// const abspath = __dirname + '/public';
// app.use("/public",express.static(abspath));

// app.use(function(req,res,next){
//     console.log(req.method+" "+req.path+" - "+req.ip);
//     next();
// });
// app.get("/use",function(req,res){
//     res.send("You are using node backend");
// });

// app.get("/now",function(req,res,next){
//     req.time=new Date().toString();
//     next();
// },function(req,res){
//     res.json({time:req.time})
// });

// app.get("/:word/echo", (req, res) => {
//     const { word } = req.params;
//     res.json({echo: word});
// });

// app.get("/name",function(req,res){
//     const fname=req.query.first;
//     const lname=req.query.last;
//     res.json({name: `${fname} ${lname}`});
// });

app.post("/name",function(req,res){
    var name = req.body.first+" "+req.body.last;
    res.json({name: name});
});

module.exports = app;

