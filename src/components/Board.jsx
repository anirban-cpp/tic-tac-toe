import React, { useState } from "react";
import calculateWinner from "../utils/Winner";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setisX] = useState(true);

  const handleClick = (i) => {
    if (calculateWinner(i) || squares[i]) return;

    squares[i] = isX ? "X" : "O";

    setSquares(squares);
    setisX(!isX);
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) status = `Winner is ${winner}`;
  else status = `Next player ${isX ? "X" : "O"}`;

  const handleRestart = () => {
    setisX(true);
    setSquares(Array(9).fill(null));
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="status">{status}</div>
      <button className="restart" onClick={handleRestart}>
        Restart Game!
      </button>
    </div>
  );
};

export default Board;
