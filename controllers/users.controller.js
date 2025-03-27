let user = require("../models/users.model")
const { v4: uuidv4 } = require('uuid');

const getUser = async(req, res)=>{
    const result = await user.find();
    res.status(200).json(result)
}

const getSingleUser = (req, res)=>{
    res.status(200).json({
        'message' : 'This is from get user route',
    })
}

const createUser = async (req, res)=>{
    const newUser = new user({
        'id' : uuidv4(),
        'name' : req.body.name,
        'phone' : Number(req.body.phone),
    })
    await newUser.save();
    res.status(200).json(newUser)
}

const updateUser = (req, res)=>{
    const id = req.params.id;
    const { name, phone } = req.body;
    users.filter( (item)=> item.id === id ).map( (item)=> {
        item.name = name,
        item.phone = phone
    })
    res.status(201).json(users);
}

const deleteUser = async (req, res)=>{
    try {
        await users.deleteOne({id: req.params.id});
        res.status(200).json({
            'message' : "Sucessfully Deleted from Database"
        })
    } catch (error) {
        res.status(500).json({
            'message' : 'something is wrong'
        })
    }
}

module.exports = { getUser, getSingleUser, createUser, updateUser, deleteUser };