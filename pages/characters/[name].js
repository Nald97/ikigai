import { useRouter } from "next/router";
import useSheetData from "../../hooks/getSheetData";
import AvatarCard from "../../components/UI/avatar-card/AvatarCard";
import SkillsCard from "../../components/UI/skills-card/SkillsCard";
import BioCard from "../../components/UI/bio-card/BioCard";
import ExperienceCard from "../../components/UI/experience-card/ExperienceCard";
import PassionsCard from "../../components/UI/passions-card/PassionsCard";
import ProfessionalNeedsCard from "../../components/UI/needs-card/ProfessionalNeedsCard";
import PersonalNeedsCard from "../../components/UI/needs-card/PersonalNeedsCard";
import ValuesCard from "../../components/UI/values-card/ValuesCard";

function CharacterPage() {
  const router = useRouter();
  const { sheetData } = useSheetData();
  const characterName = router.query.name;

  // Filter the data to find the character that matches the selected name
  const selectedCharacter = sheetData?.find(
    (character) => character?.name === characterName
  );

  // Pass the data for the selected character to the corresponding components
  return (
    <div>
    
      <AvatarCard name={selectedCharacter?.name} />
      <SkillsCard skills={selectedCharacter?.skills} />
      <BioCard bio={selectedCharacter?.bio} />
      <ExperienceCard experience={selectedCharacter?.experience} />
      <PassionsCard />
      <ProfessionalNeedsCard
        professionalNeeds={selectedCharacter?.professionalNeeds}
      />
      <PersonalNeedsCard personalNeeds={selectedCharacter?.personalNeeds} />
      <ValuesCard values={selectedCharacter?.values} />
    </div>
  );
}

export default CharacterPage;
