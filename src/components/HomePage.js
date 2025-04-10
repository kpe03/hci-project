import React, { useContext } from "react";
import { AuthContext } from "./AuthContext"; 
import { useState, useEffect } from "react";


const HomePage = () => {
    const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, logged in user!</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default HomePage;
