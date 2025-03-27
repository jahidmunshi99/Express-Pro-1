const express = require("express");
const app = express();
const cors = require("cors");
require("./config/db");
const userRoute =  require("./routes/user.route");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



//Api Route
app.use("/api/user", userRoute );



//Home Route
app.get("/", (req, res)=>{
    res.status(200).sendFile( __dirname + "/views/index.html")
})

//Eror Route
app.use((req, res, next)=>{
    res.status(404).json({
        'status' : 404,
        'message' : '404 Request'
    })
})

//Server Eror Route
app.use((err, req, res, next)=>{
    console.log(err.message);
    res.status(500).json({
        'status' : 505,
        'message' : 'Server has broken'
    })
})

module.exports = app;