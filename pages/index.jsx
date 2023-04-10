/**
 * Signin Component
 *
 * This is a React functional component responsible for handling user sign-in.
 * It leverages the Firebase authentication API to manage the user authentication state.
 * If a user is authenticated, they will be redirected to the Profile page.
 * Otherwise, the SigninComponent is displayed to allow users to sign in.
 *
 * Dependencies:
 * - react: React hooks useState, useEffect
 * - next/router: useRouter
 * - firebase/auth: onAuthStateChanged
 * - ../firebase-config: auth
 * - ../page-components/SigninComponent: SigninComponent
 * - ../components/common/Loader: Loader
 *
 * @example
 * return (
 *  <Signin />
 * );
 *
 * @returns {JSX.Element} A loader if the authentication state is being determined,
 *                        or the SigninComponent if the user is not authenticated.
 */
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
    const unsubscribe = onAuthStateChanged(auth, (response) => {
      if (response?.accessToken) {
        router.push("/Profile");
      } else {
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return loading ? <Loader /> : <SigninComponent />;
}
