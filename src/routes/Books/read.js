import React, { useEffect, useState } from 'react'
import Card from "../../components/Card"
import BookForm from "../../components/forms/book"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { LinearProgress } from '@mui/material'
import api from "../../services/api"
import swal from "../../utils/alerts"

export const ReadBook = () => {
    const params = useParams()
    const navigate = useNavigate()

    const [book, setBook] = useState()

    const getBook = async () => {
        const response = await api.getBook(params.bookId)
        if (response.success) {
            setBook(response.book)
        }
        else {
            swal.requestError("Oops!", "Ha ocurrido un error intentando retornar el libro, inténtalo de nuevo")
                .then(() => navigate("/books"))
        }
    }

    useEffect(() => {
        getBook()
    }, [])

    const Form = book ? <BookForm data={book} readOnly /> : <LinearProgress />
    return (
        <Card
            title='Datos del libro'
            content={Form}
        />
    )
}

export default ReadBook
