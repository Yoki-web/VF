import Head from "next/head";
import Hero from "../components/Profile/Hero";
import Hotbar from "../components/Profile/Navbar";
import FavoriteAgent from "../components/Profile/FavoriteAgent";
import RankBlock from "../components/Profile/Ranks";
import Achievements from "../components/Profile/Achievements";
import Highlights from "../components/Profile/Highlights";
import Chat from "../components/Profile/Chat";
import styles from "../styles/profile.module.css";

const Profile: React.FC = () => {
  return (
    <div className={styles.profilePage}>
      <Head>
        <title>Профиль | VALORANT FACEIT</title>
      </Head>

      <Hero />
      <Hotbar />

      <main className={styles.mainLayout}>
        {/* Левая колонка — любимый агент */}
        <div className={styles.leftColumn}>
          <FavoriteAgent />
        </div>

        {/* Центральная колонка — ранг и достижения */}
        <div className={styles.centerColumn}>
          <RankBlock />
          <Achievements />
        </div>

        {/* Правая колонка — хайлайты и чат */}
        <div className={styles.rightColumn}>
          <Highlights />
          <Chat />
        </div>
      </main>
    </div>
  );
};

export default Profile;
