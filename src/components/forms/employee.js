import React from 'react'
import { Grid, Typography, FormControlLabel, Checkbox, Button, Stack } from '@mui/material'
import { defaultEmployee } from '../../constants/models'
import TextField from '../../components/TextField'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { CircularProgress } from '@mui/material'

const EmployeeForm = props => {
    const { readOnly } = props
    const [employee, setEmployee] = React.useState(props.data || defaultEmployee())
    const [loading, setLoading] = React.useState(false)

    const handleChange = (e) => {
        const employeeCopy = _.cloneDeep(employee)
        _.set(employeeCopy, e.target.name, e.target.value)
        setEmployee(employeeCopy)
    }

    const handleSubmit = () => {
        setLoading(true)
        if (props.onSubmit) {
            props.onSubmit(employee)
                .then(() => setLoading(false))
        }
    }

    return (
        <Grid container>
            <Grid container item spacing={2} xs={8}>
                {readOnly && <Grid item xs={12}>
                    <Button color="primary" variant="outlined" component={Link} to={`/loans/create/${employee.id}`}>Solicitar préstamo</Button>
                </Grid>}
                <Grid item xs={12}>
                    <Typography>Datos Personales</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='Nombre'
                        name='person.name'
                        value={employee.person?.name}
                        onChange={handleChange}
                        disabled={readOnly}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='Apellido'
                        name='person.lastname'
                        value={employee.person?.lastname}
                        disabled={readOnly}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='Correo Electrónico'
                        name='person.email'
                        value={employee.person?.email}
                        onChange={handleChange}
                        disabled={readOnly}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='No. de Teléfono'
                        name='person.phone'
                        value={employee.person?.phone}
                        onChange={handleChange}
                        disabled={readOnly}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label='Domicilio'
                        name='person.address'
                        value={employee.person?.address}
                        onChange={handleChange}
                        disabled={readOnly}
                        />
                </Grid>
                <hr />
                <Grid item xs={12}>
                    <Typography>Datos de usuario</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='Usuario'
                        name='username'
                        value={employee.username}
                        onChange={handleChange}
                        disabled={readOnly}
                        />
                    <TextField
                        label='Contraseña'
                        name='password'
                        type="password"
                        value={employee.password}
                        onChange={handleChange}
                        disabled={readOnly}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel disabled control={<Checkbox />} checked={employee.has_books} label='¿Tiene Libros?' />
                </Grid>
                {!readOnly && <Grid item xs={12}>
                    <Stack direction='row' spacing={2}>
                        <Button variant='contained' xs={{ mr: 2 }} onClick={handleSubmit} disabled={loading}>Subir {loading && <CircularProgress />}</Button>
                        <Button variant='contained' color='error' disabled={loading}>Cancelar {loading && <CircularProgress />}</Button>
                    </Stack>
                </Grid>}
            </Grid>
        </Grid >
    )
}

export default EmployeeForm