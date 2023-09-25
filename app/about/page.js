import React from 'react';
import Banner from '../components/Banner/Banner';
import { Box} from '@mui/material';
import AboutWork from '../components/AboutSections/AboutWork/AboutWork';

const AboutPage = () => {
    return (
        <Box sx={{
            
            // background: 'rgb(57,187,214)',
            // background: 'linear-gradient(254deg, rgba(57,187,214,1) 0%, rgba(197,245,255,1) 39%, rgba(255,255,255,1) 91%)'
        }}>
            
            <Banner 
            title='The Virtual Collaboration Expert'
            subTitle="In today's fast-paced and interconnected world traditional office settings are evolving rapidly Businesses and teams are becoming more dispersed and the need for seamless virtual collaboration has never been greater Thats where our virtual collaboration app comes in" /> 
            <AboutWork/>

        </Box>
    );
};

export default AboutPage;