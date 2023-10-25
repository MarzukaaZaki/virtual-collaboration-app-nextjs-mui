import { Avatar, Button, Grid, Paper, TextField, TextareaAutosize, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const ReviewForm = () => {
    const paperStyle = {
        padding: 20,
        height: '100vh',
        width: '70%',
        margin: '12px auto',
        borderTop: '3px solid #207b7e'
    }

    const textFieldStyle = {
        marginBottom: '16px',
        borderBottom: '1px solid #207b7e'
    }
    return (
        <Grid> 
            <h1 style={{textAlign: 'center'}}>Write to Us</h1>
            <Paper elevation={3} style={paperStyle}>
                <Grid item align='center'>
                   
                    <form style={{}}>

                        <TextField variant='filled' style={textFieldStyle} label='Your Email' type='email' placeholder='Enter your email' fullWidth required></TextField>
                        <TextField
                        variant='filled'
                        style={textFieldStyle}
                        id="standard-multiline-static"
                        label="Your Review..."
                        multiline
                        fullWidth
                        rows={4}
                        />

                        <Button type='submit' variant='contained' fullWidth> Send</Button>
                    </form>
                   
                </Grid>
                
               
                
            </Paper>
        </Grid>
    );
};

export default ReviewForm;