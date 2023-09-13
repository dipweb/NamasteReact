const RestaurantCard = ({ restaurant }) => {
  console.log("inside rest card", restaurant);
  return (
    <>
      <div className="restaurant-card">
        <img
          className="card-image"
          src={restaurant.imageUrl}
          alt="food Image"
        />
        <h3>{restaurant.name}</h3>
        <p>{restaurant.avgRatting + " stars  "} </p>
        <p>{restaurant.deliveryTime}</p>
      </div>
    </>
  );
};

export default RestaurantCard;
