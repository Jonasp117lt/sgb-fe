import React, { useEffect, useState } from 'react'
import Card from "../../components/Card"
import BookForm from "../../components/forms/book"
import { LinearProgress } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import api from "../../services/api"
import swal from "../../utils/alerts"

export const UpdateBook = () => {
    const params = useParams()
    const navigate = useNavigate()

    const [book, setBook] = useState()

    const handleSubmit = async (book) => {
        const response = await api.updateBook(book)
        if (response.success) {
            swal.requestSuccess("Libro Actualizado!", "El libro se ha actualizado correctamente")
                .then(() => navigate("/books"))
        } else {
            swal.requestError("Oops!", "Ha ocurrido un problema intentando actualizar el libro, intentalo nuevamente")
        }
    }

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

    const Form = book ? <BookForm data={book} onSubmit={handleSubmit} /> : <LinearProgress />
    return (
        <Card
            title='Editar Libro'
            content={Form}
        />
    )
}

export default UpdateBook