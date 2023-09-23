import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <Box sx={{

            textAlign: 'left'

        }}>
            <Typography variant='p' sx={{
                textTransform: 'uppercase', fontWeight: '600', fontSize: '15px', background: '#095B71',
                background: 'linear-gradient(to right, #095B71 0%, #147C93 50%, #43b09d 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}>{subHeading}</Typography>
            <Typography variant='h2' sx={{ fontWeight: '700' }}>{heading}</Typography>
        </Box>
    );
};

export default SectionTitle;