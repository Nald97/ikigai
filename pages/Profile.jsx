import { useState, useEffect, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import ProfileComponent from "../page-components/ProfileComponent";
import { auth } from "../firebase-config";
import Loader from "../components/common/Loader";
import { getCurrentUser } from "../api/FirestoreAPI";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentUser } from "../store/reducers/authReducer";

const Profile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if (!response?.accessToken) {
        router.push("/");
      } else {
        setLoading(false);
        getCurrentUser(dispatch);
      }
    });
  }, [router, dispatch]);
  console.log(currentUser?.name);

  return loading ? <Loader /> : <ProfileComponent currentUser={currentUser} />;
};

export default Profile;
