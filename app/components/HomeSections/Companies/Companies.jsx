import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import colehaanLogo from '../../../../public/assets/brand-logos/ColeHaan_Primary_Logo.png'
import airbnbLogo from '../../../../public/assets/brand-logos/Airbnb_Primary_Logo.png'
import xeroxLogo from '../../../../public/assets/brand-logos/Xerox_Primary_Logo.png'
import travelokaLogo from '../../../../public/assets/brand-logos/Traveloka_Primary_Logo.png'
import mediumLogo from '../../../../public/assets/brand-logos/Medium.png'
import ciscoLogo from '../../../../public/assets/brand-logos/Cisco_Logo.png'




const Companies = () => {
    return (
        <div>
        <div style={{
            color:'gray',
            textAlign:'center',
            margin:'40px 0 10px 0',
            fontSize:'1rem',
            fontWeight:'500',
            textTransform:'uppercase'
        }}>
            Trusted by 5000+ companies
        </div>
        
        <Grid container spacing={2}
        sx={{
           textAlign:'center',
           marginLeft:{ laptop: '10%'},
            width:'80%'
            
        }}>
            <Grid item mobile={12} tablet={2.5}  laptop={2} >
            <Image width={140} src={colehaanLogo} alt='brand1'
            style={{ filter: 'grayscale(100%)'}}></Image>
            </Grid>
            <Grid item mobile={12} tablet={2.5} laptop={2}>
            <Image width={140} src={xeroxLogo} alt='brand1'
            style={{ filter: 'grayscale(100%)'}}></Image>
            </Grid>
            <Grid item mobile={12} tablet={2.5} laptop={2}>
            <Image width={140} src={travelokaLogo} alt='brand1'
            style={{ filter: 'grayscale(100%)'}}></Image>
            </Grid>
            <Grid item mobile={12} tablet={2.5}  laptop={2}>
            <Image width={140} src={airbnbLogo} alt='brand1'
            style={{ filter: 'grayscale(100%)', marginTop:'13px'}}></Image>
            </Grid>
            <Grid item mobile={12} tablet={2.5} laptop={2}>
            <Image width={140} src={mediumLogo} alt='brand1'
            style={{ filter: 'grayscale(100%)',  marginTop:'13px'}}></Image>
            </Grid>
            <Grid item mobile={12} tablet={2.5} laptop={2}>
            <Image width={100} src={ciscoLogo} alt='brand1'
            style={{ filter: 'grayscale(100%)',  marginTop:'-10px', marginLeft:'-22px'}}></Image>
            </Grid>

            
           
            
            
           

        </Grid>
        
        </div>
    );
};

export default Companies;