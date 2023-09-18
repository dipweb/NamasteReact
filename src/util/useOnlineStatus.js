import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [userStatus, setUserStatus] = useState("online");

  useEffect(() => {
    console.log("Inside Use Effect -- useOnlineStatus");

    window.addEventListener("online", () => {
      setUserStatus("online");
    });
    window.addEventListener("offline", () => {
      setUserStatus("offline");
    });
  }, []);
  return userStatus;
};

export default useOnlineStatus;
