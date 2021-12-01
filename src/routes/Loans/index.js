import React from 'react'
import Card from "../../components/Card"
import Datatable from "../../components/Datatable"
import { loanHeaders } from '../../constants/tableHeaders'
import { loans } from '../../constants/mockupData'

const formatLoanData = data => data.map(loan => ({
    ...loan,
    customer_name: `${loan.customer?.person?.name} ${loan.customer?.person?.lastname}`,
    start_date: new Date(loan.start_date).toLocaleDateString(),
    end_date: new Date(loan.end_date).toLocaleDateString(),
    debt: `$${(loan.debt || 0).toFixed(2)}`
}))

export const Loans = () => {
    const formattedData = formatLoanData(loans)
    const LoansTable = <Datatable headers={loanHeaders} rows={formattedData} noBorder options={{ read: true, return: true }} />
    return (
        <Card
            title='Préstamos activos'
            content={LoansTable}
            divider
        />
    )
}

export default Loans
export * from './create'
// export * from './update'
export * from './read'