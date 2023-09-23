import Image from 'next/image'
import styles from './page.module.css'
import HomeBanner from './components/HomeSections/HomeBanner/HomeBanner'
import Companies from './components/HomeSections/Companies/Companies'
import Perks from './components/HomeSections/Perks/Perks'
import QuickLinks from './components/HomeSections/QuickLinks/QuickLinks'
import Workflows from './components/HomeSections/Workflows/Workflows'
import ConnectedTools from './components/HomeSections/ConnectedTools/ConnectedTools'
import Testimonials from './components/HomeSections/Testimonials/Testimonials'

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Companies />
      
      {/* <Perks /> */}
      <Workflows/>
      <ConnectedTools/>
      <Testimonials/>
      {/* <QuickLinks /> */}
      


    </div>
  )
}
