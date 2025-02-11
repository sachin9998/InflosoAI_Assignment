import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ logout, user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  return (
    <div className="bg-white w-full px-8 h-[70px] fixed top-0 flex justify-between items-center shadow">
      <div className="font-semibold text-2xl">
        <span className="text-slate-500">Melody</span>
        <span className="text-gray-800">Verse.</span>
      </div>
      <div>
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 text-white p-2 px-6 rounded-md hover:bg-red-600 hover:text-white"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate(isLoginPage ? "/signup" : "/login")}
            className="bg-blue-500 text-white p-2 px-6 rounded-md hover:bg-blue-600 hover:cursor-pointer hover:text-white"
          >
            {isLoginPage ? "Signup" : "Login"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
