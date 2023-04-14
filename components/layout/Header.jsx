import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import logo from "../../public/abstract.png";
import user from "../../public/user.png";
import { AiOutlineHome, AiOutlineUserSwitch } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import React, { useEffect, useState } from "react";
import DropdownMenu from "../UI/DropdownMenu";
import Link from "next/link";
import SearchBar from "../common/SearchBar";

const Header = () => {
  const router = useRouter();
  const path = router.pathname;

  const isLoggedInRedux = useSelector((state) => state.auth.userLoginStatus);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isLoggedInRedux);
  }, [isLoggedInRedux]);

  return (
    <header className="flex w-full items-center justify-between bg-gray-900 py-4 px-4">
      <div className="flex items-center">
        <div className="mr-2">
          <Image
            src={logo}
            alt="logo"
            className="w-10 h-10"
            onClick={() => router.push("/Home")}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">| littlefish</h1>
        </div>
      </div>

      {isLoggedIn && (
        <div className="flex items-center">
          <nav>
            <ul className="flex items-center space-x-6 text-xl">
              <li>
                <AiOutlineHome
                  size={30}
                  color="white"
                  className="cursor-pointer hover:text-gray-400 transition-colors duration-200"
                  onClick={() => router.push("/Home")}
                />
              </li>
              <li>
                <AiOutlineUserSwitch
                  size={30}
                  color="white"
                  className="cursor-pointer hover:text-gray-400 transition-colors duration-200"
                  onClick={() => router.push("/")}
                />
              </li>
              <li>
                <BsBriefcase
                  size={30}
                  color="white"
                  className="cursor-pointer hover:text-gray-400 transition-colors duration-200"
                  onClick={() => router.push("/")}
                />
              </li>
              <li>
                <MdOutlineExplore
                  size={30}
                  color="white"
                  className="cursor-pointer hover:text-gray-400 transition-colors duration-200"
                  onClick={() => router.push("/explore")}
                />
              </li>
            </ul>
          </nav>

          <div className="ml-4">
            <DropdownMenu />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
