import { useState } from "react";

const UserFunction = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="userDetails">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h1>Name: {props.name}</h1>
      <h2>Location: {props.location}</h2>
      <p>Email: nandujasthi@gmail.com</p>
    </div>
  );
};

export default UserFunction;
