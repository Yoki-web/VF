// ===============================
// FeatureCard.tsx
// Универсальная карточка преимущества
// ===============================

import { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="relative group bg-gray-950 p-8 rounded-xl text-center border border-gray-800 transition transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20">
      {/* Градиентная рамка при наведении */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-red-500 transition"></div>

      {/* Контент */}
      <div className="relative z-10">
        {/* Иконка */}
        {icon && (
          <div className="flex justify-center mb-4 text-red-500 text-5xl drop-shadow-lg">
            {icon}
          </div>
        )}

        {/* Заголовок */}
        <h3 className="text-2xl font-extrabold mb-3 tracking-wide text-white">
          {title}
        </h3>

        {/* Описание */}
        <p className="mb-8 text-gray-400 leading-relaxed">{description}</p>

        {/* Кнопка */}
        <button className="relative overflow-hidden bg-red-600 px-6 py-2 rounded-lg font-semibold text-white transition transform group-hover:scale-105">
          <span className="relative z-10">Подробнее</span>
          <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition"></span>
        </button>
      </div>
    </div>
  );
}
