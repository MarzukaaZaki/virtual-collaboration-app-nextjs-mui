import React from 'react';
import FeaturedPosts from '../components/BlogSections/FeaturedPosts/FeaturedPosts';
import { Box } from '@mui/material';
import NewPosts from '../components/BlogSections/NewPosts/NewPosts';
import Banner from '../components/Banner/Banner';

const BlogPage = () => {
    return (
    <>
    <Banner title='Welcome to Tellect Blog' subTitle='Read all about our Real-time Video Conferencing, Task Management and Project Planning,: Seamless Communication with Chat and Messagingand much more!' />
        <Box sx={{margin:'5%'}}>
            
            <FeaturedPosts/>
            <NewPosts/>
            <FeaturedPosts/>
        </Box>
    
    </>
    );
};

export default BlogPage;