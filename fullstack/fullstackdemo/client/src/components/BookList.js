import React, { useEffect, useState } from 'react'
import { getBooks, addBook } from '../api/api'

function BookList(){
    const [books,setBooks] = useState(null)

    useEffect(()=>{
        const getAllBooks = async () =>{
          const response = await getBooks()
    
          console.log("Response from Express Server. Book List Component", response.data)

          setBooks(response.data)
        }
    
        getAllBooks()
    })

    const handleSubmit = async (e) =>{
        e.preventDefault()

        let title = e.target['title'].value
        let author = e.target['author'].value

        const response = await addBook({title: title, author: author})

        console.log("Response from DB", response.data)
    }

    if(books == null) return "No books"

    return <div>
        <h2>Add a new book:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='title' name="title" />
            <input type="text" placeholder='author' name="author" />

            <button type="submit">Add Book</button>
        </form>

        <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Author</th>
            </tr>

            {
                books.map(book=>(
                    <tr>
                        <td>{book._id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                    </tr>
                ))
            }
        </table>
    </div>
}

export default BookList