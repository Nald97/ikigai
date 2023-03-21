import React, { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";

const PersonalNeedsCard = ({ currentUser, onEdit }) => {
  return (
    <div className="bg-white p-3 shadow-sm rounded-sm border-t-4 border-green-400">
      <div className="flex items-center space-x-2 font-semibold text-green-900 leading-8 text-sm">
        <HiOutlinePencil onClick={onEdit} />
        <p>Edit Profile</p>
      </div>

      <br />
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
            <ul className="list-inside space-y-2">
              {currentUser?.personalNeeds?.map((need) => (
                <li>
                  <div className="text-teal-600">{need}</div>
                </li>
              ))}
            </ul>
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
                {currentUser?.professionalNeeds?.map((proNeed) => (
                  <li>
                    <div className="text-teal-600">{proNeed}</div>
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
