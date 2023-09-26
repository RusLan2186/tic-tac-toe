import React from 'react';
import { useState, useEffect } from 'react';
import Board from './Board';
import { calculateWinner } from './helper';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [deadHead, setDeadHead] = useState(null);
  const [winnerX, setWinnerX] = useState(0);
  const [winnerO, setWinner0] = useState(0);
  const [deadHeadQuantity, setDeadHeadQuantity] = useState(0);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    // Определить был ли клик по ячейке или игра закончена
    if (winner || boardCopy[index]) return;

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

  useEffect(() => {
    if (board.includes(null) || winner) {
      setDeadHead(null);
    } else {
      setDeadHead(true);
    }
  }, [winner, board]);

  useEffect(() => {
    if (winner === 'X') {
      setWinnerX(winnerX + 1);
    }
    if (winner === '0') {
      setWinner0(winnerO + 1);
    }
    if (deadHead === true) {
      setDeadHeadQuantity(deadHeadQuantity + 1);
    }
  }, [winner, deadHead]);

  return (
    <div className='game__wrapper'>
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      {deadHead ? (
        <h2 className='dead__head'>dead heat</h2>
      ) : (
        <div className='game__info'>
          {winner ? 'Winner' + ' ' + winner : 'is walking now ' + (xIsNext ? 'X' : '0')}
          <p> Winner X {winnerX}</p>
          <p> Winner 0{winnerO}</p>
          <p>DeadHead{deadHeadQuantity}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
