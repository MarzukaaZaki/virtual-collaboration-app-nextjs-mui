import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import bannerImg from '../../../../public/assets/online_meeting.gif'
// import dynamic from 'next/dynamic';
// const theme = dynamic(() => import('../../../theme/theme'), { ssr: false });



const HomeBanner = () => {

    return (
        <>
            <Grid container spacing={2} sx={{

                background: 'rgb(49,157,152)',
                background: 'linear-gradient(97deg, rgba(49,157,152,1) 0%, rgba(26,130,146,1) 0%, rgba(64,173,156,1) 46%, rgba(67,176,157,1) 58%, rgba(91,208,164,1) 94%)'
            }}>

                <Grid item mobile={12} laptop={6}  >
                    <div style={{

                        marginTop: '10%',
                        marginLeft: '6%',
                    }}>
                        <Typography variant='h1'
                            sx={{
                                fontWeight: '700',
                                color: '#124d49',
                                marginBottom: '28px'
                            }}

                            gutterBottom>
                            Collaboration at your Fingertips.
                        </Typography>
                        <Typography variant="h5" component="div"

                            sx={{
                                fontWeight: '400',
                                color: '#074a53',
                                marginBottom: '28px'

                            }}
                            gutterBottom>
                            Your Passport to Virtual Collaboration and Exciting Events. Unite, Collaborate, and Celebrate Remotely!
                        </Typography>

                        <Button size='large' variant="contained" sx={{
                            marginRight: '20px',
                            fontWeight: 'bold',
                            padding: '13px 30px'
                        }} >
                         
                            Watch Video</Button>
                        <Button size='large' variant="contained" sx={{
                            marginRight: '10px',
                            fontWeight: 'bold',
                            padding: '13px 30px'
                        }} >Try for free</Button>


                    </div>



                </Grid>
                <Grid item mobile={12} laptop={6}>
                    {/* <video width='100%' autoPlay loop muted src={require('../../../../public/assets/video_banner.mp4')}></video> */}
                    <Image width={410} height={450} src={bannerImg} alt='banner image'></Image>

                </Grid>

            </Grid>


        </>
    );
};

export default HomeBanner;