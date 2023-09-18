import { useContext } from "react";

import { MEDIA_URL } from "../util/contants";
import UserContex from "../util/UserContext";

const RestaurantCard = ({ restaurant }) => {
  const { loggidInUser } = useContext(UserContex);

  console.log("LoggedIn user restaurant Card= ", loggidInUser);
  return (
    <>
      <div className="w-40 m-4 h-[240px] bg-slate-100 p-2 hover:bg-slate-200">
        <div className="h-1/2">
          <img
            className="w-40 h-28"
            src={MEDIA_URL + restaurant.info.cloudinaryImageId}
            alt="food Image"
          />
        </div>
        <div className="h-1/2">
          <h3 className="font-bold text-lg">{restaurant.info.name}</h3>
          <p>{restaurant.info.avgRating + " stars  "} </p>
          <p>{restaurant.info.costForTwo}</p>
          <p>{loggidInUser}</p>
        </div>
      </div>
    </>
  );
};

export const withTopRatedComponent = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute  bg-green-700 color text-white px-2 rounded-sm">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
