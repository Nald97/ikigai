import { useState } from "react";
import { useRouter } from "next/router";
import { LoginAPI } from "../api/AuthAPI";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  setUserLoginStatus,
  setUserEmail,
} from "../store/reducers/authReducer";

const SigninComponent = () => {
  let router = useRouter();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      let response = await LoginAPI(credentials.email, credentials.password);
      toast.success("Login Successful");

      dispatch(setUserLoginStatus(true));
      dispatch(setUserEmail(response.user.email));
      router.push("/Profile");
    } catch (error) {
      console.log(error);
      toast.error("Please check your credentials");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center mt-20"
      style={{
        background: "white",
        marginTop: "150px",
        marginLeft: "auto",
        marginRight: "auto",
        width: "400px",
        height: "400px",
        borderRadius: "10px",
      }}
    >
      <h1 className="text-3xl font-bold mb-4 justify-center flex">
        Sign In To Your Account
      </h1>
      <br />
      <p>
        Or{" "}
        <a
          href="/Signup"
          style={{ textDecoration: "underline", color: "blue" }}
        >
          Sign Up if you don't have an account
        </a>{" "}
      </p>
      <br />
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
          placeholder=" Email"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="Password"
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
          placeholder=" Password"
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
