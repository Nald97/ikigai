import React, { useState } from "react";
import AvatarCard from "../components/UI/avatar-card/AvatarCard";
import ProfileCard from "../components/common/ProfileCard";
import ProfileEdit from "../components/common/ProfileEdit";

const ProfileComponent = ({ currentUser }) => {
  const [isEdit, setisEdit] = useState(false);

  const onEdit = () => {
    setisEdit(!isEdit);
  };
  console.log(currentUser?.name);

  return (
    <div>
      {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      )}
    </div>
  );
};
export default ProfileComponent;
