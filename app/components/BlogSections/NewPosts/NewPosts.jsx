import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import blogImg1 from '../../../../public/assets/blog-images/person-working-computer.jpg';
import blogImg2 from '../../../../public/assets/blog-images/person-working-computer2.jpg'
import Image from 'next/image'; 
import { HiClipboardDocument } from 'react-icons/hi2'
import { MdWorkspacesFilled } from 'react-icons/md'
const NewPosts = () => {
    return (
        <Box sx={{marginBottom:'5%'}}>
            <Grid container spacing={2}>
                <Grid item mobile={12} laptop={4}>
                    <Card sx={{ maxWidth: 300, minHeight:410 }}>
                        <CardActionArea>
                            <Image src={blogImg1} layout='responsive'/>
                            <CardContent sx={{ padding: '10px'}}>
                                <Box sx={{ display: 'flex', marginTop: '10%' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 'bold', marginBottom: '10%', marginRight: '20px' }}> Security</Typography>
                                    <Typography variant='body2' sx={{ marginBottom: '10px', color: '#5a5c5b', fontWeight: 'bold' }}>Sep 21,2023 - 2 min read</Typography>
                                </Box>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '10%' }}>
                                    How to Secure Your Data in the Cloud with Tellect
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'  }}>
                                    <Typography variant="body">
                                        Read More
                                    </Typography>
                                    <MdArrowForward sx={{marginTop:'10%'}}/>
                                </Box>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item mobile={12} laptop={4}>
                    <Card sx={{ maxWidth: 300, minHeight:410 }}>
                        <CardActionArea>
                            <Image src={blogImg2} layout='responsive'/>
                            <CardContent sx={{ padding: '16px'}}>
                                <Box sx={{ display: 'flex', marginTop: '10%' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 'bold', marginBottom: '10%', marginRight: '20px' }}> How-tos</Typography>
                                    <Typography variant='body2' sx={{ marginBottom: '10px', color: '#5a5c5b', fontWeight: 'bold' }}>Sep 21,2023 - 2 min read</Typography>
                                </Box>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '10%' }}>
                                Use Tellect to Plan and Execute Your Projects
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'  }}>
                                    <Typography variant="body">
                                        Read More
                                    </Typography>
                                    <MdArrowForward sx={{marginTop:'10%'}}/>
                                </Box>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item mobile={12} laptop={4} sx={{marginBottom:'5%'}}>
                    <Card sx={{ maxWidth: 300, minHeight:410 ,bgcolor:'#215757', color:'white'}}>
                        <CardActionArea>
                           
                            <CardContent sx={{ padding: '25px'}}>
                               
                                    <HiClipboardDocument style={{fontSize:'44px', marginBottom:'10%'}} />
                                    <Typography variant='body2' sx={{ marginBottom: '10px', color: '#aacd43', fontWeight: 'bold' }}>Sep 21,2023 - 2 min read</Typography>
                           
                                <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: 'bold', marginBottom: '10%' }}>
                                    How to Secure Your Data in the Cloud with Tellect
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'  }}>
                                    <Typography variant="body">
                                        Read More
                                    </Typography>
                                    <MdArrowForward sx={{marginTop:'10%'}}/>
                                </Box>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>










                <Grid item mobile={12} laptop={4} >
                    <Card sx={{ maxWidth: 300, minHeight:410 ,bgcolor:'#183c7a', color:'white'}}>
                        <CardActionArea>
                           
                            <CardContent sx={{ padding: '25px'}}>
                               
                                    <MdWorkspacesFilled style={{fontSize:'44px', marginBottom:'10%'}} />
                                    <Typography variant='body2' sx={{ marginBottom: '10px', color: '#c7b338', fontWeight: 'bold' }}>Sep 21,2023 - 2 min read</Typography>
                           
                                <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: 'bold', marginBottom: '10%' }}>
                                Customize Workspaces: Boosts Productivity with Smart Features
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'  }}>
                                    <Typography variant="body">
                                        Read More
                                    </Typography>
                                    <MdArrowForward sx={{marginTop:'10%'}}/>
                                </Box>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item mobile={12} laptop={4}>
                    <Card sx={{ maxWidth: 300, minHeight:410 }}>
                        <CardActionArea>
                            <Image src={blogImg2} layout='responsive'/>
                            <CardContent sx={{ padding: '16px'}}>
                                <Box sx={{ display: 'flex', marginTop: '10%' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 'bold', marginBottom: '10%', marginRight: '20px' }}> How-tos</Typography>
                                    <Typography variant='body2' sx={{ marginBottom: '10px', color: '#5a5c5b', fontWeight: 'bold' }}>Sep 21,2023 - 2 min read</Typography>
                                </Box>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '10%' }}>
                                Use Tellect to Plan and Execute Your Projects
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'  }}>
                                    <Typography variant="body">
                                        Read More
                                    </Typography>
                                    <MdArrowForward sx={{marginTop:'10%'}}/>
                                </Box>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item mobile={12} laptop={4}>
                    <Card sx={{ maxWidth: 300, minHeight:410 }}>
                        <CardActionArea>
                            <Image src={blogImg2} layout='responsive'/>
                            <CardContent sx={{ padding: '16px'}}>
                                <Box sx={{ display: 'flex', marginTop: '10%' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 'bold', marginBottom: '10%', marginRight: '20px' }}> How-tos</Typography>
                                    <Typography variant='body2' sx={{ marginBottom: '10px', color: '#5a5c5b', fontWeight: 'bold' }}>Sep 21,2023 - 2 min read</Typography>
                                </Box>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '10%' }}>
                                Use Tellect to Plan and Execute Your Projects
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold'  }}>
                                    <Typography variant="body">
                                        Read More
                                    </Typography>
                                    <MdArrowForward sx={{marginTop:'10%'}}/>
                                </Box>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
};

export default NewPosts;