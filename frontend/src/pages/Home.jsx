import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Navbar logout={handleLogout} user={user} />
      <div className="">
        <div className=" bg-gray-100 flex flex-col items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Welcome, {user.name}!
            </h2>
            <div className="mb-6">
              <p className="text-gray-700">Email: {user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full" // Added w-full
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
