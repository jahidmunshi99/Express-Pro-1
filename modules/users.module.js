const { v4: uuidv4 } = require("uuid");

const allUsers = [
    {
        "id" : uuidv4(),
        "username" : "Jahid",
        "phone" : '01717407215'
    },
    {
        "id" : uuidv4(),
        "username" : "Faiaz",
        "phone" : '0171241335'
    },
    {
        "id" : uuidv4(),
        "username" : "Fabiha",
        "phone" : '01786295428'
    },
]

module.exports = allUsers;