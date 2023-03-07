import React, { useMemo, useState } from "react";
import { onLogout } from "../../api/AuthAPI";
import { useRouter } from "next/router";
import { getCurrentUser } from "../../api/FirestoreAPI";
import Button from "../common/Button";

export default function ProfilePopup() {
  let router = useRouter();
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div className="border border-gray-400 w-200 h-auto bg-white rounded-md flex justify-center flex-col p-20">
      <p className="text-base font-semibold text-left text-black dark:text-white mt-[-7px]">
        {currentUser?.name}
      </p>
      <p className="text-sm font-normal text-black dark:text-white mt-[-15px]">
        {currentUser?.headline}
      </p>
      <Button
        title="View Profile"
        onClick={() =>
          router.push("/profile", {
            state: {
              id: currentUser?.id,
            },
          })
        }
      />
      <Button title="Log out" onClick={onLogout} />
    </div>
  );
}
