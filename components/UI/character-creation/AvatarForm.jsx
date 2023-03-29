import React, { useState } from "react";

const AvatarForm = () => {
  const [avatar, setAvatar] = useState();

  return (
    <div className="flex flex-col items-center space-y-4">
      <label className="text-gray-700 font-bold text-lg">
        Upload your avatar (optional)
      </label>
      <input
        className="border border-gray-400 p-2"
        type="file"
        accept="image/*"
        onChange={(event) => setAvatar(event.target.files[0])}
      />
      {avatar && (
        <img
          className="w-32 h-32 object-cover rounded-full"
          src={URL.createObjectURL(avatar)}
          alt="Preview"
        />
      )}
    </div>
  );
};

export default AvatarForm;
