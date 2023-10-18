import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchResMenu();
  }, []);
  const fetchResMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=25620&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json, "Loaded Menu");
  };
  return (
    <div className="RestMenu">
      <h1>Name : Restaurant Name</h1>
      <h2>HELLO</h2>
    </div>
  );
};

export default RestaurantMenu;
