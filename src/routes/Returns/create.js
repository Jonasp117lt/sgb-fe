import React, { useEffect } from 'react'
import { LinearProgress } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import Card from "../../components/Card"
import ReturnForm from "../../components/forms/return"
import api from "../../services/api"
import swal from "../../utils/alerts"

export const CreateReturn = () => {
    const params = useParams()
    const navigate = useNavigate()

    const [loan, setLoan] = React.useState(null)

    const getLoan = async () => {
        const response = await api.getLoan(params?.loanId)
        if (response.success) {
            setLoan(response.loan)
        } else {
            swal.requestError("Oops!", "Ha ocurrido un error al obtener los datos del préstamo, inténtalo de nuevo")
                .then(() => navigate("/loans"))
        }
    }

    useEffect(() => {
        getLoan()
    }, [])

    const Form = <ReturnForm loan={loan} />
    return (
        <Card
            title='Registrar Devolución'
            content={Form}
        />
    )
}

export default CreateReturn
