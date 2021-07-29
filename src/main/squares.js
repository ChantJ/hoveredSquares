import React, { useEffect, useState } from "react";

const SquaresView = ({ mode }) => {
  const [cells, setCells] = useState([]);
  const [hoverdSquares, setHoverdSquares] = useState([]);

  useEffect(() => {
    let newCells = [];
    for (let i = 0; i < mode.field; i++) {
      let row = [];
      for (let j = 0; j < mode.field; j++) {
        row.push({ row: i+1, col: j+1, color: "white" });
      }
      newCells.push(row);
    }
    setHoverdSquares([]);
    setCells(newCells);
  }, [mode]);

  const onHover = (row, col) => {
    let newCells = [...cells];
    newCells[row][col].color =
      cells[row][col].color === "white" ? "#00bfff" : "white";

    setHoverdSquares(
      [].concat.apply([], newCells).filter((cell) => cell.color === "#00bfff")
    );
    setCells(newCells);
  };

  return (
    <div className="squaresContainer">
      <div className="squares">
        {cells.map((row, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              {row.map((cell, idx) => (
                <div
                  key={idx}
                  onMouseOver={() => onHover(index, idx)}
                  style={{
                    width: "calc(" + 1 / mode.field + " * (-60px + 60vw))",
                    height: "calc(" + 1 / mode.field + "* (-50px + 50vw))",
                    background: cell.color,
                    border: "1px solid #dedede",
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>
      <div className="hoveredSquares">
        <div className="HoveredTitle">Hovered Squares</div>
        <div className="HoveredItems">
          {hoverdSquares.map((square, index) => (
            <div key={index} className="HoveredItem">
              row {square.row} col {square.col}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SquaresView;
