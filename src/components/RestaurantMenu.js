import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restInfo = useRestaurantMenu(resId);

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
