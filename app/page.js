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

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Perks />
      <Companies />
      <Workflows/>
      <ConnectedTools/>
      <Testimonials/>
      <QuickLinks />
      <FeaturedBlogPosts/>
      <Statistics/>
      


    </div>
  )
}
