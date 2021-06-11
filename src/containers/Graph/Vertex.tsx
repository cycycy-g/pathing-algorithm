import React from 'react';

interface Node {
  col: number;
  row: number;
  isStart: Boolean;
  isFinish: Boolean;
  isWall: Boolean;
  handleMouseDown: (row: number, col: number) => void
}

function Vertex ({ row, col, isStart, isFinish, isWall, handleMouseDown}: Node) {
  const statusClassName = isStart ? 'node-start' : isFinish && 'node-finish';

  return (
    <div 
      className={`node ${statusClassName}`}
      onMouseDown={() => handleMouseDown(row, col)}
      />
  )
};

export default Vertex;