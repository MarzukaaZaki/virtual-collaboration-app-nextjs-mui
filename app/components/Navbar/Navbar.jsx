import { AppBar, Button, Tab, Tabs, Toolbar } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logoImg from '../../../public/assets/cover.png';
const Navbar = () => {
    return (
        <>
        <AppBar>
                <Toolbar>
                    <Image src={logoImg} alt='logo' width={153} height={65}></Image>
                    <Tabs textColor='white' >
                        <Tab label='About' />
                        <Tab label='Features' />
                        <Tab label='Integrations' />
                        <Tab label='Blog' />
                        <Tab label='Pricing' />
                    </Tabs>
                    <Button variant='contained' sx={{  border: '1.4px solid white', padding:'12px', marginLeft: 'auto' }}> Create an Account</Button>
                   

                </Toolbar>

            </AppBar>
        
        
        
        </>
    );
};

export default Navbar;