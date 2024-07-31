import React from "react";
import Styles from "./Grid.module.css";

interface GridProps {
  toggle?: boolean;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ toggle = false, children }) => {
  const buttonsArray = [5, 4, 3, 2, 1];

  return (
    <div className="container">
      {toggle && (
        <div className="toggles">
          <span>Toggle Grid Columns: </span>
          {buttonsArray.map((button) => (
            <button>{button}</button>
          ))}
        </div>
      )}
      <div className={`${Styles.grid}`}>
        {children}
      </div>
    </div>
  );
};

export default Grid;
