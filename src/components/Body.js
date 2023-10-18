import RestCard from "./RestCard";
import Search from "./Search";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [listofRests, setListofRests] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999"
    );

    const jsonData = await data.json();
    console.log(
      jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setListofRests(
      jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (listofRests.length === 0) {
    return <Shimmer />;
  }
  return (
    <div>
      <Search />
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            listofRests = listofRests.filter(
              (res) => res.info.avgRating >= 4.2
            );
            setListofRests(listofRests);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listofRests.map((restaurant) => (
          <RestCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
