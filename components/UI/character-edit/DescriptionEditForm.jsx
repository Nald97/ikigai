import React, { useState, useEffect } from "react";
import { editProfile } from "../../../api/FirestoreAPI";

const DescriptionEditForm = ({ userDescription, userId }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (userDescription) {
      setDescription(userDescription || "");
    }
  }, [userDescription, setDescription]);

  const handleSaveChanges = () => {
    const updatedData = {
      description: description,
    };

    editProfile(userId, updatedData);
  };

  return (
    <div className="space-y-4">
      <label className="block text-gray-700 font-bold text-lg">
        Describe yourself in one line (optional)
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none h-20"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
      <div className="mt-6">
        <button
          className="bg-green-600 text-white font-semibold px-6 py-2 rounded shadow-md hover:bg-gray-700 focus:outline-none"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default DescriptionEditForm;
