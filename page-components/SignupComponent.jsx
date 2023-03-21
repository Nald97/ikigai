import { useState } from "react";
import { useRouter } from "next/router";
import { RegisterAPI } from "../api/AuthAPI";
import { postUserData, checkNameUniqueness } from "../api/FirestoreAPI";
import { getUniqueID } from "../helper/getUniqueId";
import { toast } from "react-toastify";

const SignupComponent = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({});

  const signup = async () => {
    try {
      // Check if displayName already exists
      let isNameUnique = await checkNameUniqueness(credentials.name);
      if (!isNameUnique) {
        toast.error("Name already exists");
        return;
      }

      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account Created!");
      postUserData({
        userID: res.user.uid,
        name: credentials.name,
        email: credentials.email,
        avatar: "",
        socialLinks: {
          twitter: "",
          linkedin: "",
          github: "",
        },
        description: "",
        ikigai: {
          whatDoYouLove: {
            interests: [],
            values: [],
            hobbies: [],
          },
          whatAreYouGoodAt: {
            skills: [],
            knowledge: [],
            expertise: [],
          },
          whatTheWorldNeeds: {
            world: [],
            community: [],
            you: [],
          },
        },
      });
      router.push("/Home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
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
      <h1 className="text-3xl font-bold mb-4 justify-center flex">Sign Up</h1>
      <br />
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
          placeholder=" Name or Nickname"
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
          placeholder=" Email"
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
          placeholder=" Password"
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
