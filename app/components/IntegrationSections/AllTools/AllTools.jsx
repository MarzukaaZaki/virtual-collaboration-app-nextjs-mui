"use client"
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import googleToolsImg from '../../../../public/assets/integrations-images/google-tools.jpg'
import teamsImg from '../../../../public/assets/integrations-images/microsoftteams.jpg'
import otherToolsImg from '../../../../public/assets/integrations-images/productivity-apps.jpg'


const StyledTypography = styled(Typography)({
    marginTop: '6%',
    fontWeight: 'bolder',
    // marginBottom: '15px',
    background: '#095B71',
    background: 'linear-gradient(to right, #095B71 0%, #147C93 50%, #43b09d 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'left',
    marginBottom:'20px',
    marginTop:'15%'
    
})


const StyledGrid = styled(Grid)({
   
    textAlign:'left',
    padding:'10px 20px',
    marginBottom:'10%'
    


})
const AllTools = () => {
    return (
        <Box sx={{margin:'4%'}}>
            <Grid container sx={{ margin: '10% 0', borderRadius:'20px', boxShadow:'5px 5px 30px #dfdfde'}} spacing={3} bgcolor='#f4f8fd'>
              
                    <StyledGrid item mobile={12} laptop={6}>
                    <div>
                        <Image src={googleToolsImg}
                            alt='all in one'
                            layout='responsive'
                            sizes='(max-width: 640px) 100% 50%'
                            style={{borderRadius:'20px'}}
                        ></Image>
                    </div>

                </StyledGrid>

                <StyledGrid item mobile={12} laptop={6}>
                    <StyledTypography variant='h2'> Connect All Your Google Tools </StyledTypography>
                    <Typography variant='p' sx={{color:'primary.light'}}> We understand the central role that Google tools play in your daily workflow. That's why we created a seamless integration experience that enhances your productivity with the Google ecosystem. </Typography>

                </StyledGrid>
        

                <StyledGrid item mobile={12} laptop={6}>
                    <StyledTypography variant='h2'> Work Better with Teams </StyledTypography>
                    <Typography variant='p' sx={{color:'primary.light'}}> We understand the central role that Google tools play in your daily workflow. That's why we created a seamless integration experience that enhances your productivity with the Google ecosystem. </Typography>

                </StyledGrid>

                <StyledGrid item mobile={12} laptop={6}>
                    <div>
                        <Image src={teamsImg}
                            alt='all in one'
                            layout='responsive'
                            sizes='(max-width: 640px) 100% 50%'
                            style={{borderRadius:'20px'}}
                        ></Image>
                    </div>

                </StyledGrid>
                <StyledGrid item mobile={12} laptop={6}>
                    <div>
                        <Image src={otherToolsImg}
                            alt='all in one'
                            layout='responsive'
                            sizes='(max-width: 640px) 100% 50%'
                            style={{borderRadius:'20px'}}
                        ></Image>
                    </div>

                </StyledGrid>

                <StyledGrid item mobile={12} laptop={6}>
                    <StyledTypography variant='h2'> And So Much More! </StyledTypography>
                    <Typography variant='p' sx={{color:'primary.light'}}> We understand the central role that Google tools play in your daily workflow. That's why we created a seamless integration experience that enhances your productivity with the Google ecosystem. </Typography>

                </StyledGrid>
           
                

            </Grid>



        </Box>
    );
};

export default AllTools;