import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CustomAutocomplete = (props) => {
    return (
        <Autocomplete
            getOptionLabel={option => option[props.optionLabel || 'name']}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            {...props}
            renderInput={(params) => <TextField {...params} variant='standard' fullWidth label={props.label} />}
        />
    );
}

export default CustomAutocomplete