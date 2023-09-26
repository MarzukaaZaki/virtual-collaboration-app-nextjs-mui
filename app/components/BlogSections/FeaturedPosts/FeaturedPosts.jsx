import { Box, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import blogImg1 from '../../../../public/assets/blog-images/cloud.jpg'
import { MdArrowForward } from 'react-icons/md';
const FeaturedPosts = () => {
    return (
        <Box sx={{marginBottom:'5%'}} >
            <Grid container>
                <Grid item mobile={12} laptop={6}>
                    <Image src={blogImg1} layout='responsive' />
                </Grid>
                <Grid item mobile={12} laptop={6} sx={{ border:'0.7px solid #c8c8c8', height:'100%', marginTop:'2%',padding:'10px 5%'}}>
                    <Box sx={{display:'flex', marginTop:'10%'}}>
                    <Typography variant='body2' sx={{fontWeight:'bold', marginBottom:'12px',  marginRight:'20px'}}> Tellect Cloud Services</Typography>
                    <Typography variant='body2' sx={{ marginBottom:'10px',color:'#5a5c5b', fontWeight:'bold'}}>Sep 21,2023 - 2 min read</Typography>
                    </Box>

                    <Typography variant='h3' sx={{fontWeight:'700', marginBottom:'10px'}}>Tellect and Cloud Collaboration: Maximizing Productivity and The Benefits of Cloud Usage in Tellect</Typography>
                    <Divider sx={{margin:'5% 0'}}/>
                    <Box display='flex' justifyContent='space-between' sx={{marginBottom:'3%'}}>
                        <Typography variant='p' sx={{fontWeight:'bold'}}>Read More</Typography>
                        <MdArrowForward/>
                    </Box>

                </Grid>

            </Grid>
        </Box>
    );
};

export default FeaturedPosts;