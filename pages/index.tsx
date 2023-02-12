import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import AvatarCard from "../components/UI/avatar-card/AvatarCard";
import SkillsCard from "../components/UI/skills-card/SkillsCard";
import BioCard from "../components/UI/bio-card/BioCard";
import ExperienceCard from "../components/UI/experience-card/ExperienceCard";
import PassionsCard from "../components/UI/passions-card/PassionsCard";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <AvatarCard />
      <SkillsCard />
      <BioCard />
      <ExperienceCard />
      <PassionsCard />
    </div>
  );
};

export default Home;
