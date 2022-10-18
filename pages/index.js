import styles from '../styles/index.module.css'

export default function Home() {
    return (
      <div className="container p-3">
        <header className={styles.showcase}>
            <div className={styles.showcase_content}>
                <h1 className="l-heading">
                    BROADWAY CLEAN SERVICES MAKING YOUR LIFE EASY
                </h1>
                <p className="lead">
                    A neat, clean and organized home brings a number of benefits to the whole family.
                    In addition to physical and mental well-being, it also relaxes and helps health.
                    It's an activity to throw away what you don't need and organize objects better, giving more practicality to everyday life.
                </p>
            </div>
        </header>

      </div>
    );
  }