import React, { useState, useEffect } from "react";
import { getIkigaiElements } from "../api/FirestoreAPI";

import { useSelector, useDispatch } from "react-redux";
import AvatarForm from "../components/UI/character-creation/AvatarForm";
import SocialLinksEditForm from "../components/UI/character-edit/SocialLinksEditForm";
import DescriptionEditForm from "../components/UI/character-edit/DescriptionEditForm";
import CompetencesEditForm from "../components/UI/character-edit/CompetencesEditForm";
import PreferencesEditForm from "../components/UI/character-edit/PreferencesEditForm";
import NeedsEditForm from "../components/UI/character-edit/NeedsEditForm";

const NavigationMenu = ({ onSelect }) => {
  const menuItems = [
    "Change Avatar",
    "Change Social Links",
    "Change Description",
    "Change Competences",
    "Change Preferences",
    "Change Needs",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (index) => {
    setActiveIndex(index);
    onSelect(index);
  };

  return (
    <div className="flex flex-col space-y-4">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`w-full text-left px-4 py-2 focus:outline-none ${
            index === activeIndex
              ? "bg-blue-600 text-white font-semibold"
              : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
          }`}
          onClick={() => handleSelect(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

const Account = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const [ikigaiElements, setIkigaiElements] = useState({});
  const [userIkigai, setUserIkigai] = useState(null);
  const [loading, setLoading] = useState(true);

  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userId = currentUser ? currentUser.id : null;

  useEffect(() => {
    async function fetchedUserData() {
      if (currentUser) {
        setUserIkigai(currentUser?.ikigai);
      }
    }
    fetchedUserData();

    async function fetchIkigaiElements() {
      const fetchedIkigaiElements = await getIkigaiElements();
      setIkigaiElements(fetchedIkigaiElements);
    }
    if (currentUser) {
      fetchIkigaiElements();
      setLoading(false);
    }
  }, [currentUser]);

  const renderEditComponent = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    switch (selectedMenuItem) {
      case 0:
        return <AvatarForm />;
      case 1:
        return (
          <SocialLinksEditForm
            userSocialLinks={currentUser.socialLinks}
            userId={userId}
          />
        );
      case 2:
        return (
          <DescriptionEditForm
            userDescription={currentUser.description}
            userId={userId}
          />
        );
      case 3:
        return (
          <CompetencesEditForm
            userIkigai={userIkigai}
            ikigaiElements={ikigaiElements}
            userId={userId}
          />
        );
      case 4:
        return (
          <PreferencesEditForm
            userIkigai={userIkigai}
            ikigaiElements={ikigaiElements}
            userId={userId}
          />
        );
      case 5:
        return (
          <NeedsEditForm
            userIkigai={userIkigai}
            ikigaiElements={ikigaiElements}
            userId={userId}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex">
          <div className="w-1/4 p-4 bg-gray-200 shadow-inner">
            <NavigationMenu onSelect={setSelectedMenuItem} />
          </div>
          <div className="w-3/4 p-4 bg-gray-100 shadow-inner">
            {renderEditComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
