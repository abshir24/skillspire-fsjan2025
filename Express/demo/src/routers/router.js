const express = require("express")
const router = express.Router()
const { addUser, getAllUsers} = require("../controllers/controller.js")

router.post('/adduser', addUser)
router.get('/users', getAllUsers)


module.exports = router