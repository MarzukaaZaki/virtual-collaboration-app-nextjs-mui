'use client'
import Image from 'next/image'
import styles from './page.module.css'
import HomeBanner from './components/HomeSections/HomeBanner/HomeBanner'
import Companies from './components/HomeSections/Companies/Companies'
import Perks from './components/HomeSections/Perks/Perks'
import QuickLinks from './components/HomeSections/QuickLinks/QuickLinks'
import Workflows from './components/HomeSections/Workflows/Workflows'
import ConnectedTools from './components/HomeSections/ConnectedTools/ConnectedTools'
import Testimonials from './components/HomeSections/Testimonials/Testimonials'
import FeaturedBlogPosts from './components/HomeSections/FeaturedBlogPosts/FeaturedBlogPosts'
import Statistics from './components/HomeSections/Statistics/Statistics'
import ReviewForm from './components/HomeSections/ReviewForm/ReviewForm'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(()=>{
    Aos.init();

  },[])


  const homeSections = [
    {component: <HomeBanner/>, duration: 3300},
    {component: <Perks/>, duration: 3300},
    {component: <Companies/>, duration: 3300},
    {component: <Statistics/>, duration: 3300},
    {component: <Workflows/>, duration: 3300},
    {component: <ConnectedTools/>, duration: 3300},
    {component: <Testimonials/>, duration: 3300},
    {component: <QuickLinks/>, duration: 3300},
    {component: <FeaturedBlogPosts/>, duration: 3300},
  ]


  return (
    <div>
      {
        homeSections.map((homeSection, index)=> <div key={index} data-aos='fade-up' data-aos-duration={homeSection.duration} >{homeSection.component}</div>)
      }
      {/* <HomeBanner />
      <Perks />
      <Companies />
      <Statistics/>
      <Workflows/>
      <ConnectedTools/>
      <Testimonials/>
      <QuickLinks />
      <FeaturedBlogPosts/> */}
      {/* <ReviewForm/> */}
      
      


    </div>
  )
}
