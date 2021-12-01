import React from 'react'
import Card from "../../components/Card"
import CustomerForm from "../../components/forms/customer"
import api from "../../services/api"
import swal from "../../utils/alerts"
import { useNavigate } from 'react-router'

export const CreateCustomer = () => {
    const navigate = useNavigate()

    const handleSubmit = async (book) => {
        const response = await api.createCustomer(book)
        if (response.success) {
            swal.requestSuccess("Cliente Registrado!", "El cliente se ha registrado correctamente")
                .then(() => navigate("/customers"))
        } else {
            swal.requestError("Oops!", "Ha ocurrido un problema intentando registrar el cliente, intentalo nuevamente")
        }
    }
    const Form = <CustomerForm onSubmit={handleSubmit}/>
    return (
        <Card
            title='Nuevo cliente'
            content={Form}
        />
    )
}

export default CreateCustomer
