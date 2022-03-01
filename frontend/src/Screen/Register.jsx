import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../Components/Loader";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error("Password must be atleast 6 characters");
    } else {
      setLoading(true);
      try {
        const { data } = await axios.post("/api/user/new", {
          name,
          email,
          password,
        });
        console.log(data);
        setLoading(false);
        toast.success("User created!");
        navigate("/login");
      } catch (error) {
        setLoading(false);
        toast.error(error.response.message);
      }
    }
  };

  return (
    <div className=" flex justify-center" style={{ height: "90vh" }}>
      <div className="shadow-lg flex flex-col items-center bg-white h-fit m-14 max-w-screen-md w-1/2">
        <h2 className="my-4">Register</h2>
        <form
          className=" flex flex-col items-center justify-around "
          onSubmit={registerUser}
        >
          {" "}
          <input
            type="text"
            className=" px-2 py-1 mt-14 mb-6 w-3/4 text-base font-normal text-gray-700 rounded-sm bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className=" px-2 py-1 my-6 w-3/4 text-base font-normal text-gray-700 rounded-sm bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className=" px-2 py-1 w-3/4 my-6 text-base font-normal text-gray-700 rounded-sm bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn w-3/4  px-6 my-8 text-center py-2  bg-gray-900 rounded-sm text-white font-medium text-xs  uppercase  shadow-md hover:bg-gray-700 hover:shadow-lg   flex items-center justify-center"
            type="submit"
            disabled={loading}
          >
            {loading ? <Loader /> : "Register"}
          </button>
          <p className="mx-4 mt-6 mb-10">
            Already Registered?{" "}
            <Link to="/login">
              <a className="text-sky-300">Login here</a>{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
