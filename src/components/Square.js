import React from 'react';

const Square = ({ value, click }) => {
  return (
    <div>
      <button className='square' onClick={click}>
        <span>{value}</span>
      </button>
    </div>
  );
};

export default Square;
