const express = require("express");
const app = express();
const userRoute = require("./routes/users.route");

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/api-user", userRoute);

app.get("/", (req, res)=>{
    res.sendFile( __dirname + "/./views/index.html")
})

// Error Route
app.use((req, res)=>{
    res.status(404).json({
        stutas : 404,
        message: "Routes not found"
    })
})


module.exports = app;