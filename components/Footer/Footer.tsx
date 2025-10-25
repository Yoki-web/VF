// ===============================
// Footer.tsx
// Футер сайта: копирайт, контакты
// ===============================

// ===============================
// Footer.tsx
// Футер сайта: копирайт, контакты, соцсети
// ===============================

import { Github, Twitter, Instagram, Mail } from "lucide-react"; 
// Установи: npm i lucide-react

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Блок 1: Лого и описание */}
        <div>
          <h2 className="text-red-500 font-extrabold text-xl mb-2">VF</h2>
          <p className="text-sm text-gray-400">
            VALORANT FACEIT — платформа для турниров, рейтингов и соревновательного режима.
          </p>
        </div>

        {/* Блок 2: Навигация */}
        <div>
          <h3 className="text-white font-semibold mb-3">Навигация</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500 transition">Главная</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Турниры</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Команды</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Рейтинг</a></li>
            <li><a href="#" className="hover:text-red-500 transition">Помощь</a></li>
          </ul>
        </div>

        {/* Блок 3: Контакты и соцсети */}
        <div>
          <h3 className="text-white font-semibold mb-3">Контакты</h3>
          <p className="text-sm">Email: support@vf-faceit.com</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="hover:text-red-500"><Github size={20} /></a>
            <a href="#" className="hover:text-red-500"><Twitter size={20} /></a>
            <a href="#" className="hover:text-red-500"><Instagram size={20} /></a>
            <a href="mailto:support@vf-faceit.com" className="hover:text-red-500"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © 2025 Valorant Faceit. Все права защищены.
      </div>
    </footer>
  );
}
