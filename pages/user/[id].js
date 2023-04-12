// pages/user/[id].js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSingleUser } from "../../api/FirestoreAPI";
import AvatarCard from "../../components/UI/avatar-card/AvatarCard";
import SkillsCard from "../../components/UI/skills-card/SkillsCard";
import ExperienceCard from "../../components/UI/experience-card/ExperienceCard";
import PersonalNeedsCard from "../../components/UI/needs-card/PersonalNeedsCard";
import AspirationCard from "../../components/UI/aspirations/Aspirations";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getSingleUser(id).then((userData) => setUser(userData));
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2">
        <div className="w-full md:w-3/12 md:mx-2">
          <AvatarCard currentUser={user} />
        </div>

        <div className="w-full md:w-9/12 mx-2 h-64">
          <PersonalNeedsCard currentUser={user} />

          <div className="my-4" />
          <ExperienceCard currentUser={user} />
          <div className="my-4" />
          <AspirationCard currentUser={user} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

// pages/user/[id].js
// import React, { useState, useEffect, useMemo } from "react";
// import { useRouter } from "next/router";
// import { getSingleUser } from "../../api/FirestoreAPI";
// import AvatarCard from "../UI/avatar-card/AvatarCard";
// import SkillsCard from "../UI/skills-card/SkillsCard";
// import ExperienceCard from "../UI/experience-card/ExperienceCard";
// import PersonalNeedsCard from "../UI/needs-card/PersonalNeedsCard";
// import AspirationCard from "../UI/aspirations/Aspirations";

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const router = useRouter();
//   const { id } = router.query;

//   useEffect(() => {
//     if (id) {
//       getSingleUser(id).then((userData) => setUser(userData));
//     }
//   }, [id]);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto my-5 p-5">
//       <div className="md:flex no-wrap md:-mx-2">
//         <div className="w-full md:w-3/12 md:mx-2">
//           <AvatarCard currentUser={user} />
//         </div>

//         <div className="w-full md:w-9/12 mx-2 h-64">
//           <PersonalNeedsCard currentUser={user} />

//           <div className="my-4" />
//           <ExperienceCard currentUser={user} />
//           <div className="my-4" />
//           <AspirationCard currentUser={user} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
