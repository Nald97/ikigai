import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import avatar from "../../../public/avatar.png";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const AvatarCard = ({ currentUser }) => {
  // Access currentUser from the Redux store
  // const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className="bg-white p-3 border-t-4 border-green-400">
      <div className="image overflow-hidden">
        <Image
          className="h-auto w-full mx-auto"
          src={currentUser?.avatarUrl ? currentUser?.avatarUrl : avatar}
          alt="Avatar"
          width={256}
          height={256}
        />
      </div>
      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
        {currentUser?.name}
      </h1>
      <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
        {currentUser?.description}
      </p>
      <div className="flex items-center space-x-2 mt-2">
        <HiOutlineMail className="text-gray-500" />
        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
          {currentUser?.email}
        </p>
      </div>
      <div className="flex items-center space-x-4 mt-2">
        {currentUser?.socialLinks?.github && (
          <Link
            href={currentUser.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-500 hover:text-gray-600" />
          </Link>
        )}
        {currentUser?.socialLinks?.twitter && (
          <Link
            href={currentUser.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-gray-500 hover:text-gray-600" />
          </Link>
        )}
        {currentUser?.socialLinks?.linkedin && (
          <Link
            href={currentUser.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray-500 hover:text-gray-600" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default AvatarCard;
