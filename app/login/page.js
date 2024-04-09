"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";
import { useSelector } from "react-redux";
import axios from "axios";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

  console.log("Access Token from Redux:", accessToken);
  const handleLogin = async (email, password) => {
    try {
      console.log("Logging in...");
      const response = await axios.post("/api/login", { email, password });
      const { token } = response.data;
      dispatch(login({ accessToken: token }));
      console.log("Login successful", token);
      toast.success("Login successful");
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Login failed, please try again later");
      }
    }
  };

  const register = async () => {
    try {
      const response = await axios.post("/api/signup", {
        email,
        password,
        username,
      });
      if (response.status === 200) {
        toast.success("Registration successful");
        router.push("/login");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Registration failed, please try again later");
      }
    }
  };

  const logout = async () => {
    try {
      setLoggedInUser(null);
      console.log("Logout success");
    } catch (error) {
      console.error("Logout failed:", error);
      // Display error notification using react-toastify
      toast.error("Logout failed: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <ToastContainer />
      {loggedInUser ? (
        <div>
          <p className="text-lg font-bold mb-4">
            Logged in as {loggedInUser.username}
          </p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="text-lg font-bold mb-4">Not logged in</p>
          <form>
            <input
              className="block w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="block w-full mt-2 rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="block w-full mt-2 rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => handleLogin(email, password)}
            >
              Login
            </button>
            <button
              className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={register}
            >
              Register
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
