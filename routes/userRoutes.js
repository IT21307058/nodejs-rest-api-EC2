const express = require("express");
const { createNewUser, getAllUsers } = require("../controllers/userController");

const router = express.Router();

// create a userfff
router.post("/", createNewUser);
// get all users
router.get("/", getAllUsers);

module.exports = router;
