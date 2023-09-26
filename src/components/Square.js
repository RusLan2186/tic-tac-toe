import React from 'react';

const Square = ({ value, click }) => {
  console.log(value);

  return (
    <div>
      <button className='square' onClick={click}>
        <span className={value === 'X' ? 'color_x' : ''}>{value}</span>
      </button>
    </div>
  );
};

export default Square;
