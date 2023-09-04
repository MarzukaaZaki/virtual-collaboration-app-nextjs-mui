import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import colehaanLogo from '../../../../public/assets/brand-logos/ColeHaan_Primary_Logo.png'
import airbnbLogo from '../../../../public/assets/brand-logos/Airbnb_Primary_Logo.png'
import xeroxLogo from '../../../../public/assets/brand-logos/Xerox_Primary_Logo.png'
import travelokaLogo from '../../../../public/assets/brand-logos/Traveloka_Primary_Logo.png'
import mediumLogo from '../../../../public/assets/brand-logos/Medium.png'

const Companies = () => {
    return (
        <>
        
        <Grid container spacing={2}
        sx={{
            columnGap:6,
            paddingLeft:'20px',
            bgcolor:'#bbded9',
            
        }}>
            <Grid item mobile={12} laptop={2}>
            <Image width={140} src={colehaanLogo} alt='brand1'
            style={{ filter: 'grayscale(100%)'}}></Image>
            </Grid>
            <Grid item mobile={12} laptop={2}>
            <Image width={140} src={xeroxLogo} alt='brand1'
            style={{ filter: 'grayscale(100%)'}}></Image>
            </Grid>
            <Grid item mobile={12} laptop={2}>
            <Image width={140} src={travelokaLogo} alt='brand1'
            style={{ filter: 'grayscale(100%)'}}></Image>
            </Grid>
            <Grid item mobile={12} laptop={2}>
            <Image width={140} src={airbnbLogo} alt='brand1'
            style={{ filter: 'grayscale(100%)', marginTop:'13px'}}></Image>
            </Grid>
            <Grid item mobile={12} laptop={2}>
            <Image width={140} src={mediumLogo} alt='brand1'
            style={{ filter: 'grayscale(100%)',  marginTop:'13px'}}></Image>
            </Grid>

            
           
            
            
           

        </Grid>
        
        </>
    );
};

export default Companies;