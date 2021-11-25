import React from 'react'
import { Grid, Typography, FormControlLabel, Checkbox, Button, Stack } from '@mui/material'
import { defaultCustomer } from '../../constants/models'
import TextField from '../../components/TextField'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const CustomerForm = props => {
    const { readOnly } = props
    const [customer, setCustomer] = React.useState(props.data || defaultCustomer())

    const handleChange = (e) => {
        const customerCopy = JSON.parse(JSON.stringify(customer))
        _.set(customerCopy, e.target.name, e.target.value)
        setCustomer(customerCopy)
    }

    const handleSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit(customer)
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
                        type='number'
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel disabled control={<Checkbox />} checked={customer.has_books} label='¿Tiene Libros?' />
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

export default CustomerForm