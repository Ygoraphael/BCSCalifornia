import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

import Image from 'next/image'

export default function Navbar() {
  return (
    <div class="Container">
      <nav id={styles.navbar}>
        <h1 class="logo">
          <span class="text-p">
          <Image
              src="/img/LogoSombra.png"
              width="350"
              height="200"
              alt="Broadway Clean Services"
            />
            Broadway Clean Services
          </span>
        </h1>
        <ul class={styles.menu}>
          <li> <Link href="/">Home</Link></li>
          <li> <Link href="/services"><a>Services</a></Link></li>
          <li> <Link href="/price"><a>Price and Booking</a></Link></li>
          <li> <Link href="/yelp"><a>Yelp Reviews</a></Link></li>
          <li> <Link href="/portfolio"><a>Portfolio</a></Link></li>
        </ul>
      </nav>

    </div>
  )
}