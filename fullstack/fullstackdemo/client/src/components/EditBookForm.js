import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editBook } from '../api/api'

function EditBookForm(){
    const navigate = useNavigate()
    const params = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault()

        let title = e.target['title'].value
        let author = e.target['author'].value

        await editBook({title:title,author:author}, params.id)

        navigate('/')
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Edit this book:</h1>
                <input type="text" placeholder='title' name="title" />
                <input type="text" placeholder='author' name="author" />

                <button type="submit">Edit Book</button>
            </form>
        </div>
    )
}

export default EditBookForm