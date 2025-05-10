import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

export const getBooks = () => api.get('/books')
export const addBook = (book) => api.post('/addbook',book)
export const editBook = (book,id) => api.put(`/books/${id}`,book)
export const deleteBook = (id) => api.delete(`/books/${id}`)