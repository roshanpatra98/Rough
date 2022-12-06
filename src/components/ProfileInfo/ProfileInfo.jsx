import {
    Button, 
    Grid, 
    Paper, 
    Autocomplete, 
    FormControl, 
    TextField,
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { resolveBreakpointValues } from '@mui/system/breakpoints';
import { useState } from 'react';
import { Box } from '@mui/system';


const ProfileInfo = () => {
    const paperStyle = {paddin:20, height:'100vh', width:'80vw', marginTop:'0vh', position:'relative', display:'inline-block', backgroundColor:'green'};

    const sidebar = {height:'100vh', width:'20vw', marginTop:'0vh', backgroundColor:'red', align:'left', display:'inline-block'};

    const main = { height:'100vh', width:'80vw', position:'initial', backgroundColor:'white', display:'inline-block'}

    const mainLeft = {align:'left',height:'100vh', width:'40vw', backgroundColor:'white', position:'initial', display:'inline-block'};

    const mainRight = {height:'100vh', width:'40vw', backgroundColor:'lightblue', display:'inline-block'};

    // const mainUpperLeft = {height:'50vh', width:'40vw', backgroundColor:'white', display:'inline-block'};

    // const mainUpperRight = {height:'50vh', width:'40vw', backgroundColor:'purple', display:'inline-block'};

    // const mainLower = {height:'50vh', width:'80vw', backgroundColor:'blue', display:'inline-block'};

    // const mainLowerLeft = {height:'50vh', width:'40vw', backgroundColor:'grey', display:'inline-block'};

    // const mainLowerRight = {height:'50vh', width:'40vw', backgroundColor:'grey', display:'inline-block'};

    const [values, setValues] = useState({
        name:'',
        phoneNo:'',
        email:'',
        location:'',
        designation:'',
        year:'',
        month:'',
        currentCTC:'',
        description:''
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]:event.target.value})
    };

    // const paperUpperLeft = { height:'50vh', width:'40vw', display:'inline-block'}

  return (
    <Grid>
        {/* <Paper elevation={10} style={sidebar} flex-start='row' >

        </Paper> */}
        {/* <Grid align='left' style={sidebar}>

        </Grid> */}
        <Grid align='right' style={main}>
            <Grid align='left' style={mainLeft}>
                <Grid align='center'>
                    <Grid height={-50}></Grid>
                    <FormControl sx={{m:2, width:'80%'}} variant='outlined'>
                        <TextField id='outlined-basic' value={values.name} onChange={handleChange('name')} label='Name' variant='outlined'/>
                    </FormControl>
                    
                    
                    <div>
                        

                        {/* 
                        
                        <FormControl sx={{m:2, width:'41%', marginTop:'25px'}} variant='outlined'>
                            <TextField id='outlined-basic' value={values.currentCTC} onChange={handleChange('currentCTC')} label='Current CTC' variant='outlined'/>
                        </FormControl> */}
                    </div>
                </Grid>
            </Grid>
            <Grid align='right' style={mainRight}>

            </Grid>
            {/* <Grid align='center' style={mainUpper}>
                <Grid align='left' style={mainUpperLeft}>
                    <Paper elevation={0} style={paperUpperLeft}>
                        <Grid align='center' sx={{height:'7%'}}/>
                        <Grid align='center'>
                            
                            

                            
                            
                            
                        </Grid>
                    </Paper>

                    
                    <Grid align='center'>
                        {/* <FormControl sx={{ width:'35ch'}} variant='outlined'>
                            <TextField id='outlined-basic' value={values.name} onChange={handleChange('name')} label='Name' variant='outlined'/>
                        </FormControl>
                         
                    </Grid>
                </Grid>
                <Grid align='right' style={mainUpperRight}>

                </Grid>
            </Grid>
            <Grid align='center' style={mainLower}>
                <Grid align='left' style={mainLowerLeft}>
                       
                </Grid>
                <Grid align='right' style={mainLowerRight}>

                </Grid>
            </Grid> */}
        </Grid>

        <Grid elevation={10} flex-start='row'>
        {/* <Grid height={15}/>
            <Grid
                align='right'
                sx={{marginTop:'0px'}}
                // position='absolute'
                top={80}
                right={0}
                left={0}
            >
                <Button>
                    <AccountCircleIcon color='#006379' sx={{fontSize:230}}/>
                </Button>
            </Grid> */}
            {/* <Grid align='right' style={{fontSize:'20px', fontFamily:'sans-serif', fontWeight:'normal'}}>
                Update your Profile Picture
            </Grid> */}
            
            <Grid>
                
                
                
                
                
                
                
            </Grid>
            <Grid align='center' sx={{marginTop:'5px'}}>
                <Button
                    style={{
                        backgroundColor:'#ffeb3b',
                        fontSize:'20px'
                    }}
                    variant='contained' type='submit' sx={{m:1, width:'12ch'}}
                >
                Save
                </Button>
                <Button
                    style={{
                        backgroundColor:'#ffeb3b',
                        fontSize:'20px'
                    }}
                    variant='contained' type='submit' sx={{m:1, width:'12ch'}}
                >
                Discard
                </Button>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default ProfileInfo;