import React from 'react'
import { Grid, Button, Stack } from '@mui/material'
import { defaultBook } from '../../constants/models'
import TextField from '../../components/TextField'
import _ from 'lodash'

const BookForm = props => {
    const { readOnly } = props
    const [book, setBook] = React.useState(props.data || defaultBook())

    const handleChange = (e) => {
        const bookCopy = JSON.parse(JSON.stringify(book))
        _.set(bookCopy, e.target.name, e.target.value)
        setBook(bookCopy)
    }

    const handleSubmit = () => {
        if (props.onSubmit) {
            props.onSubmit(book)
        }
    }

    return (
        <Grid container>
            <Grid container item spacing={2} xs={8}>
                <Grid item xs={6}>
                    <TextField
                        label='Nombre'
                        name='name'
                        value={book.name}
                        onChange={handleChange}
                        disabled={readOnly}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='Autor'
                        name='author'
                        value={book.author}
                        onChange={handleChange}
                        disabled={readOnly}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='Editorial'
                        name='editorial'
                        value={book.editorial}
                        onChange={handleChange}
                        disabled={readOnly}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label='Edición'
                        name='edition'
                        value={book.edition}
                        onChange={handleChange}
                        disabled={readOnly}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label='Cantidad'
                        name='inventory'
                        value={book.inventory}
                        onChange={handleChange}
                        disabled={readOnly}
                        type='number'
                        fullWidth={false}
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

export default BookForm