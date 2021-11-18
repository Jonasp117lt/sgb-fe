import React from 'react'
import { Grid, Button, Stack } from '@mui/material'
import { defaultLoan } from '../../constants/models'
import { select_books } from '../../constants/mockupData'
import TextField from '../../components/TextField'
import Select from '../../components/Select/Autocomplete'
import _ from 'lodash'

const LoanForm = props => {
    const { readOnly } = props
    const [loan, setLoan] = React.useState(props.data || defaultLoan())

    const handleChange = (e) => {
        const loanCopy = JSON.parse(JSON.stringify(loan))
        _.set(loanCopy, e.target.name, e.target.value)
        if (e.target.name === 'book_ids') {
            _.set(loanCopy, 'book_num', e.target.value.length)
        }
        setLoan(loanCopy)
    }

    const handleSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit(loan)
        }
    }

    console.log(loan)

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
                    <Select
                        disableCloseOnSelect
                        multiple
                        label='Libros'
                        name='book_ids'
                        value={loan.book_ids}
                        options={select_books}
                        onChange={(e, value) => handleChange({ target: { name: 'book_ids', value } })}
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