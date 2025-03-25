require("dotenv").config();
const { error } = require("console");
const app = require("./app");
const PORT = process.env.PORT || 3001;

app.get("/", ( req, res )=>{
    res.status(200).sendFile( __dirname + "/view/index.html");
})

app.use( ( req, res )=>{
    res.json({
        "status" : 404,
        "message" : "ivalid route"
    })
})

app.use((err, req, res, next )=>{
    res.json({
        "status": 501,
        "message" : "code is broken"
    })
    console.log(error)
})


app.listen( PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})