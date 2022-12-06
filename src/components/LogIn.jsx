import React from 'react'
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
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo_Dark from '../pictures/Job-Stream-Logo-dark.png';
import { yellow } from '@mui/material/colors';
// import { fontSize } from '@mui/system';

const LogIn = () => {

    const [values, setValues] = useState({
        password: '',
        username: '',
        showPassword: false,
    });

    const paint = yellow[500];

    const paperStyle = {paddin:20, height:'70vh', width:'25vw', margin:'auto', marginTop:'0vh', position:'relative'};

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle} flex-start='column'>
            {/* <Grid align='center' height={35}/> */}
            <Grid align='center' sx={{marginTop:'20px'}}>
                {/* <AccountCircleIcon color="primary" sx={{fontSize:80, marginTop:'35px'}}/>
                <Typography variant='h5'>Sign In</Typography> */}
                <div marginTop='30px'>
                    <img 
                    src={Logo_Dark}
                    alt='Job Streamers' height='90' marg/>
                </div>
            </Grid>
            <Grid align='center' height={35}/>
            <Grid align='center'>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <TextField id="outlined-basic" value={values.username} onChange={handleChange('username')} label="Username" variant="outlined"/>
                </FormControl>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment=
                            {
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                        <FormHelperText id="outlined-weight-helper-text" align='center'style={{color:'red'}}>
                            Username and Password not matching
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
                    label='Remember Me'
                />
            </Grid>
            <Grid align='center'>
                <Button
                style={{
                    // color:'#006379',
                    backgroundColor:'#ffeb3b',
                    fontSize:'20px'
                }}
                variant='contained' type='submit' sx={{m:1, width:'25ch'}}>Sign In</Button>
                
            </Grid>
            <Grid align='center'>
                <Typography>
                    <Link href='#'>
                        Forgot password?
                    </Link>
                </Typography>                
            </Grid>
            <Grid 
                align='center'
                position='absolute'
                bottom={250}
                right={0}
                left={0}
                sx={{marginTop:'50px', marginBottom:'-30px'}}  >
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
                > Don't have an account ?&nbsp; 
                    <Link href='#'
                    style={{
                        textDecoration:'none',
                        color:'#FFFFFF',
                        fontWeight:'bold'
                    }}>
                         Register Here
                    </Link>.
                </Typography>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default LogIn;