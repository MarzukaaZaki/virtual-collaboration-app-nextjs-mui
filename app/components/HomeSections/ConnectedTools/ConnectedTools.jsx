import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import Marquee from 'react-fast-marquee';
import googleCalendarImg from '../../../../public/assets/tools-images/google-calendar.png';
import googleDriveImg from '../../../../public/assets/tools-images/google-drive.png';
import notionImg from '../../../../public/assets/tools-images/notion.png';
import telegramImg from '../../../../public/assets/tools-images/telegram.png';
import miroImg from '../../../../public/assets/tools-images/miro.png';
import githubImg from '../../../../public/assets/tools-images/github.png';
import Image from 'next/image';
import SectionTitle from '../../SectionTitle/SectionTitle';

const ConnectedTools = () => {
    return (
        <Box sx={{marginLeft:'5%'}}>
            <SectionTitle subHeading='Connect Tellect'/>
            <Grid container>
                <Grid item mobile={12} laptop={5}>
                    <Typography variant='h2' sx={{fontWeight:'600'}} gutterBottom>We work the way you do</Typography>
                    <Typography variant='p' gutterBottom>Connect Tellect with the solutions you use everyday to drive efficiency and achieve your business goals.</Typography>
                    <br /> <br />
                    <Button variant='contained' sx={{marginBottom:'10px'}}> Explore Integrations </Button>
                </Grid>
                <Grid item mobile={12} laptop={7} >
                    <Marquee speed={30} >
                        <Card sx={{ maxWidth: 260, minHeight: 200, marginLeft: '20px' }}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" sx={{bgcolor:'white'}}>
                                        <Image src={googleCalendarImg} width={40} height={40} alt='Google Calendar'></Image>
                                    </Avatar>
                                }

                                title="Google Calendar"
                                subheader="Productivity"
                            />
                            <CardActionArea>
                                <CardContent>

                                    <Typography variant="body2" color="text.secondary">
                                        Seamlessly sync your apps events and meetings with users Google Calendars.
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://d2ydtwisqcxv72.cloudfront.net/220119_Tips-for-Google-Calendar-time-blocking_Blog.jpg"
                                    alt="green iguana"
                                    sx={{ padding: '20px' }}
                                />

                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 260, minHeight: 200, marginLeft: '20px' }}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" sx={{bgcolor:'white'}}>
                                        <Image src={googleDriveImg} width={40} height={40} alt='Google Drive'></Image>
                                    </Avatar>
                                }

                                title="Google Drive"
                                subheader="Data Storage"
                            />
                            <CardActionArea>
                                <CardContent>

                                    <Typography variant="body2" color="text.secondary">
                                    Access documents, spreadsheets, and files stored in Google Drive from within your app.
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://images.hindustantimes.com/tech/img/2022/11/07/960x540/DriveCollaborationHeaderResized_1616490580306_1667797877649_1667797877649.png"
                                    alt="green iguana"
                                    sx={{ padding: '20px' }}
                                />

                            </CardActionArea>
                        </Card>
                     
                        <Card sx={{ maxWidth: 260, minHeight: 200, marginLeft: '20px' }}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" sx={{bgcolor:'white'}}>
                                        <Image src={notionImg} width={40} height={40} alt='Notion'></Image>
                                    </Avatar>
                                }

                                title="Notion"
                                subheader="Productivity"
                            />
                            <CardActionArea>
                                <CardContent>

                                    <Typography variant="body2" color="text.secondary">
                                    Enhance collaboration by embedding Notion pages and databases directly within your app.
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://gridfiti.com/wp-content/uploads/2021/06/Gridfiti_Blog_FreeNotionTemplates_0_Hero.jpg"
                                    alt="green iguana"
                                    sx={{ padding: '20px' }}
                                />

                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 260, minHeight: 200, marginLeft: '20px' }}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" sx={{bgcolor:'white'}}>
                                        <Image src={telegramImg} width={40} height={40} alt='Telegram'></Image>
                                    </Avatar>
                                }

                                title="Telegram"
                                subheader="Messaging"
                            />
                            <CardActionArea>
                                <CardContent>

                                    <Typography variant="body2" color="text.secondary">
                                    Stay connected with real-time notifications and updates from Telegram groups and channels.
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://telegram.org/file/464001816/1/uiw6QIlHBoM.174455/5e3d254b95e0c72a81"
                                    alt="green iguana"
                                    sx={{ padding: '20px' }}
                                />

                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 260, minHeight: 200, marginLeft: '20px' }}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" sx={{bgcolor:'white'}}>
                                        <Image src={githubImg} width={40} height={40} alt='Github'></Image>
                                    </Avatar>
                                }

                                title="Github"
                                subheader="Collaboration"
                            />
                            <CardActionArea>
                                <CardContent>

                                    <Typography variant="body2" color="text.secondary">
                                    Simplify version control and code collaboration by linking GitHub repositories to your app.
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://devblogs.microsoft.com/visualstudio/wp-content/uploads/sites/4/2022/10/github-git-vs-workingtogether.png"
                                    alt="green iguana"
                                    sx={{ padding: '20px' }}
                                />

                            </CardActionArea>
                        </Card>
                     




                    </Marquee>

                </Grid>

            </Grid>
        </Box>
    );
};

export default ConnectedTools;