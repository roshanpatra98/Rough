import React from 'react'
import {
    Button,
    Grid,
    Paper
} from '@mui/material';
import Logo_Dark from './Job-Stream-Logo-dark.png';
import { display, Stack } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
    const paperStyle = {paddin:20, height:'30vh', width:'100vw', margin:'auto', position:'relative', backgroundColor:'white'};

  return (
    <Grid>
        <Paper elevation={5} style={paperStyle} sx={{display:'flex', flexDirection:'row'}}>
            <Grid sx={{height:'100%', width:'28%'}}>
                <Stack sx={{marginTop:'3%', marginLeft:'8%'}}>
                    <div style={{maxWidth:'100%', maxHeight:'100%'}}>
                        <img
                            src={Logo_Dark}
                            alt='Job Streamers' height='90' marg/>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <LocationOnIcon sx={{fontSize:35, color:'#006379'}}/>
                        <p style={{fontFamily:'sans-serif', fontSize:14, marginTop:'2px', marginLeft:'5px'}}>
                        # 93/1,5,First Floor MRS Complex, Ramamurthy Nagar Main Rd, Ramamurthy Nagar, Bengaluru, Karnataka 560016
                        </p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row' }}>
                        <EmailIcon sx={{fontSize:35, color:'#006379'}}/>
                        <p style={{fontFamily:'sans-serif', fontSize:14, marginTop:'8px', marginLeft:'5px'}}>samplemail@jobstreamers.com</p>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', marginTop:'3%'}}>
                        <Button>
                            <GoogleIcon sx={{fontSize:30, color:'#006379'}}/>
                        </Button>
                        <Button>
                            <InstagramIcon sx={{fontSize:30, color:'#006379'}}/>
                        </Button>
                        <Button>
                            <FacebookIcon sx={{fontSize:30, color:'#006379'}}/>
                        </Button>
                        <Button>
                            <LinkedInIcon sx={{fontSize:30, color:'#006379'}}/>
                        </Button>
                        <Button>
                            <TwitterIcon sx={{fontSize:30, color:'#006379'}}/>
                        </Button>
                        <Button>
                            <YouTubeIcon sx={{fontSize:30, color:'#006379'}}/>
                        </Button>
                    </div>
                </Stack>
            </Grid>
            <Grid sx={{height:'100%', width:'18%', backgroundColor:'white', fontFamily:'sans-serif'}}>
                <Stack sx={{margin:'15%'}}>
                    <h3 style={{margin:0, marginLeft:'8px', fontWeight:700}}>Company</h3>
                    <ul style={{listStyleType:'none', marginLeft:'-37px'}}>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                About Us
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Careers
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Privacy Policy
                            </Button>
                        </li>
                        <li>
                        <Button variant='text' sx={{color:'black'}}>
                                Contact Us
                            </Button>
                        </li>
                        <li><Button variant='text' sx={{color:'black'}}>
                                Terms of Services
                            </Button></li>
                    </ul>
                </Stack>
            </Grid>
            <Grid sx={{height:'100%', width:'18%', backgroundColor:'white', fontFamily:'sans-serif'}}>
            <Stack sx={{margin:'15%'}}>
                    <h3 style={{margin:0, marginLeft:'8px', fontWeight:700}}>Learn</h3>
                    <ul style={{listStyleType:'none', marginLeft:'-37px'}}>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Algorithms
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Data Structures
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Languages
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                CS Subjects
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Video Tutorail
                            </Button>
                        </li>
                    </ul>
                </Stack>
            </Grid>
            <Grid sx={{height:'100%', width:'18%', backgroundColor:'white', fontFamily:'sans-serif'}}>
            <Stack sx={{margin:'15%'}}>
                    <h3 style={{margin:0, marginLeft:'8px', fontWeight:700}}>Practice</h3>
                    <ul style={{listStyleType:'none', marginLeft:'-37px'}}>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Courses
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Company-wise
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Topic-wise
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                How to Begin ?
                            </Button>
                        </li>
                    </ul>
                </Stack>
            </Grid>
            <Grid sx={{height:'100%', width:'18%', backgroundColor:'white', fontFamily:'sans-serif'}}>
            <Stack sx={{margin:'15%'}}>
                    <h3 style={{margin:0, marginLeft:'8px', fontWeight:700}}>Contribute</h3>
                    <ul style={{listStyleType:'none', marginLeft:'-37px'}}>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Write an Article
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Interview Experience
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Interships
                            </Button>
                        </li>
                        <li>
                            <Button variant='text' sx={{color:'black'}}>
                                Videos
                            </Button>
                        </li>
                    </ul>
                </Stack>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default Footer