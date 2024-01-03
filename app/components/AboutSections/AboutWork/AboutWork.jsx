'use client'
import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import collabImg from '../../../../public/assets/about-images/collaboration.png'
import workspaceImg from '../../../../public/assets/about-images/workspace.png'
import securityImg from '../../../../public/assets/about-images/security.png'
import reportImg from '../../../../public/assets/about-images/reporting.png'

import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css'
const AboutWork = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <Box sx={{ margin: '5% 20%' }} data-aos='fade-right' data-aos-duration='3500'>
            <Typography variant='h2' sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                What we Do
            </Typography>
            <Typography>
                Our app is a game-changer, bringing people together regardless of their physical location. Whether you're working from home, on the go, or in a different time zone, our platform bridges the gap and empowers you to collaborate effortlessly.
            </Typography>
            <Grid container spacing={5} sx={{ marginTop: '10%' }}>
                <Grid item mobile={12} laptop={6}>
                    <Card sx={{ maxWidth: 350, minHeight: '320px', padding: '0 15px' }}>
                        <CardActionArea>
                            <Image src={collabImg}
                                alt='collaboration'
                                height={140}
                                style={{ padding: '15px' }}
                            />
                            <Divider />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Real-Time Collaboration
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                                    Say goodbye to endless email chains and hello to real-time collaboration. Work on projects simultaneously, share your thoughts instantly, and watch your ideas come to life in real-time.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item mobile={12} laptop={6}>
                    <Card sx={{ maxWidth: 350, minHeight: '320px', padding: '0 15px' }}>
                        <CardActionArea>
                            <Image src={workspaceImg}
                                alt='workspace'
                                height={140}
                                style={{ padding: '15px' }}
                            />
                            <Divider />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Customized Workspace
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                                    Tailor your virtual workspace to fit your needs. Arrange tools and apps the way you want to maximize productivity.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item mobile={12} laptop={6}>
                    <Card sx={{ maxWidth: 350, minHeight: '320px', padding: '0 15px' }}>
                        <CardActionArea>
                            <Image src={securityImg}
                                alt='security'
                                height={140}
                                style={{ padding: '15px' }}
                            />
                            <Divider />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Security
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                                    We take your data security seriously. Our app employs robust encryption and security measures to keep your information safe and confidential.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item mobile={12} laptop={6}>
                    <Card sx={{ maxWidth: 350, minHeight: '320px', padding: '0 15px' }}>
                        <CardActionArea>
                            <Image src={reportImg}
                                alt='report'
                                height={140}
                                style={{ padding: '15px' }}
                            />
                            <Divider />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Reporting and Analysis
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                                    Say goodbye to endless email chains and hello to real-time collaboration. Work on projects simultaneously, share your thoughts instantly, and watch your ideas come to life in real-time.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>



            </Grid>

        </Box>
    );
};

export default AboutWork;