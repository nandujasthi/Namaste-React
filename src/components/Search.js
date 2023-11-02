import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="p-4">
      <input
        type="search"
        className="search-input border p-2 rounded"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="bg-blue-200 px-4 py-2 rounded ml-[-10px]"
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
