import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Link from 'next/link';
import React from 'react';
const paperStyle = {
    padding: 20,
    height: '100vh',
    width: 500,
    margin: '5% auto', 
    borderTop:'3px solid #207b7e'
}

const textFieldStyle = {
    marginBottom:'6%', 
    borderBottom:'1px solid #207b7e'
}
const RegisterForm = () => {
    return (
        <Grid>
            <Paper elevation={3} style={paperStyle}>
                <Grid align='center'>
                    <Avatar sx={{bgcolor:'#207b7e'}}><LockOpenIcon /></Avatar>
                    <h2>Create an Account</h2>
                    <form style={{marginBottom:'15px'}}>
                        <TextField variant='filled' style={textFieldStyle} label='Your Name' placeholder='Enter your name' fullWidth required></TextField>
                        <TextField variant='filled' style={textFieldStyle} label='Your Email' type='email' placeholder='Enter your email' fullWidth required></TextField>
                        <TextField variant='filled' style={textFieldStyle} label='Your Password' type='password' placeholder='Enter your password' fullWidth required></TextField>
                        <TextField variant='filled' style={textFieldStyle} label='Confirm Your Password' type='password' placeholder='Re-enter password' fullWidth required></TextField>
                       <Button type='submit' variant='contained' fullWidth> Register</Button>
                    </form>
                    <Typography variant='body2' sx={{textDecoration:'none', textAlign:'left'}}>
                        <Link href='/login'>
                        Already have an account? Sign In
                        </Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default RegisterForm;