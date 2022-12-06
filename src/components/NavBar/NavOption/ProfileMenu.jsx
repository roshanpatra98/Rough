import React from 'react';
import { Button, Modal, Box, Grid, FormControl, TextField, OutlinedInput, InputLabel, InputAdornment, IconButton, FormControlLabel, Checkbox, Typography } from "@mui/material";
import Profile from '../../Profile';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo_Dark from './Job-Stream-Logo-dark.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import LogIn_module from './Authentication/LogIn_module';
import ApplicantRegister_module from './Authentication/ApplicantRegister_module';
import RecruiterRegister_module from './Authentication/RecruiterRegister_module';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 882,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 50,
  p: 4,
};

const ProfileMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [authSwitch, setAuthSwitch] = React.useState(true);
  const [switchRole, setSwitchRole] = React.useState(true);
  const [registerRecruiterValues, setRegisterRecruiterValues] = React.useState({
    companyName: '',
    username: '',
    emailId: '',
    password: '',
    location: '',
    industry: '',
    showPassword: false,
  });
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
}
  const handleRegisterRecruiterChange = (prop) => (event) => {
    setRegisterRecruiterValues({
      ...registerRecruiterValues,
      [prop]:event.target.value
    });
  };
  const handleClickShowRegisterRecruiterPassword = () => {
    setRegisterRecruiterValues({
      ...registerRecruiterValues,
      showPassword: !registerRecruiterValues.showPassword
    });
  };
  const [registerApplicantValues, setRegisterApplicantValues] = React.useState({
    username: '',
    fullName: '',
    phoneNumber: '',
    emailId: '',
    password: '',
    skills: [],
    showPassword: false
  });
  const handleRegisterApplicantChange = (prop) => (event) => {
    setRegisterApplicantValues({
      ...registerApplicantValues,
      [prop]:event.target.value
    });
  };
  const handleClickShowRegisterApplicantPassword = () => {
    setRegisterApplicantValues({
      ...registerApplicantValues,
      showPassword: !registerApplicantValues.showPassword
    });
  };
  return (
    <>
      <Button variant="text" onClick={handleOpen}><Profile/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
          { authSwitch ? 
            <>
              <LogIn_module/>
            </> :
          <>
          <Grid align='center'>
            <RadioGroup row defaultValue={'Applicant'} aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" sx={{mx:'20%'}}>
              <FormControlLabel value="Applicant" onChange={()=>setSwitchRole(!switchRole)} control={<Radio />} label="Applicant" />
              <FormControlLabel value="Recruiter" onChange={()=>setSwitchRole(!switchRole)} control={<Radio />} label="Recruiter" />       
            </RadioGroup>     
            {
                switchRole ? 
                <>
                    <ApplicantRegister_module/>
                </> : 
                <>
                    <RecruiterRegister_module/>
                </>
            }
          </Grid>

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
          </>
          }
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
            <Typography style={{ padding:35 }}> 
            {
              authSwitch ? <>Don't have an account ?&nbsp;</> : <>Already have an account ?&nbsp;</>
            }
             
                <Link href='#' style={{ textDecoration:'none', color:'#FFFFFF', fontWeight:'bold' }} onClick={()=>setAuthSwitch(!authSwitch)}>
                  {
                    authSwitch ? <>Register Here</> : <>Sign In</>
                  }
                </Link>.
            </Typography>
          </Grid>
        </Box>
      </Modal>
    </>
  )
}

export default ProfileMenu;