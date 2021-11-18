import React from 'react'
import Card from "../../components/Card"
import BookForm from "../../components/forms/book"
import { single_book } from '../../constants/mockupData'

export const ReadBook = () => {
    const Form = <BookForm data={single_book} readOnly />
    return (
        <Card
            title='Datos del cliente'
            content={Form}
        />
    )
}

export default ReadBook
