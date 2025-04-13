import React from "react";
import UserInfo from "./UserInfo";
import ProfileOptions from "./ProfileOptions";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <UserInfo />
      <ProfileOptions />
    </div>
  );
};

export default Profile;