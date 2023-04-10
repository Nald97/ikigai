import React, { useState } from "react";
import { storage, auth } from "../../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { editProfile } from "../../../api/FirestoreAPI";

const AvatarEditForm = () => {
  const [avatar, setAvatar] = useState();
  const [uploading, setUploading] = useState(false);
  const user = useSelector((state) => state.auth.currentUser);

  const handleUpload = async () => {
    if (!avatar || !user) return;

    setUploading(true);

    const storageRef = ref(
      storage,
      `user-profile-image/${user.userID}/${avatar.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, avatar);

    uploadTask.on(
      "state_changed",
      () => {},
      (error) => {
        console.error("Upload failed:", error);
        setUploading(false);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        await editProfile(user.userID, { avatarUrl: url });
        setUploading(false);
      }
    );
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleCancel = () => {
    setAvatar(null);
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
        onChange={handleFileChange}
        disabled={uploading}
      />
      {avatar && (
        <img
          className="w-32 h-32 object-cover rounded-full"
          src={URL.createObjectURL(avatar)}
          alt="Preview"
        />
      )}
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleUpload}
          disabled={uploading}
        >
          Submit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleCancel}
          disabled={uploading}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AvatarEditForm;
