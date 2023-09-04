"use client";
import { AppBar, Button, Tab, Tabs, Toolbar, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import logoImg from '../../../public/assets/cover.png';
import NavDrawer from '../NavDrawer/NavDrawer';
import { useTheme } from '@emotion/react';

const Navbar = () => {
    const navLinks = ['About', 'Features','Integrations', 'Blog'];
    const [value, setValue] = useState();
    const theme = useTheme();
    // console.log(theme);
    const isSizeBelowDesktop = useMediaQuery(theme.breakpoints.down('desktop'));
    
    return (
        <>
        <AppBar>
        <Toolbar>
        <Image src={logoImg} alt='logo' width={153} height={65} style={{marginLeft:'-20px'}}></Image>
                {
                    isSizeBelowDesktop ?
                    <>
                    
                    <NavDrawer/>
                    </>
                    :
                    <>
                    {/* <Image src={logoImg} alt='logo' width={153} height={65}></Image> */}
                    <Tabs textColor='white' 
                    value={value} 
                    indicatorColor='white' 
                    onChange={(event, value)=>setValue(value)}>
                        {
                            navLinks.map((navLink, index)=>
                            <Tab key={index} label={navLink}></Tab> )
                        }
                    {/* <Tab label="About"></Tab>
                    <Tab label="Features"></Tab>
                    <Tab label="Integration"></Tab>
                    <Tab label="Blog"></Tab> */}
                    </Tabs>
                    <Button variant='contained' sx={{  border: '1.4px solid white', padding:'12px', marginLeft: 'auto', fontSize:'11px', fontWeight:'medium' }}> Create an Account</Button>
                    </>

                
                }
               
               </Toolbar>
            </AppBar>
        
        
        
        </>
    );
};

export default Navbar;