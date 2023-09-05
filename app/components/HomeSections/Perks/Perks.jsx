"use client"
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import allInOneImg from '../../../../public/assets/all_in_one.jpg'

const StyledTypography = styled(Typography)({
   marginBottom:'15px'
})


const StyledGrid = styled(Grid)({
 marginLeft:'auto',
 padding:'2px 40px',
 textAlign:{
    mobile:'center',
    tablet:'left'
 }

})

const Perks = () => {
    return (
        <>
        <Grid container sx={{marginBottom:'25px', marginTop:'25px'}}>
            <StyledGrid item mobile={12} laptop={7} >
                <StyledTypography variant='h2' sx={{ fontWeight:'bolder',
            background: '#095B71',
            background: 'linear-gradient(to right, #095B71 0%, #147C93 50%, #43b09d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
            
         }}>In the era of remote collaboration, our online meeting platform fosters seamless global teamwork. </StyledTypography>
                {/* <StyledTypography variant='p'></StyledTypography> */}
            </StyledGrid>
            <StyledGrid item mobile={12} laptop={5}>
            <video width='100%' height={250} autoPlay loop muted src={require('../../../../public/assets/video_meeting_2.mp4')}></video>
            </StyledGrid>

        </Grid>
       
        
        
        </>
    );
};

export default Perks;