import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const EmpORRec = () => {
    const empORrec = [
        'Applicant', 'Recruiter'
    ];
    return (
        <Autocomplete
            sx={{width:'80%', m:1}}
            options={empORrec}
            renderInput={(params)=><TextField {...params} label='Who are you?'/>}
        />
    )
}

export default EmpORRec;