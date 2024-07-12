import React from "react";
import Styles from "./SrcollBtn.module.css";

const ScrollBtn = () => {
  return (
    <div className={Styles.scroll}>
      <button
        className="btn scroll-top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        &uarr;
      </button>
      <button
        className="btn scroll-bottom"
        onClick={() => {
          window.scrollTo(0, document.body.scrollHeight);
        }}
      >
        &darr;
      </button>
    </div>
  );
};

export default ScrollBtn;
