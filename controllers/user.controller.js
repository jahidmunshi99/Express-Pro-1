let users = require("../models/user.models");
const { v4: uuidv4 } = require('uuid');
const { param } = require("../routes/user.route");

const getSingleUser = (req, res) => {
    const userID = req.params.id;
    const user = users.filter( (item)=> item.id === userID );
    res.status(200).json(user);
};

const getAllUsers = (req, res) => {
    res.status(200).json(users);
};

const createUser = (req, res) => {
    const createUser = {
        "id" : uuidv4(),
        "username" : req.body.name,
        "phone" : req.body.phone
    }
    users.push(createUser);
    res.status(201).json(users);
};

const updateUser = (req, res) => {
    const userId = req.params.id;
    const { username, phone } = req.body;

    users.filter( (item)=> item.id === userId).map( (setuser) => {
        setuser.username = username,
        setuser.phone = phone
    })
    res.status(200).json(users);
};

const deleteUser = (req, res) => {
    const userID = req.params.id;
    const deleteUser = users.filter( (item)=> item.id !== userID )
    res.status(203).json(deleteUser);
};

module.exports = { 
    getSingleUser, 
    getAllUsers, 
    createUser, 
    updateUser, 
    deleteUser 
};
