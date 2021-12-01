import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { LinearProgress } from '@mui/material'
import { useParams } from 'react-router-dom'
import Card from "../../components/Card"
import CustomerForm from "../../components/forms/customer"
import api from "../../services/api"
import swal from "../../utils/alerts"

export const ReadCustomer = () => {
    const params = useParams()
    const navigate = useNavigate()

    const [customer, setCustomer] = useState()

    const getCustomer = async () => {
        const response = await api.getCustomer(params.customerId)
        if (response.success) {
            setCustomer(response.customer)
        }
        else {
            swal.requestError("Oops!", "Ha ocurrido un error intentando retornar el cliente, inténtalo de nuevo")
                .then(() => navigate("/customers"))
        }
    }

    useEffect(() => {
        getCustomer()
    }, [])
    const Form = customer ? <CustomerForm data={customer} readOnly /> : <LinearProgress />
    return (
        <Card
            title='Datos del cliente'
            content={Form}
        />
    )
}

export default ReadCustomer
