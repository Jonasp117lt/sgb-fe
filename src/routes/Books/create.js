import React from 'react'
import Card from "../../components/Card"
import BookForm from '../../components/forms/book'
import api from "../../services/api"
import swal from "../../utils/alerts"
import { useNavigate } from 'react-router'

export const CreateBook = () => {
    const navigate = useNavigate()

    const handleSubmit = async (book) => {
        const response = await api.createBook(book)
        if (response.success) {
            swal.requestSuccess("Libro Registrado!", "El libro se ha registrado correctamente")
            .then(()=>{
                navigate("/books")
            })
        } else{
            swal.requestError("Oops!", "Ha ocurrido un problema intentando registrar el libro, intentalo nuevamente")
        }
    }

    const Form = <BookForm onSubmit={handleSubmit} />
    return (
        <Card
            title='Registrar Libro'
            content={Form}
        />
    )
}

export default CreateBook
