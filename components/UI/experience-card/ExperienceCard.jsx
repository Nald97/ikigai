import React from "react";
import IkigaiCard from "../../common/IkigaiCard";

const ExperienceCard = ({ currentUser }) => {
  return (
    <div className="bg-white p-3 shadow-sm rounded-sm border-t-4 border-green-400">
      <div className="text-gray-700">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <IkigaiCard
            title="Your Expertise"
            cardElements={currentUser?.ikigai?.what_are_you_good_at?.expertise || []}
          />
          <IkigaiCard
            title="Your Knowledge"
            cardElements={currentUser?.ikigai?.what_are_you_good_at?.knowledge || []}
          />
          <IkigaiCard
            title="Your Skills"
            cardElements={currentUser?.ikigai?.what_are_you_good_at?.skills || []}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
