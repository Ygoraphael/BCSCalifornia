import styles from '../styles/index.module.css'

export default function Home() {
    return (
      <div className="container p-3">
        <header id={styles.showcase}>
            <div class={styles.showcase_content}>
                <h1 class="l-heading">
                    The Sky Is The Limit
                </h1>
                <p class="lead">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti saepe assumenda
                    animi libero numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, consectetur.
                </p>
                <a href="#what" class="btn">Read More</a>
            </div>
        </header>
      </div>
    );
  }