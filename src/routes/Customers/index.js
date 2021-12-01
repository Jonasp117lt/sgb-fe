import React from 'react'
import Card from "../../components/Card"
import Datatable from "../../components/Datatable"
import { customerHeaders } from '../../constants/tableHeaders'
import { customers } from '../../constants/mockupData'

const formatCustomerData = data => data.map(customer => ({
    ...customer,
    name: `${customer.person?.name} ${customer.person?.lastname}`,
    has_books: customer.has_books ? 'Si' : 'No',
}))

export const Customers = () => {
    const formattedData = formatCustomerData(customers)
    const options = { read: true, delete: true, update: true, loan: true }
    const CustomersTable = <Datatable headers={customerHeaders} rows={formattedData} noBorder options={options} />
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