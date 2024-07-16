import React from "react";
import Styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <form className={Styles.search}>
      <input autoComplete="off" type="search" name="search" id="search" />
      <button className="btn">Search</button>
    </form>
  );
};

export default SearchForm;
