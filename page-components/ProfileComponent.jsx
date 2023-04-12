import React, { useState } from "react";
import ProfileCard from "../components/common/ProfileCard";

const ProfileComponent = ({ currentUser }) => {
  return (
    <div>
      <ProfileCard currentUser={currentUser} />
    </div>
  );
};
export default ProfileComponent;
