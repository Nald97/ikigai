import Header from "../Header/Header";
import AvatarCard from "../UI/avatar-card/AvatarCard";
import SkillsCard from "../UI/skills-card/SkillsCard";
import BioCard from "../UI/bio-card/BioCard";
import ExperienceCard from "../UI/experience-card/ExperienceCard";
import PassionsCard from "../UI/passions-card/PassionsCard";
import useSheetData from "../../hooks/getSheetData";
import PersonalNeedsCard from "../UI/needs-card/PersonalNeedsCard";
import ProfessionalNeedsCard from "../UI/needs-card/ProfessionalNeedsCard";

const CharacterPageLayout = (props) => {
  const { sheetData } = useSheetData();
  const name = props.name;

  return (
    <div>
      <Header />
      <main>
        <AvatarCard Name={name} />
        <SkillsCard skills={sheetData.skills} />
        <BioCard bio={sheetData.bio} />
        <PersonalNeedsCard personalNeeds={sheetData.personalNeeds} />
        <ProfessionalNeedsCard
          professionalNeeds={sheetData.professionalNeeds}
        />
        <ExperienceCard experience={sheetData.experience} />
      </main>

      {/* <PassionsCard /> */}
    </div>
  );
};

export default CharacterPageLayout;
