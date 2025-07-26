import { useState } from "react";
import "./App.css";
import Die from "./components/Die";
// import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";

function App() {
  // [{value, isHeld}, {value, isHeld}]
  const [dice, setDice] = useState(generateAllNewDice());
  // const { width, height } = useWindowSize();
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  const dieClicked = (id) => {
    setDice((prevDice) => {
      return prevDice.map((dieObj) => {
        if (dieObj.id == id) {
          return { ...dieObj, isHeld: !dieObj.isHeld };
        }
        return dieObj;
      });
    });
  };

  const dieElements = dice.map((dieObj) => {
    return <Die key={dieObj.id} dieObj={dieObj} dieClicked={dieClicked} />;
  });

  function handleDiceRoll(event) {
    // if (gameWon) {
    setDice((prevDice) => {
      return prevDice.map((dieObj) => {
        return !dieObj.isHeld
          ? { ...dieObj, value: Math.ceil(Math.random() * 6) }
          : dieObj;
      });
    });
    // }
  }

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value == dice[0].value);

  return (
    <>
      <main>
        {gameWon && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <section className="dice-section">{dieElements}</section>
        <button className="roll-button" onClick={handleDiceRoll}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  );
}

export default App;
