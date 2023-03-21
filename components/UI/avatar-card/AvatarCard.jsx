import React, { useMemo, useState } from "react";
import { sliderClasses } from "@mui/material";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import { getCurrentUser } from "../../../api/FirestoreAPI";

const AvatarCard = ({ currentUser }) => {
  return (
    <div className="bg-white p-3 border-t-4 border-green-400">
      <div className="image overflow-hidden">
        <Image className="h-auto w-full mx-auto" src={avatar} alt="" />
      </div>
      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
        {currentUser?.name}
      </h1>

      <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">{currentUser.bio}</p>
    </div>
  );
};

export default AvatarCard;
