import RestaurantCard from "./RestaurantCard";

import restaurantObj from "../util/mockData";

const RestaurantBody = () => {
  return (
    <>
      <div className="searchContainer">
        <h1>Search</h1>
      </div>
      <div className="restaurantContainer">
        {restaurantObj.map((restaurant) => {
          console.log(restaurant);
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </div>
    </>
  );
};

export default RestaurantBody;
