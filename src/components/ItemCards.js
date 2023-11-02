import { CDN_URL } from "../utils/constants";

const ItemCards = ({ items }) => {
  return (
    <div className="text-left">
      {items.map((item) => (
        <div
          className="border-b-2 border-gray-200 py-4 px-2 flex justify-between items-center"
          key={item.card.info.id}
        >
          <div className="w-10/12 pr-4">
            <span className="font-semibold">
              {item?.card?.info?.name} - ₹{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-2/12 text-center relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-24 rounded mx-auto"
            />
            <button className="bg-white px-3 py-1 text-black font-semibold bottom-0 ml-10 text-sm block shadow border-gray-400 absolute rounded">
              ADD +{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
