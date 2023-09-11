import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex={1}>
    Namaste React Using JSX
  </h1>
);

const number = 100;
const Heading = () => {
  return (
    <div>
      <h1>This is a React Course!</h1>
      <Title />
      {number}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
