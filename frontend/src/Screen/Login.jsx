import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../Action/userAction";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loginClick, setLoginClick] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { loading, error, userInfo } = user;

  const loginHandler = (e) => {
    e.preventDefault();

    dispatch(userLoginAction(email, password));
    if (userInfo) {
      toast.success("Login Success");
    }
    if (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    if (userInfo) navigate("/");
  }, [userInfo]);
  return (
    <div className=" flex justify-center" style={{ height: "90vh" }}>
      <div className="shadow-lg flex flex-col items-center bg-white h-fit m-14 max-w-screen-md w-1/2">
        <h2 className="my-4">Login</h2>
        <form
          onSubmit={loginHandler}
          className=" flex flex-col items-center justify-around "
        >
          {" "}
          <input
            type="email"
            className=" px-2 py-1 mt-14 mb-6 w-3/4 text-base font-normal text-gray-700 rounded-sm bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
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
            className="btn w-3/4  px-6 my-8 text-center py-2  bg-gray-900 rounded-sm text-white font-medium text-xs  uppercase  shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex items-center justify-center"
            type="submit"
          >
            {loading ? <Loader /> : "Login"}
          </button>
          <p className="mx-4 mt-6 mb-12">
            New to the universe of la reddit?{" "}
            <Link to="/register">
              <a className="text-sky-300">Register here</a>{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
