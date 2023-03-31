import React from "react";
import IkigaiCard from "../../common/IkigaiCard";

const AspirationCard = ({ currentUser }) => {
  return (
    <div className="bg-white p-3 shadow-sm rounded-sm border-t-4 border-green-400">
      <div className="text-gray-700">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <IkigaiCard
            title="Your Hobbies"
            cardElements={currentUser?.ikigai?.what_do_you_love?.hobbies || []}
          />
          <IkigaiCard
            title="Your Interests"
            cardElements={currentUser?.ikigai?.what_do_you_love?.interests || []}
          />
          <IkigaiCard
            title="Your Values"
            cardElements={currentUser?.ikigai?.what_do_you_love?.values || []}
          />
        </div>
      </div>
    </div>
  );
};

export default AspirationCard;
