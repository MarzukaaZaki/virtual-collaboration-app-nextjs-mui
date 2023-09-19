import { Grid} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './QuickLinks.module.css'
import newUserImg from '../../../../public/assets/quick-link-images/newto.jpg'
import planImg from '../../../../public/assets/quick-link-images/personal_team.jpg'
import hybridWorkImg from '../../../../public/assets/quick-link-images/hybrid.jpg'
import usageImg from '../../../../public/assets/quick-link-images/student_or_prof.jpg'
import justAnImg from '../../../../public/assets/undraw_walking_in_rain_jw4i.png'
const QuickLinks = () => {
   
    return (
       <Grid container>
        <Grid item mobile={12} tablet={6} laptop={3} className={styles.container}>
            <Image
            src={newUserImg}
            layout='responsive' className={styles.image} style={{maxHeight:'225px'}}>

            </Image>
            <div className={styles.textcontainer}>
                <p>New to Collaborating Virtually?</p>
            </div>
        </Grid>
        <Grid item mobile={12} tablet={6} laptop={3} className={styles.container} >
            <Image
            src={planImg}
            layout='responsive' className={styles.image}>

            </Image>
            <div className={styles.textcontainer}>
                <p> For Team or Personal Use </p>
            </div>
        </Grid>
        <Grid item mobile={12} tablet={6} laptop={3} className={styles.container}>
            <Image
            src={usageImg}
            layout='responsive' className={styles.image}
            >

            </Image>
            <div className={styles.textcontainer}>
                <p>Student or a Professional?</p>
            </div>
        </Grid>
        <Grid item mobile={12} tablet={6} laptop={3} className={styles.container} >
            <Image
            src={hybridWorkImg}
            layout='responsive' className={styles.image}>

            </Image>
            <div className={styles.textcontainer}>
                <p>Our Hybrid Work Options</p>
            </div>
        </Grid>

       </Grid>
    );
};

export default QuickLinks;