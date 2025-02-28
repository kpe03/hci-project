import React from "react";
import "./Profile.css";

const ProfileOptions = () => {
  return (
    <div className="profile-options">
      {/* First Row: Two Equal Buttons (50% width each) */}
      <div className="row-first">
        <div className="option">
          <h3>💳 My Wallet</h3>
          <p>Automatic Renewals</p>
        </div>
        <div className="option">
          <h3>💼 Ambassadors for ACM</h3>
          <p>Tell your colleagues about ACM</p>
        </div>
      </div>

      {/* Second Row: Three Equal Buttons (33.33% width each) */}
      <div className="row-second">
        <div className="option">Member Benefits</div>
        <div className="option">Customer Service FAQ</div>
        <div className="option">My Demographic Information</div>
      </div>
    </div>
  );
};

export default ProfileOptions;
