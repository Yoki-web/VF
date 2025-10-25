// ===============================
// Header.tsx
// Шапка сайта: логотип, меню, кнопки входа/регистрации
// ===============================

"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // иконки (установи: npm i lucide-react)


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Логотип */}
        <div className="flex items-center space-x-2">
          <span className="text-red-500 font-extrabold text-2xl">VF</span>
          <h1 className="text-lg font-bold tracking-wide">VALORANT FACEIT</h1>
        </div>

        {/* Навигация (desktop) */}
        <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <a href="#" className="hover:text-red-500 transition">Главная</a>
          <a href="#" className="hover:text-red-500 transition">Турниры</a>
          <a href="#" className="hover:text-red-500 transition">Команды</a>
          <a href="#" className="hover:text-red-500 transition">Рейтинг</a>
          <a href="#" className="hover:text-red-500 transition">Помощь</a>
        </nav>

        {/* Кнопки */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-red-500 rounded hover:bg-red-500 hover:text-white transition">
            Войти
          </button>
          <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition">
            Регистрация
          </button>
        </div>

        {/* Бургер (mobile) */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4 text-gray-300">
          <a href="#" className="block hover:text-red-500">Главная</a>
          <a href="#" className="block hover:text-red-500">Турниры</a>
          <a href="#" className="block hover:text-red-500">Команды</a>
          <a href="#" className="block hover:text-red-500">Рейтинг</a>
          <a href="#" className="block hover:text-red-500">Помощь</a>
          <div className="flex space-x-4 pt-4">
            <button className="flex-1 px-4 py-2 border border-red-500 rounded hover:bg-red-500 transition">
              Войти
            </button>
            <button className="flex-1 px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition">
              Регистрация
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
