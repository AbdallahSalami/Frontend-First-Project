import React, { useState } from "react";
import "./SearchBar.css";

const Search = ({ onSearch, placeholder }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search">
      <input
        className="searchInput"
        value={searchValue}
        placeholder={placeholder}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="searchButton" onClick={() => onSearch(searchValue)}>
        Search
      </button>
    </div>
  );
};

export default Search;
