const express = require('express')
const router = express.Router()
const { addBook, getAllBooks, getBookById} = require('../controllers/controller.js')

router.post('/addbook',addBook)
router.get('/books',getAllBooks)
router.get('/books/:id', getBookById)


module.exports = router