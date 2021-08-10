import Square from "./Square";
import React, { useState } from "react";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log("fff : ", squares[a]);
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log("too good", a, b, c);
        return squares[a];
      }
    }
    return null;
  }

  function onClickHandler(i) {
    console.log("clicked");

    if (calculateWinner(squares)) {
      return;
    }

    let temp = squares.slice();
    // console.log("click : ", temp);
    temp[i] = xIsNext ? "X" : "O";
    setSquares(temp);
    setXisNext((prevState) => !prevState);
  }

  function restartHandler() {
    setSquares(Array(9).fill(null));
    setXisNext(true);
  }

  let winner = calculateWinner(squares);
  let gameOver = !squares.includes(null);
  let status = "Next Player : " + (xIsNext ? "X" : "O");

  return (
    <div>
      <div>
        {winner ? `Winner is : ${winner}` : gameOver ? "Game Over : " : status}
        {(winner || gameOver) && (
          <button onClick={restartHandler}>Restart Game</button>
        )}
      </div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => onClickHandler(0)} />
        <Square value={squares[1]} onClick={() => onClickHandler(1)} />
        <Square value={squares[2]} onClick={() => onClickHandler(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => onClickHandler(3)} />
        <Square value={squares[4]} onClick={() => onClickHandler(4)} />
        <Square value={squares[5]} onClick={() => onClickHandler(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => onClickHandler(6)} />
        <Square value={squares[7]} onClick={() => onClickHandler(7)} />
        <Square value={squares[8]} onClick={() => onClickHandler(8)} />
      </div>
    </div>
  );
};

export default Board;
