import React from "react";

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick} value={props.value}>
      {props.value}
    </button>
  );
};

export default Square;
