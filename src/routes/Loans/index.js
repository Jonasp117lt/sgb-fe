import React, { useEffect, useState } from 'react'
import Card from "../../components/Card"
import Datatable from "../../components/Datatable"
import { loanHeaders } from '../../constants/tableHeaders'
import api from "../../services/api"
import swal from "../../utils/alerts"
import { LinearProgress } from '@mui/material'

const formatData = (data) => data.map(loan => {
    loan.start_date = new Date(loan.start_date).toLocaleDateString()
    loan.end_date = new Date(loan.end_date).toLocaleDateString()
    loan.customer_name = `${loan.customer?.person?.name} ${loan.customer?.person?.lastname}`
    loan.is_active = loan.active ? "No" : "Si"
    const debt = `$${(parseFloat(loan.debt || 0)).toFixed(2)}`
    return { ...loan, debt }
})

export const Loans = ({ customerId }) => {
    const [loans, setLoans] = useState([])
    const [loading, setLoading] = useState(false)
    const options = { read: true, delete: false, update: false, return: true }
    const formattedLoans = formatData(loans)
    const LoansTable = !loading ? <Datatable headers={loanHeaders} rows={formattedLoans} noBorder options={options} /> : <LinearProgress />

    const getLoans = async () => {
        const response = await api.getLoans(customerId)
        if (response.success) {
            setLoans(response.loans)
        } else {
            swal.requestError("Oops!", "Ha ocurrido un error intentando retornar los préstamos, inténtalo de nuevo")
        }
    }

    useEffect(() => {
        setLoading(true)
        getLoans()
        setLoading(false)
    }, [])

    return (
        <Card
            title='Préstamos'
            content={LoansTable}
            withoutHeader={!!customerId}
            divider
        />
    )
}

export default Loans
export * from './create'
export * from './read'