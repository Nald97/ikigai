import React, { useState, useEffect } from "react";
import {
  getIkigaiElements,
  editProfile,
  getCurrentUser,
} from "../api/FirestoreAPI";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";
import { useSelector, useDispatch } from "react-redux";
import AvatarForm from "../components/UI/character-creation/AvatarForm";
import SocialLinksForm from "../components/UI/character-creation/SocialLinksForm";
import DescriptionForm from "../components/UI/character-creation/DescriptionForm";
import CompetencesEditForm from "../components/UI/character-edit/CompetencesEditForm";
import PreferencesEditForm from "../components/UI/character-edit/PreferencesEditForm";
import NeedsEditForm from "../components/UI/character-edit/NeedsEditForm";
import { setCurrentUser } from "../store/reducers/authReducer";

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
    <div className="w-full p-4 bg-gray-200 shadow-inner mb-4">
      <ul className="flex space-x-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              className={`px-4 py-2 focus:outline-none ${
                index === activeIndex
                  ? "bg-gray-800 text-white font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
              onClick={() => handleSelect(index)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Account = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const [ikigaiElements, setIkigaiElements] = useState({});
  const [userIkigai, setUserIkigai] = useState(null);

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
    }
  }, [currentUser]);

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

  console.log("userIkigai", userIkigai);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <NavigationMenu onSelect={setSelectedMenuItem} />
        <div className="p-4 bg-gray-100 shadow-inner">
          {renderEditComponent()}
        </div>
      </div>
    </div>
  );
};

export default Account;
