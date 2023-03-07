import { useState } from "react";
import { useRouter } from "next/router";
import { LoginAPI } from "../api/AuthAPI";
import { toast } from "react-toastify";

const SigninComponent = () => {
  let router = useRouter();
  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      let response = await LoginAPI(credentials.email, credentials.password);
      toast.success("Login Successful");

      localStorage.setItem("userEmail", response.user.email);
      router.push("/Home");
    } catch (error) {
      console.log(error);
      toast.error("Please check your credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 w-1/3">
      <h1 className="text-3xl font-bold mb-4 justify-center flex">Sign In</h1>

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
          onClick={login}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SigninComponent;
