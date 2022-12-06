import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Box, Modal, Grid, FormControl, TextField, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import EmpORRec from './EmpORRec/EmpORRec';

const style = {
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 600,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 50,
    p: 4,
};

const ProfileRegister = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [values, setValues] = React.useState({
        companyName: '',
        location: '',
        industry: '',
        username: '',
        password: '',
        showPassword: false,
    });

    const paint = yellow[500];

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]:event.target.value});
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };

  return (
    <>
        <Button variant='text' onClick={handleOpen}></Button>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >

            <Box sx={style}>

                <Grid align='center' sx={{marginTop:'5px'}}>
                    <div marginTop='30px'>
                        <img
                            src={Logo_Dark}
                            alt='Job Streamers' height='90' marg
                        />
                    </div>
                </Grid>

                <Grid align='center'>
                    <EmpORRec/>

                    {/* Company Name */}
                    <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
                        <TextField id='outlined-basic' value={values.companyName} onChange={handleChange('companyName')} label='Company Name' variant='outlined'/>
                    </FormControl>

                    {/* location */}
                    <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
                        <TextField id='outlined-basic' value={values.location} onChange={handleChange('location')} label='Office Location' variant='outlined'/>
                    </FormControl>

                    {/* industry */}
                    <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
                        <TextField id='outlined-basic' value={values.industry} onChange={handleChange('industry')} label='Industry' variant='outlined'/>
                    </FormControl>

                    {/* Username */}
                    <FormControl sx={{m:1, width:'80%'}} variant='outlined'>
                        <TextField id='outlined-basic' value={values.username} onChange={handleChange('username')} label='Username' variant='outlined'/>
                    </FormControl>

                    {/* Password */}
                    <FormControl sx={{m:1, width:'80%'}} variant="outlined">
                        <InputLabel htmlFor='outlined-adornment-password'>PassPassword</InputLabel>

                        <OutlinedInput
                            id='outlined-adornment-password'
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='toggle password visibility'
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge='end'
                                    >
                                        {value.showPassword ? <VisibilityOff/> : <Visibility/>}

                                    </IconButton>
                                </InputAdornment>
                            }
                            label='Password'
                        />

                    </FormControl>

                    {/* Type Password again */}

                    {/* Register button */}
                    <Grid align='center'>
                        <Button
                            style={{
                                backgroundColor:'#ffeb3b',
                                fontSize:'20px'
                            }}
                            variant='contained' type='submit' sx={{m:1, width:'25ch'}}
                        >
                            Register
                        </Button>
                    </Grid>

                    <Grid
                        align='center'
                        position='absolute'
                        bottom={160}
                        right={0}
                        left={0}
                        sx={{marginTop:'70px', marginBottom:'-50px'}}
                    >
                        <Typography>
                            <Button>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png' alt='google' height='55px' width='55px'/>
                            </Button>
                            <Button>
                                <FacebookIcon color='#4267B2' sx={{fontSize:70}}/>
                            </Button>
                            <Button>
                                <LinkedInIcon color='#4267B2' sx={{fonstSize:70}}/>
                            </Button>
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
                        >Already have an account ?&nbsp;
                            <Link href='#'
                            style={{
                                textDecoration:'none',
                                color:'#FFFFFF',
                                fontWeight:'bold'
                            }}>
                                Log-In Here
                            </Link>.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    </>
  )
}

export default ProfileRegister;