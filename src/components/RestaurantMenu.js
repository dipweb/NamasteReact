import React, { useState } from "react";
import SimmerUI from "./SimmerUI";
import MenuList from "./MenuList";

import { useParams } from "react-router-dom";
import useFetchRestaurant from "../util/useFetchRestaurant";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const [itemIndex, setItemIndex] = useState(null);
  const restInfo = useFetchRestaurant(restId);

  if (restInfo === null) {
    return <SimmerUI />;
  }

  const { name, avgRating, costForTwoMessage } =
    restInfo?.data?.cards[0]?.card?.card?.info;
  console.log(restInfo?.data?.cards[0]?.card?.card?.info);
  const menuLists =
    restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => {
        if (
          item?.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return item;
        }
      }
    );

  return (
    <div>
      <div className="my-6 flex flex-col justify-center items-center">
        <p className="font-bold mb-2">
          {name} <span>({avgRating})</span>
        </p>
        <p className="">Cost for two : {costForTwoMessage}</p>
      </div>

      <ul>
        {menuLists.map((menu, index) => {
          return (
            <MenuList
              key={index}
              data={menu}
              showItems={itemIndex == index ? true : false}
              setItemIndex={() => {
                if (itemIndex === index) {
                  setItemIndex(null);
                } else {
                  setItemIndex(index);
                }
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
