import { useState, useEffect } from "react";
import HomeComponent from "../page-components/HomeComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import Loader from "../components/common/Loader";
import { useRouter } from "next/router";

const HomePage = ({ currentUser }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if (!response?.accessToken) {
        router.push("/");
      } else {
        setLoading(false);
      }
    });
  }, []);

  console.log(currentUser);
  return loading ? <Loader /> : <HomeComponent currentUser={currentUser} />;
};

export default HomePage;
