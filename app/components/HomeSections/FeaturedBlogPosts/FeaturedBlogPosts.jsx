
'use client'
import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import blogImg1 from '../../../../public/assets/blog-images/remote-work1.png'
import blogImg2 from '../../../../public/assets/blog-images/remote-work2.png'
import blogImg3 from '../../../../public/assets/blog-images/remote-work3.png'
import Image from 'next/image';
import SectionTitle from '../../SectionTitle/SectionTitle';

const StyledHeading = styled(Typography)({
    padding: '15px 0',
    fontWeight: 'bold'
})

const StyledDivider = styled(Divider)({
    height: '2.3px',
    backgroundColor: 'black'
})

const FeaturedBlogPosts = () => {
    return (


        <Box sx={{ margin: '10% 5%', }}>


            <SectionTitle heading='Ready to Dive Deeper?' subHeading='from our blog' />
            <Grid container spacing={3} sx={{ marginTop: '22px' }}>
                <Grid mobile={12} tablet={5} laptop={3} style={{ padding: '15px' }}>
                    <Image src={blogImg2} alt='blog' layout='responsive' style={{ marginBottom: '18px' }}></Image>
                    <StyledDivider />
                    <StyledHeading variant='h4'>Your Ultimate Networking Game: Online Events and Resource Sharing</StyledHeading>
                    <StyledDivider sx={{ marginBottom: '18px' }} />
                    <Typography variant='body' style={{ textAlign: 'justify' }}>Networking is the lifeblood of any thriving business or organization.  </Typography>
                    <br />
                    <Button sx={{ marginTop: '5%', textDecoration: 'underline' }}>Read More <ArrowForwardIcon style={{ margin: '0 6px', width: '16px' }} /> </Button>
                </Grid>
                <Grid mobile={12} tablet={5} laptop={6} style={{ padding: '0 25px' }}>
                    <Image src={blogImg1} alt='blog' layout='responsive' style={{ marginBottom: '18px' }}></Image>
                    <StyledDivider />
                    <StyledHeading variant='h4'>Unlocking Seamless Collaboration: The Power of Video Conferencing and Livestreaming</StyledHeading>
                    <StyledDivider sx={{ marginBottom: '18px' }} />
                    <Typography variant='body' sx={{ paddingTop: '10px' }} style={{ textAlign: 'justify' }}>In today's fast-paced business landscape, effective collaboration is key to success. Our virtual collaboration web app brings you the best of both worlds with robust video conferencing and livestreaming features.</Typography>
                    <br />
                    <Button sx={{ marginTop: '5%', textDecoration: 'underline' }}>Read More <ArrowForwardIcon style={{ margin: '0 6px', width: '16px' }} /> </Button>
                </Grid>
                <Grid mobile={12} tablet={5} laptop={3} style={{ padding: '15px' }}>

                    <StyledDivider />
                    <StyledHeading variant='h4'>Efficiency Unleashed: Task and Project Management with Our Virtual Collab Web App</StyledHeading>
                    <StyledDivider sx={{ marginBottom: '18px' }} />
                    <Typography variant='body' style={{ textAlign: 'justify' }}> Our virtual collaboration web app offers powerful task and project management capabilities that streamline your workflows and keep everyone on the same page.</Typography>
                    <Image src={blogImg3} alt='blog' layout='responsive' style={{ marginTop: '18px' }}></Image>
                    <br />
                    <Button sx={{ marginTop: '5%', textDecoration: 'underline' }}>Read More <ArrowForwardIcon style={{ margin: '0 6px', width: '16px' }} /> </Button>
                </Grid>


            </Grid>

        </Box>
    );
};

export default FeaturedBlogPosts;