'use client'
import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Link from 'next/link';
import React, { useState } from 'react';



const RegisterForm = () => {

    const paperStyle = {
        padding: 20,
        height: '100vh',
        width: 500,
        margin: '5% auto',
        borderTop: '3px solid #207b7e'
    }

    const textFieldStyle = {
        marginBottom: '6%',
        borderBottom: '1px solid #207b7e'
    }


    /* Handling Form */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    console.log(name);
    console.log(error);


    /* Handling Register*/
    const handleRegister = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError('All Fields are Required!');
            return;
        }
    }
    return (
        <Grid>
            <Paper elevation={3} style={paperStyle}>
                {error &&
                    (
                        <Box sx={{ bgcolor: '#e74242', color: 'white', textAlign: 'center', padding: "8px 2px", borderRadius: '12px', margin: "20px auto", fontWeight: '600' }}>
                            {error}
                        </Box>
                    )
                }
                <Grid align='center'>
                    <Avatar sx={{ bgcolor: '#207b7e' }}><LockOpenIcon /></Avatar>
                    <h2>Create an Account</h2>
                    <form style={{ marginBottom: '15px' }}>
                        <TextField variant='filled' style={textFieldStyle} label='Your Name' placeholder='Enter your name' fullWidth required></TextField>
                        <TextField variant='filled' style={textFieldStyle} label='Your Email' type='email' placeholder='Enter your email' fullWidth required></TextField>
                        <TextField variant='filled' style={textFieldStyle} label='Your Password' type='password' placeholder='Enter your password' fullWidth required></TextField>
                        <TextField variant='filled' style={textFieldStyle} label='Confirm Your Password' type='password' placeholder='Re-enter password' fullWidth required></TextField>

                        <button style={{ padding:'15px 10px', width:'100%', fontWeight:'600', fontSize:'16px', backgroundColor:'#207b7e', color:'white', borderRadius:'5px', border:'none'}}> Register</button>
                    </form>
                    <Typography variant='body2' sx={{ textDecoration: 'none', textAlign: 'left' }}>
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