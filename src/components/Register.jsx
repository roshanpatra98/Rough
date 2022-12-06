import React from 'react'
import { useState } from 'react';
import {
    Grid,
    Paper, 
    TextField, 
    FormControl, 
    InputLabel, 
    OutlinedInput, 
    InputAdornment, 
    IconButton,
    FormControlLabel,
    Checkbox,
    Button,
    Typography,
    Link,
    FormHelperText
} from '@mui/material';
// import GoogleIcon from '@mui/icons-material/Google';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import Logo_Dark from '../pictures/Job-Stream-Logo-dark.png';
import { yellow } from '@mui/material/colors';
// import { fontFamily } from '@mui/system';
// import { fontSize } from '@mui/system';

const Register = () => {

    const paint = yellow[500];
    const paperStyle = {paddin:20, height:'90vh', width:'25vw', margin:'auto', marginTop:'0vh', position:'relative'};


    const [values, setValues] = useState({
        username: '',
        email: '',
        ph_no: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    }

    const [passwordDuplicate, setPasswordDuplicate] = useState('');
    const handlePasswordDuplicate = (event) => {
      setPasswordDuplicate(event.target.value);
      checkMainDuplicate(values.password, passwordDuplicate);
      //useEffect
    }

    const [showPasswordDuplicate, setShowPasswordDuplicate] = useState(false);
    const handleShowPasswordDuplicate = () => {
      setShowPasswordDuplicate(!showPasswordDuplicate);
    }

    const checkMainDuplicate = () => {
      if(values.password != passwordDuplicate){
        console.log('different');
      }
      else{
        console.log('same');
      }
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(values.passwordMain != values.passwordDuplicate){
        //   setError(true);
        // }
    }

  return (
    <Grid>
        <Paper elevation={10} style={paperStyle} flex-start='column'>
            <Grid align='center' height={35}/>
            <Grid align='center' style={{fontSize:'35px', fontFamily:'sans-serif', fontWeight:'normal'}}>
                {/* <AccountCircleIcon color="primary" sx={{fontSize:80, marginTop:'35px'}}/>
                <Typography variant='h5'>Sign In</Typography> */}
                Create New Account
            </Grid>
            <Grid align='center' height={35}/>
            <Grid align='center'>

                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <TextField id="outlined-basic" value={values.username} onChange={handleChange('username')} label="User Name" variant="outlined"/>
                </FormControl>

                <FormControl sx={{m:1, width:'35ch'}} variant='outlined'>
                    <TextField id='outlined-basic' value={values.email} onChange={handleChange('email')} label='Email' variant='outlined'/>
                    <FormHelperText id="outlined-weight-helper-text" style={{color:'red'}}>
                      Enter valid Email
                    </FormHelperText>
                </FormControl>

                <FormControl sx={{m:1, width:'35ch'}} variant='outlined'>
                    <TextField id='outlined-basic' value={values.ph_no} onChange={handleChange('ph_no')} label='Mobile Number' variant='outlined'/>
                    <FormHelperText id="outlined-weight-helper-text" style={{color:'red'}}>
                      Enter valid Phone number
                    </FormHelperText>
                </FormControl>

                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Type Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            helperText='Enter password'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>}
                            label="Type Password"/>
                            <FormHelperText id="outlined-weight-helper-text" style={{color:'red'}}>
                              Password
                            </FormHelperText>
                </FormControl>

                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Re-type Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPasswordDuplicate ? 'text' : 'password'}
                            value={passwordDuplicate}
                            onChange={handlePasswordDuplicate}
                            helperText='Enter password'
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleShowPasswordDuplicate}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPasswordDuplicate ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>}
                            label="Re-type Password"/>
                            <FormHelperText id="outlined-weight-helper-text" style={{color:'red'}}>
                              Password
                            </FormHelperText>
                </FormControl>
            </Grid>

            <Grid align='left' sx={{marginLeft:'100px'}}>
                <FormControlLabel
                    control={
                        <Checkbox
                            name='checkedB'
                            color='primary'
                        />
                    }
                    label='Agree with Terms and Conditions'/>
            </Grid>

            <Grid align='center'>
                <Button
                style={{
                    // color:'#006379',
                    backgroundColor:'#ffeb3b',
                    fontSize:'20px'
                }}
                variant='contained' type='submit' onClick={handleSubmit} sx={{m:1, width:'25ch'}}>Register</Button>
            </Grid>
            
            <Grid 
                align='center'
                sx={{marginTop:'10px', marginBottom:'-20px'}}
                position='absolute'
                bottom={135}
                right={0}
                left={0}
            >
                <Typography>
                    {/* Or login with: */}
                    <Button>
                        {/* <GoogleIcon sx={{fontSize:50}}/> */}
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png' alt='google' height='55px' width='55px'/>
                    </Button>
                    <Button><FacebookIcon color='#4267B2' sx={{fontSize:70}}/></Button>
                    <Button><LinkedInIcon color='#4267B2' sx={{fontSize:70}}/></Button>
                </Typography>
            </Grid>
            <Grid 
                align='center' 
                marginTop={5} 
                backgroundColor={'#006379'} 
                color={'#FFFFFF'}
                height={95}
                position='absolute'
                bottom={0}
                right={0}
                left={0}
            >
                <Typography
                    style={{
                        padding:35

                    }}
                > Already have an account ?&nbsp; 
                    <Link href='#'
                    style={{
                        textDecoration:'none',
                        color:'#FFFFFF',
                        fontWeight:'bold'
                    }}>
                         Sign In
                    </Link>.
                </Typography>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default Register;