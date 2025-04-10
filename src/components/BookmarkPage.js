import React from 'react';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const BookmarkPage = () => {
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
            <h1>Bookmark Page</h1>
            <p>Welcome to the Bookmark Page!</p>
        </div>
    );
};

export default BookmarkPage;