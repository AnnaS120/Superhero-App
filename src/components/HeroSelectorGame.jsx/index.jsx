import React from "react";

export default function HeroSelector({
  title,
  heroes,
  selectedHero,
  setSelectedHero,
}) {
  return (
    <div className="card p-3 text-center">
      <h3>{title}</h3>

      {selectedHero && (
        <img
          src={selectedHero.images.lg}
          alt={selectedHero.name}
          style={{ height: "250px", objectFit: "contain" }}
        />
      )}

      <select
        className="form-select"
        onChange={(e) => {
          const hero = heroes.find((h) => h.id === Number(e.target.value));
          setSelectedHero(hero);
        }}
      >
        <option value="">Choose a superhero</option>

        {heroes.map((hero) => (
          <option key={hero.id} value={hero.id}>
            {hero.name}
          </option>
        ))}
      </select>
    </div>
  );
}
