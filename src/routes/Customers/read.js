import React from 'react'
import Card from "../../components/Card"
import CustomerForm from "../../components/forms/customer"
import { single_customer } from '../../constants/mockupData'

export const ReadCustomer = () => {
    const Form = <CustomerForm data={single_customer} readOnly />
    return (
        <Card
            title='Datos del cliente'
            content={Form}
        />
    )
}

export default ReadCustomer
