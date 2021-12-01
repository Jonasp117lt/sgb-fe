import React from 'react'
import DatePicker from '@mui/lab/DatePicker';
import TextField from '../TextField';

const CustomDatePicker = props => {
    return <DatePicker
        inputFormat="dd/MM/yyyy"
        fullWidth
        variant='standard'
        {...props}
        renderInput={(params) => <TextField {...params} />}
    />
}

export default CustomDatePicker