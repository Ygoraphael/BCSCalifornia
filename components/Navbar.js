import Link from 'next/link'
import NextImage from 'next/image'
import Styles from '../styles/Navbar.module.css'
import Logo from "../public/img/LogoSombra.png";

export default function Navbar() {
  return (
    <div className="Container">
      <nav className={Styles.navbar}>
        <h1 className="logo">
          <span className="text-p">
              <NextImage src={Logo} width={150} height={50} alt="Broadway Clean Services" loading="lazy" />
              Broadway Clean Services
          </span>
        </h1>
        <ul className={Styles.menu}>
          <li> <Link href="/" prefetch>Home</Link></li>
          <li> <Link href="/services" prefetch>Services</Link></li>
          <li> <Link href="/price">Price and Booking</Link></li>
          <li> <Link href="/yelp">Yelp Reviews</Link></li>
          <li> <Link href="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>

    </div>
  )
}