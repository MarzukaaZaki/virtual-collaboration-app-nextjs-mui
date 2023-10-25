import { Box, Grid, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logoImg from '../../../public/assets/cover.png'

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#052127' }}>
            <Grid container>
                <Grid item laptop={4}>
                    <Image src={logoImg} alt='logo' width={200} />
                </Grid>
                <Grid item laptop={4} sx={{padding:'10px'}}>
                 
                    <Typography sx={{color:'#1dbfe1', margin:'12px 0'}}> About</Typography>
                    <Typography sx={{color:'#1dbfe1',margin:'12px 0'}}> Blog </Typography>
                    <Typography sx={{color:'#1dbfe1',margin:'12px 0'}}> Link </Typography>
                    <Typography sx={{color:'#1dbfe1',margin:'12px 0'}}> Features</Typography>
                  
                </Grid>
                <Grid item laptop={4} sx={{padding:'10px'}}>
                 
                    <Typography sx={{color:'#1dbfe1', margin:'12px 0'}}> Facebook</Typography>
                    <Typography sx={{color:'#1dbfe1',margin:'12px 0'}}> Twitter </Typography>
                    <Typography sx={{color:'#1dbfe1',margin:'12px 0'}}> Instagram </Typography>
                    <Typography sx={{color:'#1dbfe1',margin:'12px 0'}}>Youtube</Typography>
                  
                </Grid>
                
                
   
            </Grid>

        </Box>
    );
};

export default Footer;