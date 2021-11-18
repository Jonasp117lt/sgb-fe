import React from 'react'
import Card from "../../components/Card"
import BookForm from "../../components/forms/book"
import { single_book } from '../../constants/mockupData'

export const UpdateBook = () => {
    const handleSubmit = (data) => {
        console.log(data)
    }
    const Form = <BookForm data={single_book} onSubmit={handleSubmit} />
    return (
        <Card
            title='Editar Libro'
            content={Form}
        />
    )
}

export default UpdateBook