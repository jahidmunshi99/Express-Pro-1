const { getUser, getSingleUser, createUser, updateUser, deleteUser } = require("../controllers/users.controller");

const route = require("express").Router();

route.get("/", getUser );
route.get("/:id", getSingleUser );
route.post("/", createUser );
route.put("/:id", updateUser );
route.delete("/:id", deleteUser );

module.exports = route;