import React from 'react'
import Card from "../../components/Card"
import CustomerForm from "../../components/forms/customer"
import { single_customer } from '../../constants/mockupData'

export const UpdateCustomer = () => {
    const Form = <CustomerForm data={single_customer} onSubmit={console.log}/>
    return (
        <Card
            title='Editar cliente'
            content={Form}
        />
    )
}

export default UpdateCustomer
