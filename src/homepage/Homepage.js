import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Jobly:</h1>
      <button onClick={() => navigate("/login")}>Log in</button>
      <button onClick={() => navigate("/signup")}>Sign up</button>
    </div>
  );
}

export default Homepage;
