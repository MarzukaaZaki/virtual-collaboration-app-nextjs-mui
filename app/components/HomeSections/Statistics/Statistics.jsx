'use client'
import React from 'react';
import { alpha } from '@mui/system';
import { Box, Button, Grid, Typography } from '@mui/material';
import { SlBadge } from 'react-icons/sl';
import { MdLiveTv } from 'react-icons/md';
import { BsGraphUpArrow } from 'react-icons/bs';
import { ArrowRight } from '@mui/icons-material';

const Statistics = () => {
    return (
        <Box sx={{
            margin:'10% 0',
            textAlign:{
                mobile: 'center',
                tablet:'left'
            },
            background: 'rgb(5,33,39)',
            background: 'linear-gradient(175deg, rgba(5,33,39,1) 2%, rgba(19,61,70,1) 35%, rgba(28,73,83,1) 56%, rgba(40,90,101,1) 73%, rgba(99,171,186,1) 93%, rgba(99,171,186,1) 100%)', color: 'white', padding: '25px'
        }}>
            <Box sx={{ margin: '5% 10px' }}>


                <Typography variant='h2' sx={{ fontWeight: '600', marginBottom: '20px' }}>Unveiling Tellect: <br />A Symphony of Success</Typography>
                <Typography variant='body' sx={{ padding: '2px 2px' }}>Explore the Data Behind Our Virtual Collaboration Triumph. Discover the Metrics That Showcase Our App's Excellence</Typography>
                <br />
                <Button variant='contained' sx={{ marginTop: '22px' }}>Read Our Case Studies</Button>
                <Grid container sx={{ margin: '10px -10px' }}>


                    <Grid item mobile={12} tablet={12} laptop={4} sx={{ marginTop:'5%' }}>
                        <Box sx={{ backgroundColor: alpha('#fff', 0.12), padding: '15px', width: '380px' }}>

                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                <BsGraphUpArrow style={{ fontSize: '28px', marginBottom: '12px' }} />
                                <Button sx={{color:'white', fontSize:'11px'}}> View Case Study <ArrowRight/></Button>
                            </Box>
                            <Typography variant='body2' sx={{ textTransform: 'uppercase', marginBottom: '5px', fontWeight:'bold', fontSize:'12px' }}>User Satisfaction Rate</Typography>
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant='h2' sx={{ fontWeight: '550', marginBottom: '12px' }}>96% </Typography>
                                <Typography variant='body2' sx={{ margin: '10px 12px' }}>Tellect boasts an impressive user satisfaction rate of 96%, a testament to our commitment to providing a seamless collaboration experience.</Typography>
                            </Box>




                        </Box>
                    </Grid>
                    <Grid item mobile={12} tablet={12} laptop={4} sx={{ marginTop: '2%'}}>
                        <Box sx={{ backgroundColor: alpha('#fff', 0.12), padding: '15px', width: '380px' }}>
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                <SlBadge style={{ fontSize: '28px', marginBottom: '12px' }} />
                                <Button sx={{color:'white', fontSize:'12px'}} size='small'> View Case Study <ArrowRight/></Button>
                            </Box>
                            
                            <Typography variant='body2' sx={{ textTransform: 'uppercase', marginBottom: '5px', fontWeight:'bold', fontSize:'12px' }}>Experience</Typography>
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant='h2' sx={{ fontWeight: '550', marginBottom: '12px' }}>10y </Typography>
                                <Typography variant='body2' sx={{ margin: '10px 12px' }}>With over a decade of experience in the industry, Tellect has honed its virtual collaboration tools to perfection, ensuring top-notch performance and reliability.</Typography>
                            </Box>




                        </Box>
                    </Grid>
                    <Grid item mobile={12} tablet={12} laptop={4} sx={{ marginTop:'-1%'}}>
                        <Box sx={{ backgroundColor: alpha('#fff', 0.12), padding: '15px', width: '380px' }}>

                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                <MdLiveTv style={{ fontSize: '28px', marginBottom: '12px' }} />
                                <Button sx={{color:'white', fontSize:'12px'}} size='small'> View Case Study <ArrowRight/></Button>
                            </Box>
                            <Typography variant='body2' sx={{ textTransform: 'uppercase', marginBottom: '5px', fontWeight:'bold', fontSize:'12px' }}>Livestreaming Hours Monthly</Typography>
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant='h2' sx={{ fontWeight: '550', marginBottom: '12px' }}>2M+</Typography>
                                <Typography variant='body2' sx={{ margin: '10px 12px' }}>Users on Tellect collectively livestream over 2 million hours of content every month, showcasing the app's versatility for both small meetings and large-scale events.</Typography>
                            </Box>




                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};

export default Statistics;