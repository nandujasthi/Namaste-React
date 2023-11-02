import Shimmer from "./Shimmer";
import { useParams, useSearchParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [accIndex, setAccIndex] = useState(0);
  const restInfo = useRestaurantMenu(resId);

  if (restInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines, avgRating } =
    restInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="RestMenu text-center">
      <h1 className="font-bold text-xl my-3">Name : {name}</h1>
      <h2 className="font-semibold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage} - {avgRating} Stars
      </h2>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          catData={category.card.card}
          showAcc={index === accIndex ? true : false}
          setAccIndex={() => setAccIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
