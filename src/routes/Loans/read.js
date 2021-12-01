import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { LinearProgress } from '@mui/material'
import { useParams } from 'react-router-dom'
import Card from "../../components/Card"
import LoanForm from "../../components/forms/loan"
import api from "../../services/api"
import swal from "../../utils/alerts"

export const ReadLoan = () => {
    const params = useParams()
    const navigate = useNavigate()

    const [loan, setLoan] = useState()

    const getLoan = async () => {
        const response = await api.getLoan(params.loanId)
        if (response.success) {
            setLoan(response.loan)
        }
        else {
            swal.requestError("Oops!", "Ha ocurrido un error intentando retornar el préstamo, inténtalo de nuevo")
                .then(() => navigate("/loans"))
        }
    }

    useEffect(() => {
        getLoan()
    }, [])
    const Form = loan ? <LoanForm data={loan} readOnly /> : <LinearProgress />
    return (
        <Card
            title='Datos del préstamo'
            content={Form}
        />
    )
}

export default ReadLoan

