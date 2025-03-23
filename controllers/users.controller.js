const { v4: uuidv4 } = require("uuid");
let allUsers = require("../modules/users.module");

const getSingleUser = (req, res) => {
    const id = req.params.id;
    const user = allUsers.find((item) => item.id === id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
}


const getAllUsers = (req, res)=>{
    if( allUsers ){
        res.status(200).send( allUsers )
    }else{
        res.status(404).json({
            message : "request not found"
        })
    }
}

const postUser = (req, res)=>{
    const newUser = {
        id : uuidv4(),
        username: req.body.name,
        phone: req.body.phone,
    }

    allUsers.push(newUser);

    res.status(201).send(allUsers)
}

const patchUser = (req, res)=>{
    res.status(200).json({
        status : 200,
        message : "This s from get users api"
    })
}

const deleteUser = (req, res)=>{
    res.status(200).json({
        status : 200,
        message : "This s from get users api"
    })
}

module.exports = { getSingleUser, getAllUsers, postUser, patchUser, deleteUser } 