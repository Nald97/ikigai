import React from "react";

const AvatarForm = ({ avatar, setAvatar, onAvatarSelected }) => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
    onAvatarSelected(file);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <label className="text-gray-700 font-bold text-lg">
        Upload your avatar (optional)
      </label>
      <input
        className="border border-gray-400 p-2"
        type="file"
        accept="image/*"
        onChange={handleUpload}
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
