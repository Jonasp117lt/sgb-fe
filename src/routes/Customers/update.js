import React, { useEffect, useState } from 'react'
import Card from "../../components/Card"
import CustomerForm from "../../components/forms/customer"
import { LinearProgress } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import api from "../../services/api"
import swal from "../../utils/alerts"

export const UpdateCustomer = () => {
    const params = useParams()
    const navigate = useNavigate()

    const [customer, setCustomer] = useState()

    const handleSubmit = async (customer) => {
        const response = await api.updateCustomer(customer)
        if (response.success) {
            swal.requestSuccess("Cliente Actualizado!", "El cliente se ha actualizado correctamente")
                .then(() => navigate("/customers"))
        } else {
            swal.requestError("Oops!", "Ha ocurrido un problema intentando actualizar el cliente, intentalo nuevamente")
        }
    }

    const getCustomer = async () => {
        const response = await api.getCustomer(params.customerId)
        if (response.success) {
            setCustomer(response.customer)
        }
        else{
            swal.requestError("Oops!", "Ha ocurrido un error intentando retornar los clientes, inténtalo de nuevo")
                .then(() => navigate("/customers"))
        }
    }

    useEffect(() => {
        getCustomer()
    }, [])
    const Form = customer ? <CustomerForm data={customer} onSubmit={handleSubmit} /> : <LinearProgress />
    return (
        <Card
            title='Editar cliente'
            content={Form}
        />
    )
}

export default UpdateCustomer
