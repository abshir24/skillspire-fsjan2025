const express = require('express')
const router = express.Router()
const { addBook, getAllBooks, getBookById, updateBook, deleteBook } = require('../controllers/controller.js')

router.post('/addbook',addBook)
router.get('/books',getAllBooks)
router.get('/books/:id', getBookById)
router.put('/books/:id', updateBook)
router.delete('/books/:id', deleteBook)


module.exports = router