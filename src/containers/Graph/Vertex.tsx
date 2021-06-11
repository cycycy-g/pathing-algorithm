import React from "react";

interface Node {
  col: number;
  row: number;
  isStart: boolean;
  isFinish: boolean;
  isWall: boolean;
  handleMouseDown: (row: number, col: number) => void
}

function Vertex ({ row, col, isStart, isFinish, isWall, handleMouseDown}: Node): JSX.Element {
    const statusClassName = isStart ? "node-start" : isFinish && "node-finish";

    return (
        <div 
            className={`node ${statusClassName}`}
            onMouseDown={() => handleMouseDown(row, col)}
        />
    );
}

export default Vertex;