import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, InputLabel, TextField, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import React from 'react'

const RecruiterRegister_module = () => {
    const [registerRecruiterValues, setRegisterRecruiterValues] = React.useState({
        companyName:'',
        username:'',
        emailId:'',
        password:'',
        location:'',
        industry:'',
        showPassword:false
    });
    const handleRegisterRecruiterChange = (prop) => (event) => {
        setRegisterRecruiterValues({
            ...registerRecruiterValues,
            [prop]:event.target.value
        });
    };
    const handleClickShowPassword = () => {
        setRegisterRecruiterValues({
            ...registerRecruiterValues,
            showPassword: !registerRecruiterValues.showPassword
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
  return (
    <div>
        {/* companyName */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <TextField id='outlined-basic' value={registerRecruiterValues.companyName} onChange={handleRegisterRecruiterChange('companyName')} label='Company Name' variant='outlined'/>
        </FormControl>
        {/* Username */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <TextField id='outlined-basic' value={registerRecruiterValues.username} onChange={handleRegisterRecruiterChange('username')} label='Username' variant='outlined'/>
        </FormControl>
        {/* emailId */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <TextField id='outlined-basic' value={registerRecruiterValues.emailId} onChange={handleRegisterRecruiterChange('emailId')} label='Email ID' variant='outlined'/>
        </FormControl>
        {/* password */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
            <OutlinedInput id='outlined-adornment-password' type={registerRecruiterValues.showPassword ? 'text' : 'password'} value={registerRecruiterValues.password} onChange={handleRegisterRecruiterChange('password')} endAdornment={
                <InputAdornment position='end'>
                    <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge='end'>
                        {registerRecruiterValues.showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                </InputAdornment>
            } label='Password'/>
        </FormControl>
        {/* location */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <TextField if='outlined-basic' value={registerRecruiterValues.location} onChange={handleRegisterRecruiterChange('location')} label='location' variant='outlined'/>
        </FormControl>
        {/* industry */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <TextField id='outlined-basic' value={registerRecruiterValues.industry} onChange={handleRegisterRecruiterChange('industry')} label='Industry' variant='outlined'/>
        </FormControl>
    </div>
  )
}

export default RecruiterRegister_module