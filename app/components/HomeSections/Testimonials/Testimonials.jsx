'use client'
import { Box, Button, Grid, Typography } from '@mui/material';


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
// import required modules
import { Scrollbar } from 'swiper/modules';
import SwiperCore, { Autoplay } from 'swiper';
import Image from 'next/image';

import coleHaanLogo from '../../../../public/assets/testimonial-images/Cole_Haan_Logo.jpg';
import ceo1 from '../../../../public/assets/testimonial-images/ceo1.jpg';
import xeroxLogo from '../../../../public/assets/testimonial-images/Xerox_Logo.jpg';
import travelokaLogo from '../../../../public/assets/testimonial-images/Traveloka_Logo.jpg';
SwiperCore.use([Autoplay]);
const Testimonials = () => {
    return (
        <Box sx={{ bgcolor: '#052127', color: 'white', margin:'5% auto 0 auto' }}>
            <Grid container spacing={3}
                sx={{

                  
                    padding: {
                        mobile: '10px',
                        tablet:'5%'
                    }

                }}
            >
                <Grid item mobile={12} tablet={6} sx={{
                    textAlign: {
                        mobile: 'center',
                        tablet: 'left'
                    },
                }}>
                    <Typography variant='h3' sx={{marginTop:'5%', marginBottom: '22px', fontWeight: '600' }}>200,000+ use Tellect to Maximize their Productivity!</Typography>
                    <Typography variant='h6' sx={{marginBottom: '22px', color:'#3dc2ae'}}>We're dedicated to providing you with a powerful and user-friendly virtual collaboration platform that empowers individuals and teams to achieve their goals with ease.</Typography>
                    <Typography variant='p'>But don’t just take our word for it, see what our customers have to say.</Typography>
                    <br />
                    <Button sx={{ marginTop: '22px' , padding:'10px 20px 10px 20px'}} variant='contained'> Meet Our Customers </Button>
                </Grid>
                <Grid item mobile={12} tablet={6}>
                    <Swiper
                        scrollbar={{}}
                        autoplay={{
                            delay: 2500
                        }}
                        modules={[Scrollbar]}
                        className="mySwiper"
                        style={{padding:'20px', margin:'10px 20px 10px 20px', border:'2px solid #073039', borderRadius:'20px', backgroundColor:'#073039'}}
                    >
                        <SwiperSlide style={{opacity:'1'}}>
                            <Box sx={{ margin:'0 8% 0 8%' }}>
                                <Image src={coleHaanLogo} width={100} style={{marginBottom:'20px'}} />
                                <br />
                                <Typography variant='p'>
                                    "I've seen my fair share of collaboration tools, but this virtual collaboration web app is hands down the best I've encountered. The video conferencing is top-notch, making it effortless to connect with our global teams and clients."
                                </Typography>
                                <br />

                                <Box sx={{ display: 'flex', marginTop: '20px' }}>
                                    <Image src={ceo1} width={47} style={{marginRight:'', borderRadius:'80%' }} />
                                    <Box sx={{paddingLeft:'10px'}}>
                                        <Typography variant='body'>Ryan Gosling</Typography>
                                        <Typography variant='body2'>Chief of Operations, Cole Haan Shoes</Typography>
                                    </Box>

                                </Box>
                            </Box>

                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ margin:'0 8% 0 8%' }}>
                                <Image src={xeroxLogo} width={100} style={{marginBottom:'20px'}} />
                                <br />
                                <Typography variant='p'>
                                    "As the head of marketing, I've found this virtual collaboration web app to be a valuable addition to our toolkit. The video conferencing and livestream capabilities have allowed us to host engaging webinars and connect with our audience in real-time."
                                </Typography>
                                <br />

                                <Box sx={{ display: 'flex', marginTop: '20px' }}>
                                    <Image src={ceo1} width={47} style={{marginRight:'', borderRadius:'80%' }} />
                                    <Box sx={{paddingLeft:'10px'}}>
                                        <Typography variant='body'>Ryan Gosling</Typography>
                                        <Typography variant='body2'>Chief of Operations, Cole Haan Shoes</Typography>
                                    </Box>

                                </Box>
                            </Box>

                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ margin:'0 8% 0 8%' }}>
                                <Image src={travelokaLogo} width={100} style={{marginBottom:'20px'}} />
                                <br />
                                <Typography variant='p'>
                                    "In the fast-paced world of sales, effective communication and collaboration are paramount. This virtual collaboration web app has become our secret weapon. "
                                </Typography>
                                <br />

                                <Box sx={{ display: 'flex', marginTop: '20px' }}>
                                    <Image src={ceo1} width={47} style={{marginRight:'', borderRadius:'80%' }} />
                                    <Box sx={{paddingLeft:'10px'}}>
                                        <Typography variant='body'>Ryan Gosling</Typography>
                                        <Typography variant='body2'>Chief of Operations, Cole Haan Shoes</Typography>
                                    </Box>

                                </Box>
                            </Box>

                        </SwiperSlide>



                    </Swiper>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Testimonials;