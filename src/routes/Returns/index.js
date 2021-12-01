import React, { useEffect, useState } from 'react'
import Card from "../../components/Card"
import Datatable from "../../components/Datatable"
import { loanHeaders } from '../../constants/tableHeaders'
import api from "../../services/api"
import swal from "../../utils/alerts"
import { LinearProgress } from '@mui/material'

export const Loans = () => {
    const [loans, setLoans] = useState([])
    const [loading, setLoading] = useState(false)
    const options = { read: true, delete: false, update: false }
    const LoansTable = !loading ? <Datatable headers={loanHeaders} rows={loans} noBorder options={options} /> : <LinearProgress />

    const getLoans = async () => {
        const response = await api.getLoans()
        if (response.success) {
            setLoans(response.loans)
        } else {
            swal.requestError("Oops!", "Ha ocurrido un error intentando retornar las devoluciones, inténtalo de nuevo")
        }
    }

    useEffect(() => {
        setLoading(true)
        getLoans()
        setLoading(false)
    }, [])

    return (
        <Card
            title='Devoluciones'
            content={LoansTable}
            link="create"
            divider
        />
    )
}

export default Loans
export * from './create'