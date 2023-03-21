import React, { useState, useEffect } from "react";
import SigninComponent from "../page-components/SigninComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { useRouter } from "next/router";
import Loader from "../components/common/Loader";

export default function Signin() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if (response?.accessToken) {
        router.push("/Profile");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <SigninComponent />;
}
