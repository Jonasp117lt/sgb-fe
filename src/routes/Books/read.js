import React from 'react'
import Card from "../../components/Card"
import BookForm from "../../components/forms/book"
import { single_book } from '../../constants/mockupData'
import { useMatch } from 'react-router-dom'

export const ReadBook = () => {
    const match = useMatch()
    console.log(match)
    const getBook = async () => {

    }
    const Form = <BookForm data={single_book} readOnly />
    return (
        <Card
            title='Datos del libro'
            content={Form}
        />
    )
}

export default ReadBook
