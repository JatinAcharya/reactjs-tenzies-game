import { useState } from "react";
import "./App.css";
import Die from "./components/Die";

import { nanoid } from "nanoid";

function App() {
  // [{value, isHeld}, {value, isHeld}]
  const [dice, setDice] = useState(generateAllNewDice());

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
    setDice((prevDice) => {
      return prevDice.map((dieObj) => {
        return !dieObj.isHeld
          ? { ...dieObj, value: Math.ceil(Math.random() * 6) }
          : dieObj;
      });
    });
  }

  return (
    <>
      <main>
        <section className="dice-section">{dieElements}</section>

        <button className="roll-button" onClick={handleDiceRoll}>
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
