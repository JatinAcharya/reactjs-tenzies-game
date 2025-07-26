import { useState } from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  function generateAllNewDice() {
    console.log("called");
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  console.log(generateAllNewDice());

  return (
    <>
      <main>
        <section className="dice-section">
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </section>
      </main>
    </>
  );
}

export default App;
