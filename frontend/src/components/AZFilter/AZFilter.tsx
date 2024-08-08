import React from "react";
import Styles from "./AZFilter.module.css";

interface AZFilterProps {
  rootPath: string;
}

const AZFilter: React.FC<AZFilterProps> = ({ rootPath }) => {
  const letters: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const buttons = letters.map((letter, i) => (
    <a key={i + 1} className="btn" href={`${rootPath}/?letter=${letter}`}>
      {letter}
    </a>
  ));

  return <div className={Styles.filter}>
    <a className="btn" href={rootPath}>View All</a>
    {buttons}
    </div>;
};

export default AZFilter;
