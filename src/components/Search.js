import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="search">
      <input
        type="search"
        className="search-input"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          listofRests.filter((restaurant) => {
            restaurant.info.name.includes(searchText);
          });
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
