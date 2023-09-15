import React, { useEffect, useState } from "react";
import SimmerUI from "./SimmerUI";
import { MENU_API_URL } from "../util/contants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restrestaurantInfo, setRestaurantInfo] = useState([]);
  const [menuLists, setMenuLists] = useState([]);
  const { restId } = useParams();

  // const [restaurantInfo,setrestaurantInfo]= useState({})
  useEffect(() => {
    fetchRestMunu();
  }, []);

  const fetchRestMunu = async () => {
    const data = await fetch(MENU_API_URL + restId);
    const json = await data.json();

    console.log(json?.data?.cards[0]?.card?.card?.info);
    console.log(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );

    const restaurantInfo = json?.data?.cards[0]?.card?.card?.info;

    const menuLists =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;

    setRestaurantInfo(restaurantInfo);
    setMenuLists(menuLists);
  };

  if (restrestaurantInfo.length === 0) {
    return <SimmerUI />;
  }

  return (
    <div>
      <h1>{restrestaurantInfo.name}</h1>
      <ul>
        {menuLists?.map((menu) => {
          return (
            <li>
              <span> {menu.card.info.name}</span>
              <span>{"( " + menu.card.info.price / 100 + "Rupees )"}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
