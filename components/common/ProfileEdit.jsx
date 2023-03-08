import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { editProfile } from "../../api/FirestoreAPI";
import Image from "next/image";
import avatar from "../../public/avatar.png";

const PERSONAL_NEEDS_KEY = "personalNeeds";
const PROFESSIONAL_NEEDS_KEY = "professionalNeeds";

export default function ProfileEdit({ onEdit, currentUser }) {
  const [editInputs, setEditInputs] = useState(currentUser);

  function handleAdd(f) {
    const inps = { ...editInputs };
    if (inps[f] === undefined) inps[f] = [];
    inps[f].push("");
    setEditInputs(inps);
  }

  function handleRemove(i, f) {
    const inps = { ...editInputs };
    if (inps[f] === undefined) return;
    inps[f].splice(i, 1);
    setEditInputs(inps);
  }

  function handleInputChange(event, i, f) {
    const inps = { ...editInputs };
    if (inps[f] === undefined) return;
    inps[f][i] = event.target.value;
    setEditInputs({
      ...inps,
    });
  }

  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await onEdit();
  };

  return (
    <div className="w-auto h-auto bg-whitesmoke m-30 rounded-md p-20 relative">
      <div className="edit-icon cursor-pointer p-2 rounded-full hover:bg-gray-300">
        <AiOutlineClose className="close-icon" onClick={onEdit} size={25} />
      </div>

      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            {/* ***************************************************************** */}
            {/* ***************************************************************** */}
            {/* ***************************************************************** */}

            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <Image className="h-auto w-full mx-auto" src={avatar} alt="" />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                <input
                  onChange={getInput}
                  className="common-input"
                  placeholder="Name"
                  name="name"
                  value={editInputs.name}
                />
              </h1>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6"></p>
            </div>
            {/* ***************************************************************** */}
            {/* ***************************************************************** */}
            {/* ***************************************************************** */}
            <div className="my-4"></div>
            {/* ***************************************************************** */}
            {/* ***************************************************************** */}
            {/* ***************************************************************** */}
          </div>

          <div class="w-full md:w-9/12 mx-2 h-64">
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

                    <button
                      type="button"
                      onClick={() => handleAdd(PERSONAL_NEEDS_KEY)}
                    >
                      +
                    </button>
                    {editInputs.personalNeeds?.map((field, idx) => {
                      return (
                        <div key={`-${idx}`}>
                          <input
                            onChange={(e) =>
                              handleInputChange(e, idx, PERSONAL_NEEDS_KEY)
                            }
                            className="common-input"
                            placeholder="personal needs"
                            value={field}
                            name={`personalNeeds-${idx}`}
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleRemove(idx, PERSONAL_NEEDS_KEY)
                            }
                          >
                            X
                          </button>
                        </div>
                      );
                    })}
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
                    <button
                      type="button"
                      onClick={() => handleAdd(PERSONAL_NEEDS_KEY)}
                    >
                      +
                    </button>
                    {editInputs.professionalNeeds?.map((field, idx) => {
                      return (
                        <div key={`-${idx}`}>
                          <input
                            onChange={(e) =>
                              handleInputChange(e, idx, PROFESSIONAL_NEEDS_KEY)
                            }
                            className="common-input"
                            placeholder="Professional Needs"
                            value={field}
                            name={`professionalNeeds-${idx}`}
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleRemove(idx, PROFESSIONAL_NEEDS_KEY)
                            }
                          >
                            X
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* ***************************************************************** */}
            {/* ***************************************************************** */}
            <div className="my-4"></div>
            {/* ***************************************************************** */}
            {/* ***************************************************************** */}
            {/* ***************************************************************** */}
            <div className="bg-white p-3  rounded-sm shadow-sm">
              <div className="grid grid-cols-2">
                <div className="bg-gray-100 p-3 hover:shadow w-3/4">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Experience</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <input
                      onChange={getInput}
                      className="common-input"
                      placeholder="Experience"
                      value={editInputs.experience}
                      name="experience"
                    />
                  </ul>
                </div>
                <div className="bg-gray-100 p-3 hover:shadow w-3/4">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Education</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <input
                      onChange={getInput}
                      className="common-input"
                      placeholder="education"
                      value={editInputs.education}
                      name="education"
                    />
                  </ul>
                </div>
              </div>
            </div>
            {/* ***************************************************************** */}
            {/* ***************************************************************** */}
            <div className="my-4"></div>
            {/* ***************************************************************** */}
            {/* ***************************************************************** */}
            {/* ***************************************************************** */}

            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="grid grid-cols-2">
                <div className="bg-gray-100 p-3 hover:shadow w-3/4">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Aspirations</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <input
                      onChange={getInput}
                      className="common-input"
                      placeholder="Aspirations"
                      value={editInputs.aspirations}
                      name="aspirations"
                    />
                  </ul>
                </div>
                <div className="bg-gray-100 p-3 hover:shadow w-3/4">
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Passions</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <input
                      onChange={getInput}
                      className="common-input"
                      placeholder="Passions"
                      value={editInputs.passions}
                      name="passions"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="save-container">
        <button className="save-btn" onClick={updateProfileData}>
          Save
        </button>
      </div>
    </div>
  );
}
