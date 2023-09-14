import { MEDIA_URL } from "../util/contants";

const RestaurantCard = ({ restaurant }) => {
  return (
    <>
      <div className="restaurant-card">
        <img
          className="card-image"
          src={MEDIA_URL + restaurant.info.cloudinaryImageId}
          alt="food Image"
        />
        <h3>{restaurant.info.name}</h3>
        <p>{restaurant.info.avgRating + " stars  "} </p>
        <p>{restaurant.info.costForTwo}</p>
      </div>
    </>
  );
};

export default RestaurantCard;
