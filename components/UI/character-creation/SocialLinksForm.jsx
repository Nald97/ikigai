import React, { useState } from "react";

const SocialLinksForm = () => {
  const [socialLinks, setSocialLinks] = useState({
    twitter: "",
    linkedin: "",
    github: "",
  });

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
    </div>
  );
};

export default SocialLinksForm;
