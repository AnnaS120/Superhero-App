import React, { useState, useEffect } from "react";
import { HeroSelector, BattleResult } from "../../components";

function GamePage() {
  const [heroes, setHeroes] = useState([]);

  const [player, setPlayer] = useState(null);
  const [opponent, setOpponent] = useState(null);

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    async function getHeroes() {
      const response = await fetch(
        "https://akabab.github.io/superhero-api/api/all.json",
      );

      const data = await response.json();

      setHeroes(data);
    }

    getHeroes();
  }, []);

  // Start
  function startBattle() {
    if (player && opponent) {
      setShowResults(true);
    }
  }

  // Reset
  function playAgain() {
    setPlayer(null);
    setOpponent(null);
    setShowResults(false);
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-3 game-h1">Superhero Battle</h1>

      <p className="text-center mb-5 game-p">
        Choose your superhero and your opponent and see who wins!
      </p>

      <div className="row align-items-center">
        <div className="col-md-5">
          <HeroSelector
            title="Player 1"
            heroes={heroes}
            selectedHero={player}
            setSelectedHero={setPlayer}
            otherHero={opponent}
            setShowResults={setShowResults}
          />
        </div>

        <div className="col-md-2 text-center">
          <h2>VS</h2>
        </div>

        <div className="col-md-5">
          <HeroSelector
            title="Opponent"
            heroes={heroes}
            selectedHero={opponent}
            setSelectedHero={setOpponent}
            otherHero={player}
            setShowResults={setShowResults}
          />
        </div>
      </div>

      {/* Start battle button */}
      <div className="text-center my-5">
        <button className="btn btn-danger btn-lg" onClick={startBattle}>
          Fight
        </button>
      </div>

      {/* Battle results */}
      {showResults && (
        <BattleResult
          player={player}
          opponent={opponent}
          playAgain={playAgain}
        />
      )}
    </div>
  );
}
export default GamePage;
