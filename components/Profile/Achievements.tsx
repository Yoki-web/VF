import styles from "../../styles/Achievements.module.css";

export default function Achievements() {
  const achievements = [
    { title: "Первая победа", desc: "Выиграй свой первый матч", unlocked: true, icon: "🏆" },
    { title: "Серия побед", desc: "10 побед подряд", unlocked: false, icon: "⭐" },
    { title: "Иммортал", desc: "Достигни ранга Immortal", unlocked: false, icon: "👑" },
  ];

  return (
    <section className={styles.achievementsBlock}>
      <h3 className={styles.achievementsTitle}>Достижения</h3>
      <div className={styles.achievementsGrid}>
        {achievements.map((ach, i) => (
          <div
            key={i}
            className={`${styles.achievementCard} ${ach.unlocked ? styles.unlocked : styles.locked}`}
          >
            <div className={styles.icon}>{ach.icon}</div>
            <span className={styles.title}>{ach.title}</span>
            <span className={styles.desc}>{ach.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
