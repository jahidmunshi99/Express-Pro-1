const mongoose = require("mongoose");
const config = require("./config");
const dbUrl = config.db.url;

mongoose.connect(dbUrl)
.then(()=>{
    console.log('Database has been connected')
})
.catch((err)=>{
    console.log(err.message)
})