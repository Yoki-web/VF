import styles from "../../styles/FavoriteAgent.module.css";

export default function FavoriteAgent() {
  return (
    <section className={styles.favoriteAgent}>
      {/* Заголовок, выходящий за блок */}
      <h3 className={styles.agentTitle}>Любимый персонаж</h3>

      <div className={styles.agentWrapper}>
        <img
          src="/images/agent.full/jett.png"
          alt="Jett"
          className={styles.agentFull}
        />
      </div>

      {/* Продлённый низ блока для имени */}
      <div className={styles.agentFooter}>
        <span className={styles.agentName}>JETT</span>
      </div>
    </section>
  );
}
