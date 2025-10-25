import styles from "../../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.profileCard}>
          <div className={styles.avatar}></div>
          <div className={styles.nicknameBlock}>
            <h1 className={styles.nickname}>MR PZOR</h1>
            <p className={styles.subtitle}>PRECISION PLAYER</p>
          </div>
        </div>
      </div>
    </section>
  );
}
