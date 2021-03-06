import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button, Stack } from '@mui/material'
import { defaultLoan } from '../../constants/models'
import { books, single_customer } from '../../constants/mockupData'
import TextField from '../../components/TextField'
import Select from '../../components/Select/Autocomplete'
import DatePicker from '../../components/DatePicker'
import _ from 'lodash'

const LoanForm = props => {
    const { readOnly } = props
    const [loan, setLoan] = React.useState(props.data || defaultLoan())

    let { customer } = props
    if (readOnly) customer = loan.customer

    React.useEffect(() => {
        if (props.data) {
            setLoan(props.data)
        }
    }, [props.data])

    const handleChange = (e) => {
        const loanCopy = _.cloneDeep(loan)
        _.set(loanCopy, e.target.name, e.target.value)
        if (e.target.name === 'books') {
            _.set(loanCopy, 'book_num', e.target.value.length)
        }
        setLoan(loanCopy)
    }

    const handleSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit(loan)
        }
    }

    const customerName = customer?.person?.name ? `${customer?.person?.name} ${customer?.person?.lastname}` : ''

    return (
        <Grid container>
            <Grid container item spacing={2} xs={8}>
                <Grid item xs={12}>
                    <TextField
                        label='Número de libros'
                        value={loan.book_num}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label='Nombre del cliente'
                        value={customerName}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <Link
                        to={`/customers/${customer?.id}`}
                        target="_blank"
                    >
                        Ver cliente</Link>
                </Grid>
                <Grid item xs={12}>
                    <DatePicker
                        label='Fecha'
                        value={loan.start_date}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <Select
                        disableCloseOnSelect
                        multiple
                        label='Libros'
                        name='books'
                        value={loan.books}
                        options={books}
                        onChange={(e, value) => handleChange({ target: { name: 'books', value } })}
                        disabled={readOnly}
                    />
                </Grid>
                {!readOnly && <Grid item xs={12}>
                    <Stack direction='row' spacing={2}>
                        <Button variant='contained' xs={{ mr: 2 }} onClick={handleSubmit}>Subir</Button>
                        <Button variant='contained' color='error'>Cancelar</Button>
                    </Stack>
                </Grid>}
            </Grid>
        </Grid>
    )
}

export default LoanForm