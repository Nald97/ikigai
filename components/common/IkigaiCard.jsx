import React from "react";

const IkigaiCard = ({ title, cardElements }) => {
  return (
    <div className="bg-gray-100 p-3 hover:shadow w-3/4">
      <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
        <span className="text-green-500">{/* SVG icon */}</span>
        <span>{title}</span>
      </div>
      <ul className="list-inside space-y-2">
        {cardElements.map((cardElement) => (
          <li>
            <div className="text-teal-600">{cardElement}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IkigaiCard;
