import styles from "../../styles/RankBlock.module.css";

export default function RankBlock() {
  return (
    <section className={styles.rankBlock}>
      <div className={styles.rankIconWrapper}>
        <div className={`${styles.badge} ${styles.hexBadge}`}>
          <span className={styles.badgeNumber}>17</span>
          {/* вращающийся блик */}
          <div className={styles.badgeHighlight}></div>
        </div>
      </div>

      <div className={styles.rankInfo}>
        <h3 className={styles.rankTitle}>Immortal 2</h3>

        <div className={styles.rankProgress}>
          <div className={styles.rankProgressFill}></div>
        </div>

        <span className={styles.rankDetails}>120 / 300 RR • Топ 3% игроков</span>
      </div>
    </section>
  );
}
