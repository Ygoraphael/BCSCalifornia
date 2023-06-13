import Styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>
        <span> Copyright &copy; {new Date().getFullYear()}, Broadway Clean Services, All Rights Reserverd</span>
      </p>
    </footer>
  )
}

export default Footer;