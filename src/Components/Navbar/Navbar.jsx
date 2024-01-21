import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Contexts/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink className="font-medium text-base" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-medium text-base" to="/booked-events">
          Booked-Events
        </NavLink>
      </li>
      <li>
        <NavLink className="font-medium text-base" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
    </>
  );

  //sign out handler:
  const signOutHandler = () => {
    signOutUser()
      .then(() => {
        toast.success("User sign out successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="font-bold normal-case text-2xl">
              <span className="text-[#0179db]">E</span>vents
              <span className="text-[#0179db]">P</span>lanner
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt={user?.displayName} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
                >
                  <li>
                    <Link to="/dashboard">{user?.displayName}</Link>
                  </li>
                  <li>
                    <button
                      onClick={signOutHandler}
                      className="btn btn-sm bg-blue-600 text-white transition hover:bg-blue-500"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm bg-blue-600 text-white transition hover:bg-blue-500">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
