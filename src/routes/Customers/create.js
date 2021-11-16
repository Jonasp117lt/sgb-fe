import React from 'react'
import Card from "../../components/Card"
import CustomerForm from "../../components/forms/customer"

export const CreateCustomer = (props) => {
    const Form = <CustomerForm />
    return (
        <Card
            title='Nuevo cliente'
            content={Form}
        />
    )
}

export default CreateCustomer
