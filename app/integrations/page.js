import { Box } from '@mui/material';
import React from 'react';
import Banner from '../components/Banner/Banner';
import AllTools from '../components/IntegrationSections/AllTools/AllTools';

const IntegrationsPage = () => {
    return (
        <Box sx={{ textAlign:'center'}}>
            <Banner title='Connect Tellect to Your System'
            subTitle='Unlock the full potential of Tellect by seamlessly integrating it with other powerful tools and platforms. Our integrations make it easier than ever to streamline your workflow, boost productivity, and enhance collaboration. '/>
            <AllTools/>
        </Box>
    );
};

export default IntegrationsPage;