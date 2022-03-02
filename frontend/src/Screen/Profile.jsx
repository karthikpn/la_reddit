import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  });
  return (
    <div className="w-full flex items-center justify-center">
      <div className=" bg-white w-1/2 shadow-lg mt-14">
        <h2 className="text-center mt-2">Welcome {userInfo.name}</h2>
        <form
          className=" flex flex-col items-center justify-around "
          // onSubmit={}
        >
          {" "}
          <input
            type="text"
            className=" px-2 py-1 mt-14 mb-6 w-3/4 text-base font-normal text-gray-700 rounded-sm bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            placeholder={userInfo.name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className=" px-2 py-1 my-6 w-3/4 text-base font-normal text-gray-700 rounded-sm bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            placeholder={userInfo.email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className=" px-2 py-1 w-3/4 my-6 text-base font-normal text-gray-700 rounded-sm bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            placeholder="Set new Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn w-3/4  px-6 my-8 text-center py-2  bg-gray-900 rounded-sm text-white font-medium text-xs  uppercase  shadow-md hover:bg-gray-700 hover:shadow-lg   flex items-center justify-center"
            type="submit"
            disabled={loading}
          >
            {loading ? <Loader /> : "Update details"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
