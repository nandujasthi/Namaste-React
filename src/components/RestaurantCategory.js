import { useState, useEffect } from "react";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({ catData, showAcc, setAccIndex }) => {
  const collapseAcc = () => {
    showAcc ? setAccIndex(null) : setAccIndex(index);
  };
  return (
    <div className="mx-auto w-6/12 bg-gray-100 shadow-md my-2 p-3">
      <div
        className="acc-header flex justify-between cursor-pointer"
        onClick={collapseAcc}
      >
        <h1 className="text-xl font-bold">
          {catData.title}({catData.itemCards.length})
        </h1>
        <button>🔽</button>
      </div>
      <div className="acc-body">
        {showAcc && <ItemCards items={catData.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
