import React, { useState, useEffect } from "react";
import { editProfile } from "../../../api/FirestoreAPI";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialLinksEditForm = ({ userSocialLinks, userId }) => {
  const [socialLinks, setSocialLinks] = useState({
    twitter: "",
    linkedin: "",
    github: "",
  });

  useEffect(() => {
    if (userSocialLinks) {
      setSocialLinks(userSocialLinks || {});
    }
  }, [userSocialLinks, setSocialLinks]);

  const handleSaveChanges = () => {
    const updatedData = {
      socialLinks: socialLinks,
    };

    editProfile(userId, updatedData);
  };

  return (
    <div className="space-y-4">
      <label className="block text-gray-700 font-bold text-lg">
        Social Links (optional)
      </label>

      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Twitter"
        value={socialLinks.twitter}
        onChange={(event) =>
          setSocialLinks({ ...socialLinks, twitter: event.target.value })
        }
      />

      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="LinkedIn"
        value={socialLinks.linkedin}
        onChange={(event) =>
          setSocialLinks({ ...socialLinks, linkedin: event.target.value })
        }
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="GitHub"
        value={socialLinks.github}
        onChange={(event) =>
          setSocialLinks({ ...socialLinks, github: event.target.value })
        }
      />
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

export default SocialLinksEditForm;
