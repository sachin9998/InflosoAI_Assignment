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

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [firstPass, setFirstPass] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!firstPass) {
      setError("Please enter the password");
      return;
    }

    if (!password) {
      setError("Please enter the password again");
      return;
    }

    if (firstPass !== password) {
      setError("Both Passwords doesnt Match");
      return;
    }

    if (!termsAccepted) {
      setError("Please accept Terms & Conditions.");
      return;
    }

    try {
      const url = `${BASE_URL}/signup`;

      const signupData = {
        name,
        email,
        password,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const result = await response.json();
      //   console.log(result);

      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <Navbar />
      <div className="box-shadow w-96 md:w-[450px] lg:w-[500px] rounded px-10 py-10 bg-white">
        <form onSubmit={handleSignup}>
          <h4 className="text-3xl font-semibold mb-7">Sign Up</h4>

          <input
            type="text"
            placeholder="Name"
            className="input-box "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={firstPass}
            onChange={(e) => setFirstPass(e.target.value)}
          />

          <PasswordInput
            value={password}
            placeholder={"Enter Password Again"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center mb-4">
            {" "}
            {/* Terms and conditions */}
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{" "}
              <Link to="/" className="text-blue-500 hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          {error && <p className="text-red-500 text-sm pb-2">{error}</p>}

          <button type="submit" className="btn-primary font-semibold">
            SIGN UP
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-[#2B85FF] underline hover:cursor-pointer"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
