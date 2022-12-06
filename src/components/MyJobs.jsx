import { Card, CardContent, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MyJobs = () => {
  return (
    <Box sx={{display:'flex', flexWrap:'wrap', '&>:not(style)':{m:3, width:'100vw', height:'100vh'}}}>
        <Paper sx={{backgroundColor:'#8A8A8A'}} display='flex' elevation={5}>
            <Card align='center' display='flex' sx={{m:5, width:'30%', height:'10vh', backgroundColor:'#FFF'}}>
                <Typography align='left' sx={{ my:'auto', fontSize: 20 }} color="text.secondary" gutterBottom>
                    Sample Job Profile - 01
                </Typography>
            </Card>
            <Card align='center' display='flex' sx={{m:5, width:'30%', height:'10vh', backgroundColor:'#FFF'}}>
                <Typography align='left' sx={{my:'auto', fontSize: 20}} color='text.secondary' gutterBottom>
                    Sample Job Profile - 02
                </Typography>
            </Card>
            <Card align='center' sx={{m:5, width:'95%', height:'10vh', backgroundColor:'#FFF'}}>
            </Card>
            <Card align='center' sx={{m:5, width:'95%', height:'10vh', backgroundColor:'#FFF'}}>
            </Card>
            <Card align='center' sx={{m:5, width:'95%', height:'10vh', backgroundColor:'#FFF'}}>
            </Card>
            <Card align='center' sx={{m:5, width:'95%', height:'10vh', backgroundColor:'#FFF'}}>
            </Card>
        </Paper>
    </Box>
  )
}

export default MyJobs