'use client'
import React, { useState, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";






// Import Swiper styles
import "swiper/css";
import { Box, useMediaQuery, useTheme } from '@mui/material';
import styles from './Workflows.module.css';
import Image from 'next/image';
import brainstormImg from '../../../../public/assets/workflow-images/brainstorm.png'
import videoConfImg from '../../../../public/assets/workflow-images/video-conference.png'
import webinarImg from '../../../../public/assets/workflow-images/webinar.png'
import projectImg from '../../../../public/assets/workflow-images/projectmgm.png'
import realtimeChatImg from '../../../../public/assets/workflow-images/realtime-chat.png'
import fileShareImg from '../../../../public/assets/workflow-images/file-sharing.png'
import SectionTitle from '../../SectionTitle/SectionTitle';

const Workflows = () => {
    const theme = useTheme();
    const isBelowLaptop = useMediaQuery(theme.breakpoints.down('laptop'));
    const noOfSlidesPerView = isBelowLaptop ? 1.2 : 3;
    return (
       <Box sx={{marginLeft:'5%'}}>
       <SectionTitle heading='Workflows Tuned for You' subHeading='Tellect in Action'></SectionTitle>
       <Swiper className="mySwiper"
                
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                slidesPerView={noOfSlidesPerView}
                style={{ width: '100%', height: '300px', marginBottom: '20px'}}>

                <SwiperSlide>
                    <div className={styles.workflowCardContainer}>
                        <div className={styles.workflowImageContainer} style={{backgroundColor:'#8B7FE3'}}>
                            <Image src={videoConfImg} width={42} height={42} className={styles.workflowImage}></Image>
                        </div>
                        <div className={styles.workflowTextContainer }>
                            <h2>
                               Video Conferencing
                            </h2>
                            <p>Experience the power of video conferencing within our platform, enabling productive interactions.</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.workflowCardContainer}>
                        <div className={styles.workflowImageContainer} style={{backgroundColor:'#51d8a4'}}>
                            <Image src={brainstormImg} width={42} height={42} className={styles.workflowImage}></Image>
                        </div>
                        <div className={styles.workflowTextContainer }>
                            <h2>
                               Brainstorming
                            </h2>
                            <p>Create and collaborate on ideas in real-time with your team or independently using our virtual brainstorming feature.</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.workflowCardContainer}>
                        <div className={styles.workflowImageContainer} style={{backgroundColor:'#e485aa'}}>
                            <Image src={webinarImg} width={42} height={42} className={styles.workflowImage}></Image>
                        </div>
                        <div className={styles.workflowTextContainer }>
                            <h2>
                            Events and Webinars
                            </h2>
                            <p>Engage in impactful virtual events and webinars, fostering interactive and informative sessions within our platform.</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.workflowCardContainer}>
                        <div className={styles.workflowImageContainer} style={{backgroundColor:'#40C4D5'}}>
                            <Image src={projectImg} width={42} height={42} className={styles.workflowImage}></Image>
                        </div>
                        <div className={styles.workflowTextContainer }>
                            <h2>
                               Project Management
                            </h2>
                            <p>Simplify project management, streamline workflows, and enhance team productivity with our various tools.</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.workflowCardContainer}>
                        <div className={styles.workflowImageContainer} style={{backgroundColor:'#c9d851'}}>
                            <Image src={realtimeChatImg} width={42} height={42} className={styles.workflowImage}></Image>
                        </div>
                        <div className={styles.workflowTextContainer }>
                            <h2>
                               Real-time Chatting
                            </h2>
                            <p>Stay connected and chat in real-time, facilitating instant communication and collaboration.</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.workflowCardContainer}>
                        <div className={styles.workflowImageContainer} style={{backgroundColor:'#d8a451'}}>
                            <Image src={fileShareImg} width={42} height={42} className={styles.workflowImage}></Image>
                        </div>
                        <div className={styles.workflowTextContainer }>
                            <h2>
                               Resource Sharing
                            </h2>
                            <p>Efficiently share and manage resources, enabling seamless collaboration and resource utilization.</p>
                        </div>

                    </div>
                </SwiperSlide>




            </Swiper>

       
       
       </Box>
    );
};

export default Workflows;