import React, { useState } from "react";
import { firestore, auth } from "../../../firebase-config";
import { collection, updateDoc } from "firebase/firestore";

const PersonalNeedsForm = () => {
  const [formData, setFormData] = useState({
    personalNeed1: "",
    personalNeed2: "",
    personalNeed3: "",
  });

  const fieldNames = ["personalNeed1", "personalNeed2", "personalNeed3"];
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await updateDoc(
        collection(firestore, `users/${auth.currentUser.uid}`),
        {
          personalNeeds: formData,
        }
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fieldNames.map((fieldName) => (
        <div key={fieldName}>
          <label htmlFor={fieldName}>{fieldName}</label>
          <input
            type="text"
            id={fieldName}
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

function Button({ onClick }) {
  return <button onClick={onClick}>Open Form</button>;
}

const PersonalNeedsCard = (props) => {
  const personalNeeds = props.personalNeeds;
  const professionalNeeds = props.professionalNeeds;

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="bg-white p-3 shadow-sm rounded-sm border-t-4 border-green-400">
      <div className="text-gray-700">
        <div className="grid md:grid-cols-2 text-sm">
          <div className="bg-gray-100 p-3 hover:shadow w-3/4">
            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
              <span className="text-green-500">
                <svg
                  className="h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <span>Personal Needs</span>
            </div>
            {personalNeeds?.length === 0 ? (
              <div className="flex justify-center">
                <Button onClick={handleOpenForm} />
                {isFormOpen && <PersonalNeedsForm />}
              </div>
            ) : (
              <ul className="list-inside space-y-2">
                {personalNeeds?.map((personalNeed) => (
                  <li>
                    <div className="text-teal-600">{personalNeed}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-gray-100 p-3 hover:shadow w-3/4">
            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
              <span className="text-green-500">
                <svg
                  className="h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <span>Professional Needs</span>
            </div>
            <div className="grid grid-cols-1">
              <ul className="list-inside space-y-2">
                {professionalNeeds?.map((professionalNeed) => (
                  <li>
                    <div className="text-teal-600">{professionalNeed}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalNeedsCard;
