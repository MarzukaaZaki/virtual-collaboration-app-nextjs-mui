import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Banner = ({ title, subTitle }) => {
    return (
        <Box sx={{
            background: 'rgb(57,187,214)',
            background: 'linear-gradient(254deg, rgba(57,187,214,1) 0%, rgba(197,245,255,1) 39%, rgba(255,255,255,1) 91%)',
            padding:'10% 10% 5% 10%'
        }}>
            

                <Typography variant='h2' sx={{ fontWeight: 'bold', marginBottom: '20px' }}> {title}</Typography>
                <Typography variant='p' sx={{ width: '50%', marginBottom: '20px' }}>{subTitle} </Typography>
                <br />
                <Box sx={{ marginTop: '32px', marginBottom: '40px' }}>
                    <Button variant='contained' sx={{ marginBottom: '20px', marginRight: '10px' }}> Request a Demo </Button>
                    <Button variant='outlined' sx={{ marginBottom: '20px' }}> Contact Us </Button>
                </Box>
            
        </Box>


    );
};

export default Banner;