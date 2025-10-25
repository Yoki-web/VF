// ===============================
// Главная страница сайта VF-ValorantFaceit
// ===============================

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Head>
        <title>VALORANT FACEIT</title>
        <meta
          name="description"
          content="VALORANT FACEIT — турниры, рейтинги и соревновательный режим с баном карт и агентов."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-gray-800 bg-black/80 backdrop-blur sticky top-0 z-50">
        <h1 className="text-red-500 font-extrabold text-2xl tracking-wide">
          VALORANT FACEIT
        </h1>
        <nav className="space-x-8 hidden md:flex font-medium">
          <a href="#modes" className="hover:text-red-500 transition">Режимы</a>
          <a href="#tournaments" className="hover:text-red-500 transition">Турниры</a>
          <a href="#friends" className="hover:text-red-500 transition">Друзья</a>
        </nav>
        <Link href="/profile">
          <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition">
            Войти / Регистрация
          </button>
        </Link>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="text-7xl font-extrabold text-red-500 drop-shadow-lg">
          VF
        </div>
        <h2 className="text-3xl mt-4 font-semibold">VALORANT FACEIT</h2>
        <p className="mt-4 text-gray-400 max-w-xl">
          Турниры, рейтинги и соревновательный режим с баном карт и агентов.
        </p>

        <Link href="/profile">
          <button className="mt-10 bg-red-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition transform hover:scale-105 shadow-lg">
            Играть сейчас
          </button>
        </Link>
      </section>

      {/* Modes */}
      <section id="modes" className="px-10 py-20 bg-gray-950">
        <h2 className="text-3xl font-bold mb-10 text-center">Режимы</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-red-500/20 transition transform hover:-translate-y-2">
            <h3 className="text-xl font-bold mb-3">Режим премьер</h3>
            <p className="text-gray-400 mb-6">
              Главный соревновательный режим с баном карт и агентов.
            </p>
            <button className="text-red-500 font-semibold hover:underline">Подробнее</button>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-red-500/20 transition transform hover:-translate-y-2">
            <h3 className="text-xl font-bold mb-3">Максимальное разнообразие</h3>
            <p className="text-gray-400 mb-6">
              Одиночки 1v1, 2v2, 3v3, 4v4, 5v5 с усложнениями.
            </p>
            <button className="text-red-500 font-semibold hover:underline">Подробнее</button>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-red-500/20 transition transform hover:-translate-y-2">
            <h3 className="text-xl font-bold mb-3">Напарники</h3>
            <p className="text-gray-400 mb-6">
              Каждому игроку назначается случайный агент.
            </p>
            <button className="text-red-500 font-semibold hover:underline">Подробнее</button>
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section id="tournaments" className="px-10 py-20 bg-black text-center">
        <h2 className="text-3xl font-bold mb-6">Турниры</h2>
        <p className="text-gray-400 mb-6">Участвуй в регулярных турнирах и поднимайся в рейтинге.</p>
        <button className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 transition">
          Присоединиться
        </button>
      </section>

      {/* Friends */}
      <section id="friends" className="px-10 py-20 bg-gray-950 text-center">
        <h2 className="text-3xl font-bold mb-6">Друзья</h2>
        <p className="text-gray-400 mb-6">Добавляй друзей и играй вместе.</p>
        <button className="bg-red-600 px-8 py-3 rounded-lg hover:bg-red-700 transition">
          Добавить друга
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-red-600 text-gray-500 text-sm">
        © 2025 VF-ValorantFaceit. Все права защищены.
      </footer>
    </div>
  );
}
