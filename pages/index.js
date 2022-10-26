import styles from '../styles/index.module.css'

export default function Home() {
    return (
        <header className={styles.showcase}>
            <div className={styles.showcase_content}>
                <h1 className="l-heading">
                    BROADWAY CLEAN SERVICES BEST CHOICE TO CLEAN YOUR SPACE
                </h1>
                <p className="lead">
                    A neat, clean and organized home brings a number of benefits to the whole family.
                </p>
                <p>
                    In addition to physical and mental well-being, it also relaxes and helps health.
                </p>
                <p>
                    It&#39;s an activity to throw away what you don&#39;t need and organize objects better, giving more practicality to everyday life.
                </p>
            </div>
        </header>
    );
  }