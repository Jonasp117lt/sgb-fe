import React from 'react'
import { Grid, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { defaultReturn } from '../../constants/models'
import TextField from '../../components/TextField'
import Select from '../../components/Select/Autocomplete'
import _ from 'lodash'

const ReturnForm = props => {
    const { readOnly } = props
    const [_return, setReturn] = React.useState(props.data || defaultReturn())

    React.useEffect(() => {
        if (props.data) {
            setReturn(props.data)
        }
    }, [props.data])

    console.log(_return)

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

    const { customer, books } = _return.loan
    const customerName = customer?.person?.name ? `${customer?.person?.name} ${customer?.person?.lastname}` : ''

    return (
        <Grid container>
            <Grid container item spacing={2} xs={8}>
                <Grid item xs={12}>
                    <TextField
                        label='Número de libros'
                        value={_return.book_num}
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
                        value={_return.books}
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

export default ReturnForm