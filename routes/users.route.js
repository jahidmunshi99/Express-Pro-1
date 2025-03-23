const { getSingleUser, getAllUsers, postUser, patchUser, deleteUser } = require("../controllers/users.controller");

const route = require("express").Router();

route.get("/:id", getSingleUser)
route.get("/", getAllUsers)
route.post("/:id", postUser)
route.patch("/:id", patchUser)
route.delete("/:id", deleteUser)


module.exports =  route;