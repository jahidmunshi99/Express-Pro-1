const router = require("express").Router();
const { getSingleUser, getAllUsers, createUser } = require("../controllers/user.controller");

// Routes

router.get("/:id", getSingleUser); // Get all users
router.get("/", getAllUsers); // Get all users
router.post("/", createUser); // Create a new user


module.exports = router;
