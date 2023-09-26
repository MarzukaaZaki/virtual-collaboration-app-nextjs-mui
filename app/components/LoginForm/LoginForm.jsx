import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import React from 'react';

const LoginForm = () => {
    const paperStyle = {
        padding: 20,
        height: '80vh',
        width: 500,
        margin: '5% auto', 
        borderTop:'3px solid #207b7e'
    }

    const textFieldStyle = {
        marginBottom:'6%', 
        borderBottom:'1px solid #207b7e'
    }
    return (
        <Grid>
            <Paper elevation={3} style={paperStyle}>
                <Grid align='center'>
                    <Avatar sx={{ bgcolor: '#207b7e' }}><LockOpenIcon /></Avatar>
                    <h2>Sign In</h2>
                    <form style={{ marginBottom: '15px' }}>

                        <TextField variant='filled' style={textFieldStyle} label='Your Email' type='email' placeholder='Enter your email' fullWidth required></TextField>
                        <TextField variant='filled' style={textFieldStyle} label='Your Password' type='password' placeholder='Enter your password' fullWidth required></TextField>

                        <Button type='submit' variant='contained' fullWidth> Log In</Button>
                    </form>
                    <Typography variant='body2' sx={{ textDecoration: 'none', textAlign: 'left' }}>
                        <Link href='/register'>
                            Don't have an account? Create One
                        </Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default LoginForm;