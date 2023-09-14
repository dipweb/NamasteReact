import RestaurantCard from "./RestaurantCard";
import { useEffect, useRef, useState } from "react";
import { FOOD_CART_URL } from "../util/contants";
import SimmerUI from "./SimmerUI";

const RestaurantBody = () => {
  useRef();
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("Get Data on Load");
    fetchCarts();
  }, []);

  async function fetchCarts() {
    try {
      const data = await fetch(FOOD_CART_URL);
      const json = await data.json();

      const restaurantData =
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantData(restaurantData);
      setFilteredRestaurantData(restaurantData);
    } catch (error) {
      console.error(error);
    }
  }

  const searchHandler = () => {
    const filteredData = restaurantData.filter((restaurant) => {
      return restaurant.info.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });

    setFilteredRestaurantData(filteredData);
  };

  if (restaurantData.length == 0) {
    return <SimmerUI />;
  }

  const filterTopRatedRestaurant = (event) => {
    setFilteredRestaurantData(
      filteredRestaurantData.filter((restaurant) => {
        return restaurant.info.avgRating > 4;
      })
    );
  };
  return (
    <>
      <div className="searchContainer">
        <div className="search">
          <input
            className="search-box"
            type="text"
            name="sarch"
            id="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-button" onClick={searchHandler}>
            Search
          </button>
        </div>
        <div>
          <button onClick={filterTopRatedRestaurant}>
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="restaurantContainer">
        {filteredRestaurantData.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantBody;
