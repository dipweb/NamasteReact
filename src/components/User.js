import React, { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(0);

  return (
    <div className="user-card">
      <h1>Count={count}</h1>
      <h1>Count2={count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Noida</h3>
      <h4>Contact: @dipWeb</h4>
    </div>
  );
};

export default User;
