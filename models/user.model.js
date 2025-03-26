const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id:{
        type: String,
        required: true,
    },
    name :{
        type : String,
        required: true,
    },
    phone : {
        type : Number,
        required: true,
    },
    createdOn : {
        type : Date,
        default: Date.now,
    },
})

module.exports = mongoose.model( "User", userSchema )