import React from 'react'
import Card from "../../components/Card"
import Datatable from "../../components/Datatable"
import { bookHeaders } from '../../constants/tableHeaders'
import { books } from '../../constants/mockupData'

const Books = () => {
    const BooksTable = <Datatable title='Inventario' headers={bookHeaders} rows={books} noBorder />
    return (
        <Card
            title='Libros'
            content={BooksTable}
        />
    )
}

export default Books