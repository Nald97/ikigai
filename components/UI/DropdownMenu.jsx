import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import avatar from "../../public/avatar.png";
import Image from "next/image";
import { onLogout } from "../../api/AuthAPI";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserLoginStatus,
  setUserEmail,
} from "../../store/reducers/authReducer";
import { toast } from "react-toastify";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await onLogout();
      router.push("/");
      dispatch(setUserLoginStatus(false));
      dispatch(setUserEmail(null));
    } catch (error) {
      console.log(error);
      toast.error("Error occurred during logout");
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <div className="inline-flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
          <Image
            src={currentUser?.avatarUrl ? currentUser?.avatarUrl : avatar}
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-xl">
          <button
            className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-indigo-500 hover:text-white"
            onClick={() => {
              router.push("/Profile");
              setIsOpen(false);
            }}
          >
            Profile
          </button>
          <button
            className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-indigo-500 hover:text-white"
            onClick={() => {
              router.push("/account");
              setIsOpen(false);
            }}
          >
            Account
          </button>

          <button
            className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-indigo-500 hover:text-white"
            onClick={() => {
              router.push("/help");
              setIsOpen(false);
            }}
          >
            Help
          </button>
          <button
            className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-indigo-500 hover:text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
