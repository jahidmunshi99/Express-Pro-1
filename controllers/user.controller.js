const { v4: uuidv4 } = require('uuid');
const User = require("../models/user.model");

const getSingleUser = async(req, res) => {
    const allUsers = await User.find();
    const id = req.params.id;
    const user = allUsers.filter( (item)=> item.id === id );
    res.status(200).json(user)
    // const userID = req.params.id;
};

const getAllUsers = async (req, res) => {
    const users = await User.find()
    res.status(200).json(users);
};

const createUser = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.username,
            phone: Number(req.body.phone)
        })
        await newUser.save();
        res.status(201).json(newUser);

    } catch (error) {
        res.status(500).send(error.message);
        console.error(error)
    }

};

// const updateUser = (req, res) => {

//     res.status(200).json();
// };

// const deleteUser = (req, res) => {

//     res.status(203).json();
// };

module.exports = { 
    getSingleUser, 
    getAllUsers, 
    createUser, 
    // updateUser, 
    // deleteUser 
};
