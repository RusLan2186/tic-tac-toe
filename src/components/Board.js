import React from 'react';
import Square from './Square';

const Board = ({ click, squares }) => {
  return (
    <div className='board'>
      {squares.map((squares, i) => (
        <Square key={i} value={squares} click={() => click(i)} />
      ))}
    </div>
  );
};

export default Board;
