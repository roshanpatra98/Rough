import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Grid, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import React from 'react';

const ApplicantRegister_module = () => {
    const [registerApplicantValues, setRegisterApplicantValues] = React.useState({
        username:'',
        fullName:'',
        phoneNumber:'',
        emailId:'',
        password:'',
        skills:[],
        showPassword:false
    });
    const handleRegisterApplicantChange = (prop) => (event) => {
        setRegisterApplicantValues({
            ...registerApplicantValues, [prop]:event.target.value
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    const handleClickShowPassword = () => {
        setRegisterApplicantValues({
            ...registerApplicantValues,
            showPassword: !registerApplicantValues.showPassword
        });
    };
  return (
    <div>
        {/* Username */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <TextField id='outlined-basic' value={registerApplicantValues.username} onChange={handleRegisterApplicantChange('username')} label='Username' variant='outlined'/>
        </FormControl>
        {/* fullName */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <TextField id='outlined-basic' value={registerApplicantValues.fullName} onChange={handleRegisterApplicantChange('fullName')} label='Full Name' variant='outlined'/>
        </FormControl>
        {/* phoneNumber */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <TextField id='outlined-basic' value={registerApplicantValues.phoneNumber} onChange={handleRegisterApplicantChange('phoneNumber')} label='Phone Number' variant='outlined'/>
        </FormControl>
        {/* emailId */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <TextField id='outlined-basic' value={registerApplicantValues.emailId} onChange={handleRegisterApplicantChange('emailId')} label='Email ID' variant='outlined'/>
        </FormControl>
        {/* password */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
            <OutlinedInput id='outlined-adornment-password' type={registerApplicantValues.showPassword ? 'text' : 'password'} value={registerApplicantValues.password} onChange={handleRegisterApplicantChange('password')} endAdornment={
                <InputAdornment position='end'>
                    <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge='end'>
                        {registerApplicantValues.showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                </InputAdornment>
            } label='Password'/>
        </FormControl>
        {/* skills */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <TextField id='outlined-basic' value={registerApplicantValues.skills} onChange={handleRegisterApplicantChange('skills')} label='Skills' variant='outlined'/>
        </FormControl>
        {/* google, linkedIn */}
        <Grid align='center' position='absolute' bottom={160} right={0} left={0} sx={{marginTop:'70px', marginBottom:'-50px'}}>
            <Typography>
                <Button>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png' alt='google' height='55px' width='55px'/>
                </Button>
                <Button>
                    <LinkedInIcon color='#4267B2' sx={{fontSize:70}}/>
                </Button>
            </Typography>
        </Grid>
    </div>
  )
}

export default ApplicantRegister_module;