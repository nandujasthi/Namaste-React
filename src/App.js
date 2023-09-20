import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import RestCard from "./components/RestCard";
import RestCard from "./components/RestCard";
import { useState } from "react";
import resList from "./utils/data";

const AppComponent = () => {
  let [listofRests, setListofRests] = useState(resList);
  return (
    <div className="app">
      <Header />
      <Search />
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            listofRests = listofRests.filter((res) => res.data.avgRating >= 4);
            setListofRests(listofRests);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listofRests.map((restaurant) => (
          <RestCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
