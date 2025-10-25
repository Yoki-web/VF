import styles from "../../styles/ProfileChat.module.css";

export default function ProfileChat() {
  const messages = []; // пока пусто

  return (
    <section className={styles.chatBlock}>
      <h3 className={styles.chatTitle}>Чат профиля</h3>
      <div className={styles.messagesArea}>
        {messages.length === 0 ? (
          <div className={styles.emptyState}>
            <span>Сообщений пока нет...</span>
          </div>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              className={`${styles.message} ${msg.isMine ? styles.mine : styles.their}`}
            >
              {msg.text}
            </div>
          ))
        )}
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Напишите комментарий..."
          className={styles.input}
        />
        <button className={styles.sendBtn}>➤</button>
      </div>
    </section>
  );
}
