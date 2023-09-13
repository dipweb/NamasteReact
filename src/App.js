import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import RestaurantBody from "./components/RestaurantBody";

/*


*/

const App = () => {
  return (
    <div>
      <Header />
      <RestaurantBody />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
