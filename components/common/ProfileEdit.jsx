import React, { useState, useEffect } from "react";
import MultiSelectButtonGroup from "./MultiselectButtonGroup";
import {
  getIkigaiElements,
  editProfile,
  getCurrentUser,
} from "../../api/FirestoreAPI";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { auth } from "../../firebase-config";
import RenderSection from "./RenderSection";
import { useSelector } from "react-redux";
import AvatarForm from "../UI/character-creation/AvatarForm";
import SocialLinksForm from "../UI/character-creation/SocialLinksForm";
import DescriptionForm from "../UI/character-creation/DescriptionForm";
import CompetencesEditForm from "../UI/character-edit/CompetencesEditForm";
import PreferencesEditForm from "../UI/character-edit/PreferencesEditForm";
import NeedsEditForm from "../UI/character-edit/NeedsEditForm";

const NavigationMenu = ({ onSelect }) => {
  const menuItems = [
    "Change Avatar",
    "Change Social Links",
    "Change Description",
    "Change Competences",
    "Change Preferences",
    "Change Needs",
  ];

  return (
    <div className="w-1/3 p-4">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2">
            <button
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
              onClick={() => onSelect(index)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProfileEdit = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const [ikigaiElements, setIkigaiElements] = useState({});
  const [preselected, setPreselected] = useState({});

  const { currentUser } = useSelector((state) => state.auth);
  const userId = currentUser ? currentUser.uid : null;

  useEffect(() => {
    async function fetchedUserData() {
      if (userId) {
        const userData = await getCurrentUser(userId);
        setPreselected(userData?.ikigai);
      }
    }
    fetchedUserData();

    async function fetchIkigaiElements() {
      const fetchedIkigaiElements = await getIkigaiElements();
      setIkigaiElements(fetchedIkigaiElements);
    }
    fetchIkigaiElements();
  }, [userId]);

  const renderEditComponent = () => {
    if (!currentUser || !ikigaiElements) {
      return null;
    }

    switch (selectedMenuItem) {
      case 0:
        return <AvatarForm />;
      case 1:
        return <SocialLinksForm />;
      case 2:
        return <DescriptionForm />;
      case 3:
        return (
          <CompetencesEditForm
            userIkigai={preselected}
            ikigaiElements={ikigaiElements}
          />
        );
      case 4:
        return (
          <PreferencesEditForm
            userIkigai={preselected}
            ikigaiElements={ikigaiElements}
          />
        );
      case 5:
        return (
          <NeedsEditForm
            userIkigai={preselected}
            ikigaiElements={ikigaiElements}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex">
          <NavigationMenu onSelect={setSelectedMenuItem} />
          <div className="w-2/3 p-4">{renderEditComponent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
