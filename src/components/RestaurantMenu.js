import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestInfo(json.data);
  };

  if (restInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines, avgRating } =
    restInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="RestMenu">
      <h1>Name : {name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage} - {avgRating} Stars
      </h2>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            <strong>
              ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
