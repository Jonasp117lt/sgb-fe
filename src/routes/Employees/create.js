import React from 'react'
import Card from "../../components/Card"
import EmployeeForm from "../../components/forms/employee"
import api from "../../services/api"
import swal from "../../utils/alerts"
import { useNavigate } from 'react-router'

export const CreateEmployee = () => {
    const navigate = useNavigate()

    const handleSubmit = async (book) => {
        const response = await api.createEmployee(book)
        if (response.success) {
            swal.requestSuccess("Cliente Registrado!", "El usuario se ha registrado correctamente")
                .then(() => navigate("/books"))
        } else {
            swal.requestError("Oops!", "Ha ocurrido un problema intentando registrar el usuario, intentalo nuevamente")
        }
    }
    const Form = <EmployeeForm onSubmit={handleSubmit}/>
    return (
        <Card
            title='Nuevo usuario'
            content={Form}
        />
    )
}

export default CreateEmployee
