import React from 'react';
import { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './helper';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xlsNext, setXlsNext] = useState(true);
  const winner = calculateWinner(board);
  return (
    <div className='game__wrapper'>
      <Board />
    </div>
  );
};

export default Game;
