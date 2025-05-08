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
    console.log("REQUEST FROM REACT")
    const allBooks = await Book.find() //[<Book>,<Book>,<Book>]

    response.json(allBooks)
}

const getBookById = async (request,response) =>{
    Book.findById(request.params.id)
        .then((book)=>{
            response.json(book)
        })
        .catch((err) => console.log(err))
}


const updateBook = async (request,response) =>{
    let id = request.params.id

    Book.findByIdAndUpdate(id, request.body, { new:true })
        .then((book) => response.send(book))
        .catch((err) => console.log(err))
}

const deleteBook = async (request,response) =>{
    let id = request.params.id

    Book.findByIdAndDelete(id)
        .then((book) =>{
            console.log("Book was deleted successfully")
            response.json(book)
        })
        .catch((err) => console.log(err))
}

module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}