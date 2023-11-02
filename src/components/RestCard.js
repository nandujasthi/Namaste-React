import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestCard = (props) => {
  const { resData } = props;
  const { loggedinUser } = useContext(UserContext);
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
    cloudinaryImageId,
  } = resData;
  return (
    <div className="rest-card w-60 mb-2 bg-gray-100 hover:bg-gray-200 rounded-md p-2 shadow-lg">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="foodImage"
        className="rounded"
      />
      <h3 className="py-3 text-xl font-semibold">{name}</h3>
      <span>{cuisines.join(", ")}</span>
      <p>{avgRating} Stars</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} Mins</p>
      <p>User Name: {loggedinUser}</p>
    </div>
  );
};

export const LabelComponent = (RestCard) => {
  return (props) => {
    return (
      <div>
        <h2 className="absolute bg-black text-white px-2 rounded ">VEG</h2>
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
