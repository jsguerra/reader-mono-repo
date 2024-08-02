import React, { useState, useEffect } from "react";
import type { Book } from "@common/common";
import Styles from "./Grid.module.css";

interface GridProps {
  books?: Book[];
  toggle?: boolean;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ books, toggle = false, children }) => {
  const [col, setCol] = useState(5);
  const buttonsArray = [5, 4, 3, 2, 1];

  useEffect(() => {
    if (books && books?.length <= 0) {
      setCol(1);
    }
  });

  return (
    <div className="container">
      {toggle && (
        <div className={Styles.toggles}>
          <span>Toggle Grid Columns: </span>
          {buttonsArray.map((button) => (
            <button
              key={`btn-${button}`}
              onClick={() => setCol(button)}
              type="button"
            >
              {button}
            </button>
          ))}
        </div>
      )}
      <div className={`${Styles.grid} ${Styles[`columns-${col}`]}`}>
        {children}
      </div>
    </div>
  );
};

export default Grid;
