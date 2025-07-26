import React from "react";

const Die = (props) => {
  return (
    <>
      <button className="die-button">{props.value}</button>
    </>
  );
};

export default Die;
