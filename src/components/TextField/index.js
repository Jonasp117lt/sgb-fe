import React from 'react'
import { TextField } from '@mui/material'

const CustomTextField = props => {
    return <TextField
        fullWidth
        variant='standard'
        {...props}
    />
}

export default CustomTextField