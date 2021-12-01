import React, { useEffect, useState } from 'react'
import Card from "../../components/Card"
import LoanForm from '../../components/forms/loan'
import api from "../../services/api"
import swal from "../../utils/alerts"
import { useNavigate, useParams } from 'react-router'

export const CreateLoan = () => {
    const navigate = useNavigate()
    const params = useParams()

    const handleSubmit = async (loan) => {
        const response = await api.createLoan(loan, params?.customerId)
        if (response.success) {
            swal.requestSuccess("Préstamo Registrado!", "El préstamo se ha registrado correctamente")
                .then(() => navigate("/loans"))
        } else {
            swal.requestError("Oops!", "Ha ocurrido un problema intentando registrar el préstamo, intentalo nuevamente")
        }
    }

    const Form = <LoanForm onSubmit={handleSubmit} />
    return (
        <Card
            title='Registrar Préstamo'
            content={Form}
        />
    )
}

export default CreateLoan
