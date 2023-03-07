import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AvatarCard from "../../components/UI/avatar-card/AvatarCard";
import SkillsCard from "../../components/UI/skills-card/SkillsCard";
import BioCard from "../../components/UI/bio-card/BioCard";
import ExperienceCard from "../../components/UI/experience-card/ExperienceCard";
import PassionsCard from "../../components/UI/passions-card/PassionsCard";
import ProfessionalNeedsCard from "../../components/UI/needs-card/ProfessionalNeedsCard";
import PersonalNeedsCard from "../../components/UI/needs-card/PersonalNeedsCard";
import ValuesCard from "../../components/UI/values-card/ValuesCard";
import AspirationCard from "../../components/UI/aspirations/Aspirations";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase-config";

function CharacterPage() {
  const router = useRouter();
  const [userData, setUserData] = useState([]);
  const { query } = router;

  // Get the name of the character from the URL
  const { userName } = query;

  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(firestore, "users"));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUserData(newData);
  };

  useEffect(() => {
    fetchPost();
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  // Filter the data to find the character that matches the selected name
  const selectedCharacter = userData?.find(
    (character) => character?.displayName === userName
  );

  // Pass the data for the selected character to the corresponding components
  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2 ">
        <div className="w-full md:w-3/12 md:mx-2">
          <AvatarCard
            displayName={selectedCharacter?.displayName}
            bio={selectedCharacter?.bio}
          />
          <div className="my-4" />
          <SkillsCard />
        </div>

        <div class="w-full md:w-9/12 mx-2 h-64">
          <PersonalNeedsCard
            personalNeeds={selectedCharacter?.personalNeeds}
            professionalNeeds={selectedCharacter?.professionalNeeds}
          />
          <div className="my-4" />
          <ExperienceCard experience={selectedCharacter?.experience} />
          <div className="my-4" />
          <AspirationCard
            aspirations={selectedCharacter?.aspirations}
            passions={selectedCharacter?.passions}
          />
        </div>
      </div>
    </div>
  );
}

export default CharacterPage;
