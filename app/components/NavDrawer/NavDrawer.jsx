import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import React, { useState } from 'react';
import theme from '../../theme/theme'
import Link from 'next/link';
const NavDrawer = () => {
    const [openNavDrawer, setOpenNavDrawer] = useState(false);
    const navLinks = ['about', 'features', 'integrations', 'blog'];
    return (
        <>
            <Drawer anchor='top' open={openNavDrawer} sx={{zIndex: theme.zIndex.navDrawer}} onClose={() => setOpenNavDrawer(false)}>
                <List sx={{marginTop:'56px', backgroundColor: '#386766'}}>
                    {
                        navLinks.map((navLink, index) =>
                        <Link key={index} href={`/${navLink}`} style={{textDecoration:'none', textTransform:'capitalize'}}>
                            <ListItemButton  sx={{ margin: '2px 6px' }}>

                                <ListItemIcon>

                                    <ListItemText sx={{color:'white'}}>
                                        {navLink}
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        </Link>)
                    }

                </List>
            </Drawer>
            <IconButton onClick={() => setOpenNavDrawer(!openNavDrawer)}
                sx={{ color: 'white', marginLeft: 'auto' }}>
                <MenuRoundedIcon />
            </IconButton>
        </>
    );
};

export default NavDrawer;