"use client";
import { AppBar, Button, Tab, Tabs, Toolbar, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import logoImg from '../../../public/assets/cover.png';
import NavDrawer from '../NavDrawer/NavDrawer';
import { useTheme } from '@emotion/react';
import Link from 'next/link';

const Navbar = () => {
    const navLinks = ['about', 'features', 'integrations', 'blog'];
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
                    <Link href='/'> <Image src={logoImg} priority alt='logo' width={153} height={65} ></Image></Link>
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
                                        color: 'white'
                                    }}
                                    value={value}
                                    indicatorColor='white'
                                    onChange={(event, value) => setValue(value)}
                                >
                                    {
                                        navLinks.map((navLink, index) =>
                                            <Link href={`/${navLink}`} key={index}> <Tab label={navLink} sx={{ color: 'white', fontWeight: 'bold' }}></Tab></Link>)
                                    }

                                </Tabs>
                                
                                    <Button variant='contained' size='small' sx={{
                                        border: '2.3px solid #124d49',
                                        padding: '12px',
                                        marginLeft: 'auto',
                                        fontSize: '13px',
                                        fontWeight: 'bolder',
                                        color: '#124d49',
                                        backgroundColor: '#5bd0a4'
                                    }}> <Link href='/login' style={{textDecoration:'none', color:'primary.main'}}>Sign In To Start free trial </Link></Button>
                               

                            </>


                    }

                </Toolbar>
            </AppBar>



        </>
    );
};

export default Navbar;