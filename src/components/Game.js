import React from 'react';
import { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './helper';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    // Определить был ли клик по ячейке или игра закончена
    if (winner || boardCopy[index]) return;
    console.log(boardCopy);

    // Определить чей ход Х или 0
    boardCopy[index] = xIsNext ? 'X' : '0';

    // Обновить наш стейт
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const startNewGame = () => {
    return (
      <button className='btn' onClick={() => setBoard(Array(9).fill(null))}>
        New Game
      </button>
    );
  };

  return (
    <div className='game__wrapper'>
      {startNewGame()}
      <Board squares={board} click={handleClick} />
    </div>
  );
};

export default Game;
