import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const MartialStatusSelect = () => {
    const martialStatus=[
        'Single', 'Married', 'Separated', 'Divorced'
    ];
  return (
    <Autocomplete
        sx={{m:2, width:'80%'}}
        options={martialStatus}
        style={{marginTop:'30px'}}
        renderInput={(params=><TextField {...params} label='Martial Status'/>)}
    />
  )
}

export default MartialStatusSelect;