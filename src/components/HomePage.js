import React, { useContext } from "react";
import { AuthContext } from "./AuthContext"; 
import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Resources from "./Resources/ResourcesSection";

const HomePage = () => {
    const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {/* {isLoggedIn ? (
        <p>Welcome, logged in user!</p>
      ) : (
        <p>You are not logged in.</p>
      )} */}
      <>
        <Carousel />
        <Resources />
        <p>Home page</p>
        </>
    </div>
  );
}

export default HomePage;
