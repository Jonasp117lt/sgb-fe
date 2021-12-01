import React from 'react'
import { Grid, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { defaultLoan, defaultReturn } from '../../constants/models'
import TextField from '../../components/TextField'
import Select from '../../components/Select/Autocomplete'
import _ from 'lodash'

const ReturnForm = props => {
    const { readOnly } = props
    const [_return, setReturn] = React.useState(props.data || defaultReturn())
    const [loan, setLoan] = React.useState(props.loan || defaultLoan)

    React.useEffect(() => {
        if (props.data) {
            setReturn(props.data)
        }
        if (props.loan) {
            setLoan(props.loan)
        }
    }, [props.data, props.loan])

    const handleChange = (e) => {
        const { value, name } = e.target
        const returnCopy = _.cloneDeep(_return)
        _.set(returnCopy, name, value)
        if (name === 'books') {
            _.set(returnCopy, 'book_num', value.length)
        }
        setReturn(returnCopy)
    }

    const handleSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit(_return)
        }
    }

    const { customer, books } = loan
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
                    <Select
                        disableCloseOnSelect
                        multiple
                        label='Libros'
                        name='books'
                        value={books}
                        options={books}
                        onChange={(e, value) => handleChange({ target: { name: 'books', value } })}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label='Fecha'
                        value={new Date().toLocaleDateString()}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label='Adeudo'
                        type="number"
                        value={loan.debt}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label='Pago'
                        type="number"
                        value={_return.payment}
                        onChange={e => setReturn({ ..._return, payment: e.target.value })}
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

export default ReturnForm