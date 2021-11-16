import React from 'react'
import Card from "../../components/Card"
import BookForm from '../../components/forms/book'

export const CreateBook = () => {

    const handleSubmit = (e) => {
        console.log(e)
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
