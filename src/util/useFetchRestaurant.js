import { useEffect, useState } from "react";
import { MENU_API_URL } from "./contants";

const useFetchRestaurant = (resId) => {
  const [restData, setRestData] = useState(null);
  useEffect(() => {
    console.log("fetch");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();

    setRestData(json);
  };
  return restData;
};

export default useFetchRestaurant;
