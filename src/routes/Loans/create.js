import React from 'react'
import Card from "../../components/Card"
import LoanForm from "../../components/forms/loan"

export const CreateLoan = (props) => {
    const Form = <LoanForm />
    return (
        <Card
            title='Nuevo préstamo'
            content={Form}
        />
    )
}

export default CreateLoan
