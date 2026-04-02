import React, { useState } from "react";
import Header from "./Header";
import Entity from "./Entity";
import GameOver from "./GameOver";
import Log from "./Log";

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random value in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: `${isPlayer ? "Player" : "Monster"} takes ${damage} damage`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: `Player heals ${healing} health points`,
  };
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES
  // ----------------------------------------------------------------------------------------------------------
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [turnCount, setTurnCount] = useState(0);
  const [logs, setLogs] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null); // "player", "monster", "draw"

  // ----------------------------------------------------------------------------------------------------------
  // COMPUTED VALUES
  // ----------------------------------------------------------------------------------------------------------
  const specialAttackAvailable = turnCount > 0 && turnCount % 3 === 0 && !gameOver;
  const playerHealthPercent = Math.max(0, (playerHealth / 100) * 100);
  const monsterHealthPercent = Math.max(0, (monsterHealth / 100) * 100);

  // ----------------------------------------------------------------------------------------------------------
  // HELPER: Check game over & update winner
  // ----------------------------------------------------------------------------------------------------------
  const checkGameOver = (newPlayerHp, newMonsterHp) => {
    if (newPlayerHp <= 0 && newMonsterHp <= 0) {
      setGameOver(true);
      setWinner("draw");
      return true;
    } else if (newPlayerHp <= 0) {
      setGameOver(true);
      setWinner("monster");
      return true;
    } else if (newMonsterHp <= 0) {
      setGameOver(true);
      setWinner("player");
      return true;
    }
    return false;
  };

  // ----------------------------------------------------------------------------------------------------------
  // BUTTON EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  const attackHandler = () => {
    if (gameOver) return;

    const playerDamage = getRandomValue(5, 12);
    const monsterDamage = getRandomValue(8, 15);

    const newMonsterHp = Math.max(0, monsterHealth - playerDamage);
    const newPlayerHp = Math.max(0, playerHealth - monsterDamage);

    // Update logs
    const newLogs = [
      ...logs,
      createLogAttack(true, playerDamage),
      createLogAttack(false, monsterDamage),
    ];
    setLogs(newLogs);

    // Update health
    setMonsterHealth(newMonsterHp);
    setPlayerHealth(newPlayerHp);
    setTurnCount(turnCount + 1);

    // Check game over
    const ended = checkGameOver(newPlayerHp, newMonsterHp);
    if (!ended && newPlayerHp <= 0 && newMonsterHp <= 0) {
      // already handled by checkGameOver
    }
  };

  const healHandler = () => {
    if (gameOver) return;

    const healAmount = getRandomValue(8, 20);
    const monsterDamage = getRandomValue(5, 12);

    const newPlayerHp = Math.min(100, playerHealth + healAmount);
    const newMonsterHp = Math.max(0, monsterHealth - monsterDamage);

    // Logs
    const newLogs = [
      ...logs,
      createLogHeal(healAmount),
      createLogAttack(false, monsterDamage),
    ];
    setLogs(newLogs);

    setPlayerHealth(newPlayerHp);
    setMonsterHealth(newMonsterHp);
    setTurnCount(turnCount + 1);

    checkGameOver(newPlayerHp, newMonsterHp);
  };

  const specialAttackHandler = () => {
    if (!specialAttackAvailable || gameOver) return;

    const specialDamage = getRandomValue(10, 25);
    const monsterDamage = getRandomValue(5, 12);

    const newMonsterHp = Math.max(0, monsterHealth - specialDamage);
    const newPlayerHp = Math.max(0, playerHealth - monsterDamage);

    const newLogs = [
      ...logs,
      createLogAttack(true, specialDamage),
      createLogAttack(false, monsterDamage),
    ];
    setLogs(newLogs);

    setMonsterHealth(newMonsterHp);
    setPlayerHealth(newPlayerHp);
    setTurnCount(turnCount + 1);

    checkGameOver(newPlayerHp, newMonsterHp);
  };

  const surrenderHandler = () => {
    if (gameOver) return;
    setGameOver(true);
    setWinner("monster");
    setLogs([...logs, { isPlayer: true, isDamage: true, text: "Player surrendered! Monster wins." }]);
  };

  const restartGame = () => {
    setPlayerHealth(100);
    setMonsterHealth(100);
    setTurnCount(0);
    setLogs([]);
    setGameOver(false);
    setWinner(null);
  };

  // ----------------------------------------------------------------------------------------------------------
  // MAIN TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
    <>
      <section>
        <Entity name="Player" health={playerHealthPercent} />
        <Entity name="Monster" health={monsterHealthPercent} />
      </section>

      {!gameOver ? (
        <div className="container" id="controls">
          <button onClick={attackHandler}>Attack</button>
          <button onClick={healHandler}>Heal</button>
          <button onClick={specialAttackHandler} disabled={!specialAttackAvailable}>
            Special Attack {specialAttackAvailable ? "" : "(cooldown)"}
          </button>
          <button onClick={surrenderHandler}>Surrender</button>
        </div>
      ) : (
        <GameOver
          title={
            winner === "player"
              ? "You won!"
              : winner === "monster"
              ? "You lost..."
              : "It's a draw!"
          }
          restartGame={restartGame}
        />
      )}

      <Log logs={logs} />
    </>
  );
}

export default Game;