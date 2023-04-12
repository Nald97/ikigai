import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import AvatarCard from "../UI/avatar-card/AvatarCard";
import SkillsCard from "../UI/skills-card/SkillsCard";
import { HiOutlinePencil } from "react-icons/hi";

import ExperienceCard from "../UI/experience-card/ExperienceCard";
import PersonalNeedsCard from "../UI/needs-card/PersonalNeedsCard";
import AspirationCard from "../UI/aspirations/Aspirations";
import { useDispatch } from "react-redux";
import { getSingleUser } from "../../api/FirestoreAPI";

function ProfileCard({ currentUser }) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({});

  useMemo(() => {
    if (router?.query?.id) {
      getSingleUser(setCurrentProfile, router?.query?.id);
    }
  }, []);

  // Pass the data for the selected character to the corresponding components
  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2 ">
        <div className="w-full md:w-3/12 md:mx-2">
          <AvatarCard currentUser={currentUser} />
        </div>

        <div className="w-full md:w-9/12 mx-2 h-64">
          <PersonalNeedsCard currentUser={currentUser} />

          <div className="my-4" />
          <ExperienceCard currentUser={currentUser} />
          <div className="my-4" />
          <AspirationCard currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
