import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, Radio, RadioGroup, TextField, Typography, OutlinedInput } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const LogIn_module = () => {
    const [switchRole, setSwitchRole] = React.useState(true);
    const [loginValues, setLoginValues] = React.useState({
        username:'',
        password:'',
        showPassword: false
    });
    const handleLoginChange = (prop) => (event) => {
        setLoginValues({...loginValues, [prop]:event.target.value});
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowPassword = () => {
        setLoginValues({
            ...loginValues,
            showPassword: !loginValues.showPassword
        });
    };
  return (
    <Grid align='center'>
        {/* Applicant or Recruiter radio button */}
        <RadioGroup row defaultValue={'Applicant'} aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group' sx={{mx:'20%'}}>
            <FormControlLabel value='Applicant' onChange={()=>setSwitchRole(!switchRole)} control={<Radio/>} label='Applicant'/>
            <FormControlLabel value='Recruiter' onChange={()=>setSwitchRole(!switchRole)} control={<Radio/>} label='Recruiter' sx={{value:'checked'}}/>
        </RadioGroup>
        {/* Username */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <TextField id='outlined-basic' value={loginValues.username} onChange={handleLoginChange('username')} label='Username' variant='outlined'/>
        </FormControl>
        {/* Password */}
        <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
            <OutlinedInput id='outlined-adornment-password' type={loginValues.showPassword ? 'text' : 'password'} value={loginValues.password} onChange={handleLoginChange('password')} endAdornment={
                <InputAdornment position='end'>
                    <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge='end'>
                        {loginValues.showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                </InputAdornment>
            } label='Password' />
        </FormControl>
        {/* Remember Me */}
        <Grid align='center'>
            <FormControlLabel control={<Checkbox name='checkedB' color='primary'/>} label='Remember Me'/>
        </Grid>
        {/* Sign In Button */}
        <Grid align='center'>
            <Button style={{backgroundColor:'#ffeb3b', fontSize:'20px'}} variant='contained' type='submit' sx={{m:1, width:'25ch'}}>Sign In</Button>
        </Grid>
        {/* Forgot Password */}
        <Grid align='center'>
            <Typography>
                <Link href='#'>Forgot password?</Link>
            </Typography>
        </Grid>
        {/* Google LinkedIn */}
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
    </Grid>
  )
}

export default LogIn_module;