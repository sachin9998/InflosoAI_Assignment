import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import PasswordInput from "../components/PasswordInput.jsx";
import {
  BASE_URL,
  handleError,
  handleSuccess,
  validateEmail,
} from "../utils/helper.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter the email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    try {
      const url = `${BASE_URL}/login`;

      const loginInfo = {
        email,
        password,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      console.log(result);
      const { success, message, token, user, error } = result;

      if (success) {
        handleSuccess(message);

        localStorage.setItem("token", token);
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <Navbar />
      <div className="box-shadow w-96 md:w-[450px] lg:w-[500px] rounded px-10 py-10 bg-white">
        <form onSubmit={handleLogin}>
          <h4 className="text-3xl font-semibold mb-7">LOGIN</h4>

          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm pb-2">{error}</p>}

          <div className="flex items-center mb-2 text-slate-500">
            <input type="checkbox"></input>
            <label className="ml-2 text-sm">Remember Me</label>
          </div>

          <button type="submit" className="btn-primary font-semibold">
            LOGIN
          </button>

          <div className="text-sm text-center mt-4">
            <Link
              to={"/"}
              className="font-medium text-[#2B85FF]  hover:cursor-pointer"
            >
              Forget Password
            </Link>
          </div>

          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="font-medium text-[#2B85FF] underline hover:cursor-pointer"
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
