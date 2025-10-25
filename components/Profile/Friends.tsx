import styles from "../../styles/Friends.module.css";

export default function Friends() {
  return (
    <section className={styles.friendsBlock}>
      <h3 className={styles.friendsTitle}>Друзья онлайн</h3>
      <ul className={styles.friendsList}>
        <li className={`${styles.friend} ${styles.online}`}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>A</div>
            <span className={styles.statusDot}></span>
          </div>
          <div className={styles.info}>
            <span className={styles.name}>PLAYER 1</span>
            <span className={styles.status}>В матче</span>
          </div>
        </li>

        <li className={`${styles.friend} ${styles.online}`}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>B</div>
            <span className={styles.statusDot}></span>
          </div>
          <div className={styles.info}>
            <span className={styles.name}>PLAYER 2</span>
            <span className={styles.status}>В лобби</span>
          </div>
        </li>

        <li className={`${styles.friend} ${styles.offline}`}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>C</div>
            <span className={styles.statusDot}></span>
          </div>
          <div className={styles.info}>
            <span className={styles.name}>PLAYER 3</span>
            <span className={styles.status}>Оффлайн</span>
          </div>
        </li>
      </ul>
    </section>
  );
}
