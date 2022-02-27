import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex justify-center" style={{ height: "90vh" }}>
      <div className="shadow-lg flex flex-col items-center bg-white h-fit m-14 max-w-screen-md w-1/2">
        <h2 className="my-4">Login</h2>
        <div className=" flex flex-col items-center justify-around ">
          {" "}
          <input
            type="email"
            className=" px-2 py-1 mt-14 mb-6 w-3/4 text-base font-normal text-gray-700 rounded-sm bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            placeholder="Email"
            aria-label="Search"
          />
          <input
            type="password"
            className=" px-2 py-1 w-3/4 my-6 text-base font-normal text-gray-700 rounded-sm bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
            placeholder="Password"
            aria-label="Search"
          />
          <button
            className="btn w-3/4  px-6 my-8 text-center py-2  bg-gray-900 rounded-sm text-white font-medium text-xs  uppercase  shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex items-center justify-center"
            type="button"
          >
            Login
          </button>
          <p className="mx-4 mt-6 mb-12">
            New to the universe of la reddit?{" "}
            <Link to="/register">
              <a className="text-sky-300">Register here</a>{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
