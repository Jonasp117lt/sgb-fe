import React, { useEffect, useState } from 'react'
import Card from "../../components/Card"
import Datatable from "../../components/Datatable"
import { customerHeaders } from '../../constants/tableHeaders'
import api from "../../services/api"
import swal from "../../utils/alerts"
import { LinearProgress } from '@mui/material'

const formatCustomerData = data => data.map(customer => ({
    ...customer,
    name: `${customer.person?.name} ${customer.person?.lastname}`,
    has_books: customer.has_books ? 'Si' : 'No',
}))

export const Customers = () => {
    const [customers, setCustomers] = useState([])
    const [loading, setLoading] = useState(false)
    const formattedData = formatCustomerData(customers)
    const options = { read: true, delete: true, update: true, loan: true }

    const CustomersTable = !loading ? <Datatable headers={customerHeaders} rows={formattedData} noBorder options={options} /> : <LinearProgress/>

    const getCustomers = async () => {
        const response = await api.getCustomers()
        if (response.success) {
            setCustomers(response.customers)
        } else {
            swal.requestError("Oops!", "Ha ocurrido un error intentando retornar los clientes, inténtalo de nuevo")
        }
    }

    useEffect(() => {
        setLoading(true)
        getCustomers()
        setLoading(false)
    }, [])

    return (
        <Card
            title='Clientes'
            content={CustomersTable}
            link="create"
            divider
        />
    )
}

export default Customers
export * from './create'
export * from './update'
export * from './read'