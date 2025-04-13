import React from "react";
import UserInfo from "./UserInfo";
import Services from "./Services";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <main className="profile-main">
        <div className="profile-container">
          <UserInfo />
          <Services />
        </div>
      </main>
    </div>
  );
};

export default Profile;