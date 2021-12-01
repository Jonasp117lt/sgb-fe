import React from 'react'
import Card from "../../components/Card"
import LoanForm from "../../components/forms/loan"
import { useParams } from 'react-router-dom'
import { single_customer } from '../../constants/mockupData'

export const CreateLoan = (props) => {
    const params = useParams()
    const [customer, setCustomer] = React.useState(null)
    
    const getCustomer = (customerId) => {
        setCustomer(single_customer)
    }
    
    React.useEffect(() => {
        getCustomer(params?.customerId)
    }, [])

    const Form = <LoanForm customer={customer} />
    return (
        <Card
            title='Nuevo préstamo'
            content={Form}
        />
    )
}

export default CreateLoan
