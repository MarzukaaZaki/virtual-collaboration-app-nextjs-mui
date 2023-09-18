"use client"
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import allInOneImg from '../../../../public/assets/all_in_one.jpg'
import './Perks.module.css'
const StyledTypography = styled(Typography)({
    marginTop: '6%',
    fontWeight: 'bolder',
    // marginBottom: '15px',
    background: '#095B71',
    background: 'linear-gradient(to right, #095B71 0%, #147C93 50%, #43b09d 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: {
        mobile: 'center'
    }
})


const StyledGrid = styled(Grid)({
    marginLeft: 'auto',
    padding: '2px 40px',


})

const Perks = () => {
    return (
        <>
            <Grid container sx={{ marginTop: '10%' }}>
                <StyledGrid item mobile={12} laptop={7} >
                    <StyledTypography variant='h2' sx={{



                    }}>In the era of remote collaboration, our online meeting platform fosters seamless global teamwork. </StyledTypography>
                    {/* <StyledTypography variant='p'></StyledTypography> */}
                </StyledGrid>
                <StyledGrid item mobile={12} laptop={5}>
                    <video width='100%' height={350} autoPlay loop muted src={require('../../../../public/assets/video_meeting_2.mp4')}></video>
                </StyledGrid>

            </Grid>

            <Grid container sx={{ marginBottom: '25px', marginTop: '10%', bgcolor: '#f1f6f7' }}>

                <StyledGrid item mobile={12} laptop={7}>
                    <div>
                        <Image src={allInOneImg}
                            alt='all in one'
                            layout='responsive'
                            sizes='(max-width: 640px) 100% 50%'
                        ></Image>
                    </div>

                </StyledGrid>

                <StyledGrid item mobile={12} laptop={5} >
                    <StyledTypography variant='h2' sx={{
                        marginTop: '10%',
                        fontWeight: 'bolder',
                        background: '#095B71',
                        background: 'linear-gradient(to right, #095B71 0%, #147C93 50%, #43b09d 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'

                    }}>All Your Work Needs in One App </StyledTypography>
                    <Typography variant='p' sx={{ color: 'primary.light' }}>Our multipurpose application is your comprehensive solution for remote work, continually expanding its offerings to meet evolving demands. With seamless integrations to popular third-party apps, it streamlines your workflow, ensuring all your essential tools and resources are readily accessible in a single, cohesive platform</Typography>
                </StyledGrid>

            </Grid>



        </>
    );
};

export default Perks;