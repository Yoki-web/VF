import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        {/* Левая часть */}
        <li>История матчей</li>
        <li>Статистика</li>
        <li>Магазин</li>

        {/* Центр */}
        <li className={styles.center}>Главная</li>

        {/* Правая часть */}
        <li>Гильдия</li>
        <li>Хайлайты</li>
        <li>Друзья</li>
      </ul>
    </nav>
  );
}
