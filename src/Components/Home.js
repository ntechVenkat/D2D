import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [auth, setAuth] = useState(false);
  if (auth) {
    return <Navigate to="/login/Authenticated" />;
  }
  return (
    <div>
      <h1>Home Component</h1>
      <button
        onClick={() => {
          setAuth(true);
        }}
      >
        Login
      </button>
    </div>
  );
};
export default Home;
