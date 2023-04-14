import React, { useState, useEffect } from "react";
import { getAllUsers, getSingleUser } from "../api/FirestoreAPI";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";
import avatar from "../public/avatar.png";
import SearchFilter from "../components/common/SearchFilter";

const UserExploreCard = ({ userData }) => {
  const router = useRouter();

  const truncatedDescription =
    userData?.description?.length > 50
      ? userData.description.slice(0, 50) + "..."
      : userData.description;

  const handleCardClick = () => {
    router.push(`/user/${userData.userID}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="px-4 py-2">
        <div className="flex items-center">
          <img
            className="w-16 h-16 object-cover rounded-full mr-4"
            src={userData.avatarUrl || "/avatar.png"}
            alt={userData.name}
          />
          <div className="flex flex-col">
            <h3 className="text-gray-900 font-medium text-lg">
              {userData.name}
            </h3>
            <p className="text-gray-600 text-sm">{truncatedDescription}</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 flex justify-between items-center">
        <button className="text-white bg-blue-500 hover:bg-blue-600 font-medium py-2 px-4 rounded">
          Connect
        </button>
        <button className="text-gray-600 bg-white hover:bg-gray-100 font-medium py-2 px-4 rounded border border-gray-300">
          Message
        </button>
      </div>
    </div>
  );
};

const FilterOptions = ({ handleSortChange }) => {
  return (
    <div className="mb-4">
      <div className="ml-4">
        <label htmlFor="sort" className="mr-2">
          Sort by:
        </label>
        <select
          id="sort"
          className="border border-gray-300 rounded py-2 px-4"
          onChange={handleSortChange}
        >
          <option value="default">Default</option>
          <option value="aToZ">A to Z</option>
          <option value="zToA">Z to A</option>
        </select>
      </div>
    </div>
  );
};

const Explore = () => {
  const [users, setUsers] = useState([]);
  const [filterOpened, setFilterOpened] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const { allUsers } = useSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if (!response?.accessToken) {
        router.push("/");
      } else {
        getAllUsers(dispatch);
      }
    });
  }, [router, dispatch]);
  console.log(allUsers);

  const handleSortChange = (event) => {
    const sortOption = event.target.value;

    const sortedUsers = [...allUsers].sort((a, b) => {
      if (sortOption === "aToZ") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "zToA") {
        return b.name.localeCompare(a.name);
      } else {
        return 0; // Default sorting
      }
    });

    setUsers(sortedUsers);
  };

  useEffect(() => {
    if (allUsers) {
      setUsers(allUsers);
    }
  }, [allUsers]);

  const toggleFilter = () => {
    setFilterOpened(!filterOpened);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <SearchFilter onToggle={toggleFilter} />
        <FilterOptions handleSortChange={handleSortChange} />
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${
          filterOpened ? "mt-10" : ""
        }`}
      >
        {users?.map((user) => (
          <UserExploreCard key={user.userID} userData={user} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
