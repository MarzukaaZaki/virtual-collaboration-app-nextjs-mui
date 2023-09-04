import Image from 'next/image'
import styles from './page.module.css'
import HomeBanner from './components/HomeSections/HomeBanner/HomeBanner'
import Companies from './components/HomeSections/Companies/Companies'

export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <Companies/>
    </div>
  )
}
