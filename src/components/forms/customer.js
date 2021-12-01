import React from 'react'
import { Grid, Typography, FormControlLabel, Checkbox, Button, Stack } from '@mui/material'
import { defaultCustomer } from '../../constants/models'
import TextField from '../../components/TextField'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { CircularProgress } from '@mui/material'
import Loans from '../../routes/Loans'

const CustomerForm = props => {
    const { readOnly } = props
    const [customer, setCustomer] = React.useState(props.data || defaultCustomer())
    const [loading, setLoading] = React.useState(false)

    const handleChange = (e) => {
        const customerCopy = _.cloneDeep(customer)
        _.set(customerCopy, e.target.name, e.target.value)
        setCustomer(customerCopy)
    }

    const handleSubmit = () => {
        setLoading(true)
        if (props.onSubmit) {
            props.onSubmit(customer)
                .then(() => setLoading(false))
        }
    }

    return (
        <Grid container>
            <Grid container item spacing={2} xs={8}>
                {readOnly && <Grid item xs={12}>
                    <Button color="primary" variant="outlined" component={Link} to={`/loans/create/${customer.id}`}>Solicitar préstamo</Button>
                </Grid>}
                <Grid item xs={12}>
                    <Typography>Datos Personales</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='Nombre'
                        name='person.name'
                        value={customer.person?.name}
                        onChange={handleChange}
                        disabled={readOnly}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='Apellido'
                        name='person.lastname'
                        value={customer.person?.lastname}
                        disabled={readOnly}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='Correo Electrónico'
                        name='person.email'
                        value={customer.person?.email}
                        onChange={handleChange}
                        disabled={readOnly}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='No. de Teléfono'
                        name='person.phone'
                        value={customer.person?.phone}
                        onChange={handleChange}
                        disabled={readOnly}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label='Domicilio'
                        name='person.address'
                        value={customer.person?.address}
                        onChange={handleChange}
                        disabled={readOnly}
                    />
                </Grid>
                <hr />
                <Grid item xs={12}>
                    <Typography>Datos Biblioteca</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='Adeudo'
                        name='debt'
                        value={customer.debt}
                        disabled
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel disabled control={<Checkbox />} checked={customer.has_books} label='¿Tiene Libros?' />
                </Grid>
                {!readOnly && <Grid item xs={12}>
                    <Stack direction='row' spacing={2}>
                        <Button variant='contained' xs={{ mr: 2 }} onClick={handleSubmit} disabled={loading}>Subir {loading && <CircularProgress />}</Button>
                        <Button variant='contained' color='error' disabled={loading}>Cancelar {loading && <CircularProgress />}</Button>
                    </Stack>
                </Grid>}
                {readOnly && < Grid item xs={12}>
                    <Typography>Préstamos</Typography>
                    <Loans customerId={customer.id} />
                </Grid>}
            </Grid>
        </Grid >
    )
}

export default CustomerForm