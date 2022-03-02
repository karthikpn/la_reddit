import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  return (
    <>
      <div className="sm:flex md:hidden flex items-center justify-around bg-white h-14 mr-2">
        <Link to="/">
          <img
            className="object-contain h-7"
            alt="la_reddit"
            src="/images/reddit.svg"
          />
        </Link>
        <div className="flex items-center w-1/2">
          <div className=" relative flex flex-wrap ">
            <input
              type="search"
              className=" px-2 py-1 text-base font-normal w-3/4 text-gray-700 rounded-sm bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn px-3 py-1 bg-gray-900  w-1/6 rounded-sm text-white font-medium text-xs  uppercase  shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="object-contain"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <Link to="/login">
          <h2 className="text-xl mx-2">
            <i class="fas fa-user" style={{ marginRight: "0.5vw" }}></i>
          </h2>
        </Link>
      </div>
      <div className="sm:hidden md:flex flex items-center w-screen justify-around bg-white h-14">
        <Link to="/">
          <img
            className="object-contain h-7"
            src="/images/reddit.svg"
            alt="la_reddit"
          />
        </Link>
        <div className="flex justify-center">
          <div className=" relative flex flex-wrap ">
            <input
              type="search"
              className=" px-2 py-1 min-w-fit text-base font-normal text-gray-700 rounded-sm bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn px-3 py-1 bg-gray-900 rounded-sm text-white font-medium text-xs  uppercase  shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {userInfo ? (
          <Link to="/profile">
            <h2 className="text-xl mx-1">
              <i class="fas fa-user" style={{ marginRight: "0.5vw" }}></i>
            </h2>
          </Link>
        ) : (
          <Link to="/login">
            <h2 className="text-xl mx-1">
              <i class="fas fa-user" style={{ marginRight: "0.5vw" }}></i>
            </h2>
          </Link>
        )}
      </div>
    </>
  );
};

export default Header;
