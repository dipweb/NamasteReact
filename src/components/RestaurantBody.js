import RestaurantCard, { withTopRatedComponent } from "./RestaurantCard";
import { useEffect, useRef, useState, useContext } from "react";
import { FOOD_CART_URL } from "../util/contants";
import SimmerUI from "./SimmerUI";
import { Link } from "react-router-dom";

import useOnlineStatus from "../util/useOnlineStatus";
import UserContex from "../util/UserContext";

const RestaurantBody = () => {
  useRef();
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggidInUser, setUsername } = useContext(UserContex);

  const TopRatedComponent = withTopRatedComponent(RestaurantCard);

  const userStatus = useOnlineStatus();
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

  if (userStatus === "offline") {
    return (
      <h1>
        It seems you have lost internet connection. Please check you internet
      </h1>
    );
  }

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
      <div className="flex flex-row">
        <div className="my-5">
          <input
            className="border border-solid border-black p-1 ml-1"
            type="text"
            name="sarch"
            id="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-400 mx-2 p-1 rounded-md"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
        <div className="my-5">
          <button
            className="bg-green-400 p-1 rounded-md"
            onClick={filterTopRatedRestaurant}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div>
          <input
            type="text"
            value={loggidInUser}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantData.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.avgRating > 4 ? (
                <TopRatedComponent restaurant={restaurant} />
              ) : (
                <RestaurantCard restaurant={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantBody;
