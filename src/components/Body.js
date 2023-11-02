import RestCard, { LabelComponent } from "./RestCard";
import Search from "./Search";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  let [listofRests, setListofRests] = useState([]);
  const { loggedinUser, setUserName } = useContext(UserContext);
  const PromotedComponent = LabelComponent(RestCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999"
    );

    const jsonData = await data.json();
    setListofRests(
      jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are not connected to internet</h1>;
  }
  if (listofRests.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="">
      <div className="flex align-middle">
        <Search />
        <div className="filter p-4">
          <button
            className="px-4 py-2 bg-green-300 rounded"
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
        <div className="p-4">
          <label className="mr-1">UserName: </label>
          <input
            className="border rounded p-2"
            value={loggedinUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="rest-container flex flex-wrap justify-evenly">
        {listofRests.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurentmenu/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <PromotedComponent resData={restaurant.info} />
            ) : (
              <RestCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
