import React from 'react';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Stack, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';

// import {AccountCircleIcon, NotificationsIcon, EmailIcon} from '@mui/icons-material';

const Profile = () => {
    const [notification, setNotification] = useState(1);
    const [message, setMessage] = useState(1);

    let loggedIn = false;
    const [show, setShow] = useState(loggedIn);
  return (
    <Stack
        direction='row'
        sx={{
            overflow:'auto',
            height: '50px',
            flexDirection: {md:'row'}
        }}
    >
        {
            show?<>
                <Badge color="primary" badgeContent={notification} sx={{marginTop:'10px', marginRight:'30px'}}>
                    <NotificationsIcon sx={{fontSize:30}}/>
                </Badge>
                <Badge color='primary' badgeContent={message} sx={{marginTop: '10px', marginRight:'30px'}}>
                    <EmailIcon sx={{fontSize:30}}/>
                </Badge>
            </>
            :null
        }
        <AccountCircleIcon sx={{fontSize:35, marginTop:'6px'}}/>
    </Stack>
  )
}

export default Profile