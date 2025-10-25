// ===============================
// Features.tsx
// Блок преимуществ (3 карточки)
// ===============================

import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-16 bg-gray-800 text-white">
      <FeatureCard
        title="Режим турнира"
        description="Соревнуйтесь против других команд. Будьте лучшими."
      />
      <FeatureCard
        title="Индивидуальные достижения"
        description="ELO, KDA, % побед и многое другое."
      />
      <FeatureCard
        title="Награды"
        description="Зарабатывайте очки и получайте призы."
      />
    </section>
  );
}
