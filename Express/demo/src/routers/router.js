const express = require("express")
const router = express.Router()
const { getData, postData } = require("../controllers/controller.js")

router.get("/home", getData)

router.post("/postrequest", postData)


module.exports = router