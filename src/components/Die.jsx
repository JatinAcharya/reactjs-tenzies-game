import React from "react";

const Die = (props) => {
  return (
    <>
      <button
        className={
          props.dieObj.isHeld ? "die-button die-button-active" : "die-button"
        }
        onClick={() => props.dieClicked(props.dieObj.id)}
      >
        {props.dieObj.value}
      </button>
    </>
  );
};

export default Die;
