import { useState } from "react";
import "./App.css";
import Die from "./components/Die";

import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  const dieElements = dice.map((dieObj) => {
    return <Die key={dieObj.id} value={dieObj.value} />;
  });

  function handleDiceRoll(event) {
    setDice(generateAllNewDice());
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
