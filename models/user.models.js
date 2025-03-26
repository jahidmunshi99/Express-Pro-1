const { v4: uuidv4 } = require('uuid');

const users = [
    {
        "id" : uuidv4(),
        "username" : "Jahid Munshi",
        "phone" : "01717407216",
    },
    {
        "id" : uuidv4(),
        "username" : "Abrar Faiaz",
        "phone" : "01786295428",
    },
]

module.exports = users;