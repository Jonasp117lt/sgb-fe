import React, { useEffect } from 'react'
import Card from "../../components/Card"
import LoanForm from "../../components/forms/loan"
import { single_loan } from '../../constants/mockupData'

export const ReadLoan = () => {

    const [loan, setLoan] = React.useState(null)

    const getLoan = () => {
        setLoan(single_loan)
    }

    useEffect(()=>{
        getLoan()
    },[])

    const Form = <LoanForm data={loan} readOnly />
    return (
        <Card
            title='Datos del préstamo'
            content={Form}
        />
    )
}

export default ReadLoan
