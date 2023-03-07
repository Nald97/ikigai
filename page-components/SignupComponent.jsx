import { useState } from "react";
import { useRouter } from "next/router";
import { RegisterAPI } from "../api/AuthAPI";
import { postUserData } from "../api/FirestoreAPI";
import { getUniqueID } from "../helper/getUniqueId";
import { toast } from "react-toastify";

const SignupComponent = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({});

  const signup = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account Created!");
      postUserData({
        userID: getUniqueID(),
        name: credentials.name,
        email: credentials.email,
      });
      router.push("/Home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
    }
  };

  return (
    <div className="border-white-500 flex flex-col items-center justify-center mt-20 w-1/3">
      <h1 className="text-3xl font-bold mb-4 justify-center flex">Sign Up</h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="displayName"
        >
          Name or Nickname
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="displayName"
          type="text"
          onChange={(event) =>
            setCredentials({ ...credentials, name: event.target.value })
          }
          placeholder="Name or Nickname"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
          placeholder="Email"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
          placeholder="password"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={signup}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default SignupComponent;
