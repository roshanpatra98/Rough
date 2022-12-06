import React from 'react'
import {Stack, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Authentication from './NavOption/Authentication/Authentication';

const NavOptions = () => {
    const navigate = useNavigate();
    const navigateToMyJobs = () => {
        navigate('/myJobs');
    }
    const navigateToProfileInfo = () => {
        navigate('/profileInfo')
    };
  return (
    <Stack direction='row' sx={{overflow:'auto', height:'50px', flexDirection: {md:'row'}}}>
        <Button variant='text' onClick={navigateToMyJobs}>
            My Jobs
        </Button>
        <Button variant='text' onClick={navigateToProfileInfo}>
            Profile Info
        </Button>
        <Authentication/>
    </Stack>
  )
}

export default NavOptions