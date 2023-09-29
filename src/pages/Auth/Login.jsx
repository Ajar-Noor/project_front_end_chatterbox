import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { state, loggedInUser, updateLogInInfo } = useContext(AuthContext);
  const { logInError, logIn_Info, isLogInLoading } = state;
  const navigate=useNavigate();
  const location=useLocation

  // Error toast function

  const notify = () => {
    toast.error(logInError?.message);
  };

  return (
    <div className="bg-[#5B96F7]">
      <div className="flex justify-center items-center h-screen bg-[#5B96F7]">
        <div className="h-[400px] w-[400px] rounded-xl shadow-xl bg-[#AFBBF7] p-6">
          <div className="text-center">
            <span className="font-bold text-2xl text-white">Login</span>
          </div>

          {/* login form */}
          <div className="flex justify-center items-center">
            <div className="form-control w-full max-w-xs pt-9">
              <form onSubmit={loggedInUser}>
                <input
                  type="email"
                  placeholder="Enter email..."
                  name="email"
                  value={logIn_Info.email}
                  onChange={(e) => updateLogInInfo(e.target)}
                  className="input input-bordered w-full max-w-xs mt-3"
                />

                <input
                  type="password"
                  placeholder="Enter Password..."
                  name="password"
                  value={logIn_Info.password}
                  onChange={(e) => updateLogInInfo(e.target)}
                  className="input input-bordered w-full max-w-xs mt-7"
                />

                <div className="flex items-end justify-end mt-5 mb-1">
                  <Link
                    to="/auth/reset-password"
                    className="underline text-dark"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  onClick={notify}
                  className="btn w-full  border-none hover:bg-[#5B96F7] hover:text-white "
                >
                  {isLogInLoading ? "Getting you In...." : "LogIn"}
                </button>
              </form>
              <div className="flex gap-2 pt-3">
                <span>Already have an account?</span>
                <Link to="/auth/register" className="font-bold text-[#5B96F7]">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ToastContainer */}
      {/* <ToastContainer position="top-center" closeOnClick /> */}
    </div>
  );
};

export default Login;
