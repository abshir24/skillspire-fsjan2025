const Book = require('../models/Book')

const addBook = (request,response) =>{
    const newBook = new Book(request.body)

    newBook.save()
        .then((book)=>{
            console.log("Book was saved successfully")
            response.json(book)
        })
        .catch((err)=> console.log(err))
}

const getAllBooks = async (request,response) =>{
    const allBooks = await Book.find()

    response.json(allBooks)
}

const getBookById = async (request,response) =>{
    Book.findById(request.params.id)
        .then((book)=>{
            response.json(book)
        })
        .catch((err) => console.log(err))
}

module.exports = {
    addBook,
    getAllBooks,
    getBookById
}