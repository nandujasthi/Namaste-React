import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;
  return (
    <div className="rest-card">
      <img src={CDN_URL + cloudinaryImageId} alt="foodImage" />
      <h3>{name}</h3>
      <span>{cuisines.join(", ")}</span>
      <p>{avgRating} Stars</p>
      <p>₹{costForTwo / 100} for TWO</p>
      <p>{deliveryTime} Mins</p>
    </div>
  );
};

export default RestCard;
