// ===============================
// Hero.tsx
// Первый экран: логотип, название и кнопка CTA
// ===============================

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-900 text-white">
      <div className="text-6xl font-extrabold mb-4">VF</div>
      <h2 className="text-3xl font-bold mb-8">VALORANT FACEIT</h2>
      <button className="bg-red-600 px-8 py-4 rounded text-lg font-semibold hover:bg-red-700 transition">
        Играть сейчас
      </button>
    </section>
  );
}
