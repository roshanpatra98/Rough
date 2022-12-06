import { Autocomplete, TextField } from '@mui/material';
import React from 'react'

const GenderSelect = () => {
    const genders=[
        'Male', 'Female', 'Others'
    ];
  return (
    <Autocomplete
        sx={{width:'80%', m:2}}
        options={genders}
        renderInput={(params)=><TextField {...params} label='Select Gender'/>}
    />
  )
}

export default GenderSelect;