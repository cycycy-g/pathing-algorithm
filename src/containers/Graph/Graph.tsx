import React, { useState, useEffect } from 'react';

import "./Graph.css";
import Vertex from './Vertex';

const START_NODE_ROW = 10;
const START_NODE_COL = 5;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

interface Node {
  col: number;
  row: number;
  isStart: Boolean;
  isFinish: Boolean;
  distance: number;
  isVisited: Boolean;
  isWall: Boolean;
}

function Graph () {
  const [grid, setGrid] = useState<Array<any>>([]);

  useEffect(() => {
    const getInitialGrid = (): Array<any> => {
      const gridArray = [];
      for (let row = 0; row < 20; row++) {
        const currentRow = [];
        for (let col = 0; col < 50; col++) {
          currentRow.push(createNode(col, row));
        }
        gridArray.push(currentRow);
      }
      return gridArray;
    };
  
    const createNode = (col: number, row: number): Node => {
      return {
        col,
        row,
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        distance: Infinity,
        isVisited: false,
        isWall: false,
      };
    };

    setGrid(getInitialGrid());
  },[]);

  const handleMouseDown = (row: number, col: number) => {
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  }

  const getNewGridWithWallToggled = (grid: Array<any>, row: number, col: number): Array<any> => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    console.log(node)
    return newGrid;
  };

  return (
    <div>
      <div className="">
        {grid.map((row: Array<Node>, idx: number) => {
          return (
            <div key={idx}>
              {row.map((node: Node, idx: number) => {
                const { row, col, isFinish, isStart, isWall, } = node;
                return (
                  <Vertex 
                    key={idx}
                    col={col}
                    row={row}
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    handleMouseDown={handleMouseDown}
                  />
                )
              })}  
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Graph;