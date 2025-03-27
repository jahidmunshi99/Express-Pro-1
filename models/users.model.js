const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    id :{
        type : String,
        required : true
    },

    name :{
        type: String,
        required : true,
    },

    phone :{
        type : Number,
        required : true
    },

    createdDate : {
        type : Date,
        default : Date.now
    }

})

module.exports = mongoose.model("users", userSchema)