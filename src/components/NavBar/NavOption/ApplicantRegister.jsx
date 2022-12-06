import React from 'react';
import { Button, Modal, Box, Grid, FormControl, TextField, OutlinedInput, InputLabel, InputAdornment, IconButton, FormControlLabel, Checkbox, Typography, FormHelperText, MenuItem } from "@mui/material";
import Profile from '../../Profile';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {yellow} from '@mui/material/colors';
import Logo_Dark from './Job-Stream-Logo-dark.png';
import EmpORRec from './EmpORRec/EmpORRec';
import { Redirect } from 'react-router-dom';

const ApplicantRegister = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [signupDetails, setSignupDetails] = useState({
        type: 'applicant',
        email: '',
        password: '',
        name: '',
        education: [],
        skills: [],
        resume: '',
        profile: '',
        bio: '',
        contactNumber: '',
    });

    const [phone, setPhone] = useState('');

    const [education, setEducation] = useState([
        {
            insitutionName: '',
            startYear: '',
            endYear: ''
        },
    ]);

    const [inputErrorHandler, setInputErrorHandler] = useState({
        email: {
            untouched: true,
            required: true,
            error: false,
            message: "",
        },
        password: {
            untouched: true,
            required: true,
            error: false,
            message: "",
          },
        name: {
            untouched: true,
            required: true,
            error: false,
            message: "",
          },
    });

    const handleInput = (key, value) => {
        setSignupDetails({
          ...signupDetails,
          [key]: value,
        });
    };

    const handleInputError = (key, status, message) => {
        setInputErrorHandler({
          ...inputErrorHandler,
          [key]: {
            required: true,
            untouched: false,
            error: status,
            message: message,
          },
        });
    };

    const paint = yellow[500];

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]:event.target.value});
    };


  return loggedin ? (
    <Redirect to='/'/>
  ) : (
    <Paper elevation={3} className={classes.body}>

        <Grid container direction='column' spacing={4} alignItems='center'>
            <Typography variant='h3' component='h2'>
                Sign Up
            </Typography>
        </Grid>

        <Grid item>
            <TextField
                select
                label='Category'
                variant='outlined'
                className={classes.inputBox}
                value={signupDetails.type}
                onChange={(event) => {
                    handleInput('type', event.target.value);
                }}                
            >
                <MenuItem value='applicant'>Applicant</MenuItem>
                <MenuItem value='recruiter'>Recruiter</MenuItem>
            </TextField>
        </Grid>

        <Grid item>
            <TextField
                label='Name'
                value={signupDetails.name}
                onChange={(event) => handleInput('name', event.target.value)}
                className={classes.inputBox}
                error={inputErrorHandler.name.error}
                helperText={inputErrorHandler.name.message}
                onBlur={(event) => {
                    if(event.target.value === "") {
                        handleInputError('name', true, 'Name is required');
                    } else {
                        handleInputError('name', false, '');
                    }
                }}
                variant='outlined'
            />
        </Grid>

        <Grid item>
            <EmailInput
                label='Email'
                value={signupDetails.email}
            />
        </Grid>

    </Paper>
  )
}

export default ApplicantRegister