import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const HomePage = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if state exists and if isLoggedIn is passed
    if (location.state && location.state.isLoggedIn !== undefined) {
      setIsLoggedIn(location.state.isLoggedIn);
    }
  }, [location]);

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
