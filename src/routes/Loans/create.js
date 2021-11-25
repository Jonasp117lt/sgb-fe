import React from 'react'
import Card from "../../components/Card"
import LoanForm from "../../components/forms/loan"
import { useParams } from 'react-router-dom'
export const CreateLoan = (props) => {
    const params = useParams()
    const Form = <LoanForm customerId={params?.customerId} />
    return (
        <Card
            title='Nuevo préstamo'
            content={Form}
        />
    )
}

export default CreateLoan
