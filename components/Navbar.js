import Link from 'next/link'

import Styles from '../styles/navbar.module.css'

import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="Container">
      <nav className={Styles.navbar}>
        <h1 className="logo">
          <span className="text-p">
            <Image
                src="/img/LogoSombra.png"
                width="150"
                height="50"
                alt="Broadway Clean Services"
            />
            Broadway Clean Services
          </span>
        </h1>
        <ul className={Styles.menu}>
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