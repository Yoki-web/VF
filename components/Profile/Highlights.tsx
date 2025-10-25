import styles from "../../styles/Highlights.module.css";

export default function Highlights() {
  const clips = [
    { map: "SPLIT", agent: "JETT", date: "24/10/25", image: "/images/maps/split.jpg", avatar: "/images/agent ava/jett.png" },
    { map: "BIND", agent: "JETT", date: "19/10/25", image: "/images/maps/bind.jpg", avatar: "/images/agent ava/jett.png" },
  ];

  const maxSlots = 3;

  return (
    <section className={styles.highlightsBlock}>
      <h3 className={styles.highlightsTitle}>Хайлайты</h3>
      <div className={styles.highlightsList}>
        {clips.map((clip, index) => (
          <div key={index} className={styles.highlightCard}>
            <img src={clip.image} alt={clip.map} className={styles.mapImage} />
            <div className={styles.cardOverlay}>
              <div className={styles.mapRow}>
                <span className={styles.mapName}>{clip.map}</span>
                <img src={clip.avatar} alt={clip.agent} className={styles.agentAvatar} />
              </div>
              <span className={styles.agent}>{clip.agent}</span>
              <span className={styles.date}>{clip.date}</span>
              <div className={styles.playIcon}>▶</div>
            </div>
          </div>
        ))}

        {Array.from({ length: maxSlots - clips.length }).map((_, i) => (
          <div key={`empty-${i}`} className={styles.emptyCard}>
            <span className={styles.addIcon}>＋</span>
            <span className={styles.addText}>Добавить</span>
          </div>
        ))}
      </div>
    </section>
  );
}
