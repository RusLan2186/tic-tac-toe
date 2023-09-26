import React from 'react';
import { useState, useEffect } from 'react';
import Board from './Board';
import { calculateWinner } from './helper';
import MyModal from './Modal/MyModal';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [deadHead, setDeadHead] = useState(null);
  const [winnerX, setWinnerX] = useState(0);
  const [winnerO, setWinner0] = useState(0);
  const [deadHeadQuantity, setDeadHeadQuantity] = useState(0);
  const [isModal, setIsModal] = useState(false);
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
  const resetResults = () => {
    setWinnerX(0);
    setWinner0(0);
    setDeadHeadQuantity(0);
  };

  useEffect(() => {
    if (winner) {
      setIsModal(true);
    }
  }, [winner]);

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
      <div>
        {startNewGame()}
        <button className='btn' onClick={resetResults}>
          Reset Results
        </button>
        {deadHead ? (
          <h2 className='dead__head'>dead heat</h2>
        ) : (
          <div className='game__info'>
            {winner ? 'Winner' + ' ' + winner : 'is walking now ' + (xIsNext ? 'X' : '0')}
          </div>
        )}
      </div>
      <div>
        <Board squares={board} click={handleClick} />
      </div>
      <div className='score'>
        <h2 className='score__title'>game score</h2>
        <div className='score__info'>
          <div>
            Winner X <p className='score__result'>{winnerX}</p>
          </div>
          <div>
            Winner 0<p className='score__result'>{winnerO}</p>
          </div>
          <div>
            DeadHead<p className='score__result'>{deadHeadQuantity}</p>
          </div>
        </div>
      </div>
      <MyModal visible={isModal} changeVisible={setIsModal}>
        <div className='modal__info'>
          {winner ? 'Winner:' + ' ' + winner : 'is walking now ' + (xIsNext ? 'X' : '0')}
        </div>
      </MyModal>
    </div>
  );
};

export default Game;
