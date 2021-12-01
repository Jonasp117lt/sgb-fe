import React, { useEffect } from 'react'
import Card from "../../components/Card"
import Datatable from "../../components/Datatable"
import { bookHeaders } from '../../constants/tableHeaders'
import api from "../../services/api"
import swal from "../../utils/alerts"
import { LinearProgress } from '@mui/material'

export const Books = () => {
    const [books, setBooks] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const getBooks = async () => {
        const response = await api.getBooks()
        if (response.success) {
            setBooks(response.books)
        } else {
            swal.requestError("Oops!", "Ha ocurrido un error intentando retornar los libros, inténtalo de nuevo")
        }
    }

    useEffect(() => {
        setLoading(true)
        getBooks()
        setLoading(false)
    }, [])

    // const BooksTable = !loading ? <Datatable headers={bookHeaders} rows={books} noBorder /> : <LinearProgress />
    const BooksTable = !loading ? <Datatable headers={bookHeaders} rows={books} noBorder /> : <LinearProgress />
    return (
        <Card
            title='Libros'
            content={BooksTable}
            link='create'
            divider
        />
    )
}

export default Books
export * from './create'
export * from './update'
export * from './read'