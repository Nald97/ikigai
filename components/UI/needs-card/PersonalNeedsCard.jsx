import React, { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import IkigaiCard from "../../common/IkigaiCard";

const PersonalNeedsCard = ({ currentUser, onEdit }) => {
  return (
    <div className="bg-white p-3 shadow-sm rounded-sm border-t-4 border-green-400">
      <div className="flex items-center space-x-2 font-semibold text-green-900 leading-8 text-sm">
        <HiOutlinePencil onClick={onEdit} />
        <p>Edit Profile</p>
      </div>

      <br />
      <div className="text-gray-700">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <IkigaiCard
            title="World Needs"
            cardElements={currentUser?.ikigai?.what_the_world_needs?.world || []}
          />
          <IkigaiCard
            title="Community Needs"
            cardElements={currentUser?.ikigai?.what_the_world_needs?.community || []}
          />
          <IkigaiCard
            title="Personal Needs"
            cardElements={currentUser?.ikigai?.what_the_world_needs?.you || []}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalNeedsCard;
