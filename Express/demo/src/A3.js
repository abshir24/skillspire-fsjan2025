const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())

let books = [
    {
        id:1,
        title:"The Cat in the Hat",
        author: "Dr. Suess"
    },
    {
        id:2,
        title:"The Lorax",
        author: "Dr. Suess"
    }
]

app.get("/books", (request,response)=>{
    response.send(books)
})

app.get("/books/:id", (request, response)=>{
   let id = request.params.id

   let book = books.find((book) => book.id == id)

   response.send(book)
})

app.post("/books",(request,response)=>{
    let book = request.body

    books.push(book)

    response.send(books)
})

app.put("/books/:id",(request,response)=>{
    let id = request.params.id

    let bookIndex = books.findIndex((book) => book.id == id)

    books[bookIndex] = request.body

    response.send(books)
})

app.delete("/books/:id", (request,response)=>{
    let id = request.params.id
    
    let bookIndex = books.findIndex((book) => book.id == id)

    books.splice(bookIndex,1)

    response.send(books)
})


const port = 8000

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})