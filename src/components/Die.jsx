import React from "react";

const Die = (props) => {
  return (
    <>
      <button
        className={
          props.dieObj.isHeld ? "die-button die-button-active" : "die-button"
        }
        onClick={() => props.dieClicked(props.dieObj.id)}
        aria-pressed={props.dieObj.isHeld}
        aria-label={`Die with value ${props.dieObj.value}, ${
          props.dieObj.isHeld ? "held" : "not held"
        }`}
      >
        {props.dieObj.value}
      </button>
    </>
  );
};

export default Die;
