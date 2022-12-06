import React from 'react'
import { Autocomplete, TextField } from '@mui/material';

const WorkExp = () => {
    const wrkexp=[
        'Fresher', 'Experienced'
    ];
  return (
    <Autocomplete
        sx={{width:'80%', marginTop:'15px'}}
        options={wrkexp}
        renderInput={(params)=><TextField {...params} label='Work Experience'/>}
    />
  )
}

export default WorkExp;