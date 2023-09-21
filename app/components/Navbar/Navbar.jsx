"use client";
import { AppBar, Button, Tab, Tabs, Toolbar, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import logoImg from '../../../public/assets/cover.png';
import NavDrawer from '../NavDrawer/NavDrawer';
import { useTheme } from '@emotion/react';

const Navbar = () => {
    const navLinks = ['About', 'Features', 'Integrations', 'Blog'];
    const [value, setValue] = useState(1);
    const theme = useTheme();
    // console.log(theme);
    const isSizeBelowDesktop = useMediaQuery(theme.breakpoints.down('desktop'));

    return (
        <>
            <AppBar elevation={0} sx={{
                background: 'rgb(49,157,152)',
                background: 'linear-gradient(97deg, rgba(49,157,152,1) 0%, rgba(26,130,146,1) 0%, rgba(64,173,156,1) 46%, rgba(67,176,157,1) 58%, rgba(91,208,164,1) 94%)'
            }}>
                <Toolbar>
                    <Image src={logoImg} alt='logo' width={153} height={65} ></Image>
                    {
                        isSizeBelowDesktop ?
                            <>

                                <NavDrawer />
                            </>
                            :
                            <>
                                {/* <Image src={logoImg} alt='logo' width={153} height={65}></Image> */}
                                <Tabs
                                    sx={{
                                        color:'white'
                                    }}
                                    value={value}
                                    indicatorColor='white'
                                    onChange={(event, value) => setValue(value)}
                                    >
                                    {
                                        navLinks.map((navLink, index) =>
                                            <Tab key={index} label={navLink}></Tab>)
                                    }
                                   
                                </Tabs>
                                <Button variant='contained' sx={{ border: '2.3px solid #124d49',
                                padding: '12px', 
                                marginLeft: 'auto', 
                                fontSize: '13px', 
                                fontWeight: 'bolder', 
                                color: '#124d49', 
                                backgroundColor: '#5bd0a4' }}> Create an Account</Button>
                            </>


                    }

                </Toolbar>
            </AppBar>



        </>
    );
};

export default Navbar;