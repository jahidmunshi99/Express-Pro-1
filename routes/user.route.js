const router = require("express").Router();
const { getSingleUser, getAllUsers, createUser, updateUser, deleteUser } = require("../controllers/user.controller");

// Routes
router.get("/", getAllUsers); // Get all users
router.get("/:id", getSingleUser); // Get a single user by ID
router.post("/", createUser); // Create a new user
router.put("/:id", updateUser); // Update a user
router.delete("/:id", deleteUser); // Delete a user

module.exports = router;
