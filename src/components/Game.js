import React from 'react';
import { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './helper';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xlsNext, setXlsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    // Определить был ли клик по ячейке или игра закончена
    if (winner || boardCopy[index]) return;
    console.log(boardCopy);

    // Определить чей ход Х или 0
    boardCopy[index] = xlsNext ? 'X' : '0';

    // Обновить наш стейт
    setBoard(boardCopy);
    setXlsNext(!xlsNext);
  };

  return (
    <div className='game__wrapper'>
      <Board squares={board} />
    </div>
  );
};

export default Game;
