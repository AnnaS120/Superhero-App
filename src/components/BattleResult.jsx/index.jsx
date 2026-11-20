import React from "react";

function BattleResult({ player, opponent, playAgain }) {
  const stats = [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
    "combat",
  ];

  let playerScore = 0;
  let opponentScore = 0;

  stats.forEach((stat) => {
    if (Number(player.powerstats[stat]) > Number(opponent.powerstats[stat])) {
      playerScore++;
    } else if (
      Number(opponent.powerstats[stat]) > Number(player.powerstats[stat])
    ) {
      opponentScore++;
    }
  });

  let winner = "It's a draw!";

  if (playerScore > opponentScore) {
    winner = player.name + " wins!";
  } else if (opponentScore > playerScore) {
    winner = opponent.name + " wins!";
  }

  return (
    <div className="card p-4 mt-4 text-center">
      <h2>Battle Results</h2>

      <div className="row align-items-center">
        <div className="col-5">
          <img src={player.images.lg} alt={player.name} className="img-fluid" />
          <h4>{player.name}</h4>
          <p>Score: {playerScore}</p>
        </div>

        <div className="col-2">
          <h2>VS</h2>
        </div>

        <div className="col-5">
          <img
            src={opponent.images.lg}
            alt={opponent.name}
            className="img-fluid"
          />
          <h4>{opponent.name}</h4>
          <p>Score: {opponentScore}</p>
        </div>
      </div>

      <h2 className="mt-4">{winner}</h2>

      <h4>Powerstats</h4>

      {stats.map((stat) => (
        <p key={stat}>
          {stat}: {player.powerstats[stat]} - {opponent.powerstats[stat]}
        </p>
      ))}

      <button className="btn btn-dark mt-3" onClick={playAgain}>
        Play Again
      </button>
    </div>
  );
}

export default BattleResult;
