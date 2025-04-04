import React, { useState } from "react";
import { fromJS } from "immutable";
export default function App19() {
  const [user, setUser] = useState(fromJS({ name: "John", score: 80 }));
  const updateScore = () => {
    const updatedUser = user.set("score", 95);
    setUser(updatedUser);
  };
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.get("name")}</p>
      <p>Score: {user.get("score")}</p>
      <button onClick={updateScore}>Change Score</button>
    </div>
  );
}