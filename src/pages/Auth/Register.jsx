import React, { useReducer, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Getrequest, Postrequest, baseURL } from "../../utils/Services";

const initialValue = {
  regUser: null,
  registerInfo: { name: "", email: "", password: "" },
  registerError: null,
  isRegisterLoading: null,
};

const RegReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "REGISTER_USER":
      return {
        ...state,
        regUser: payload,
      };
    case "UPDATE_INFO":
      // console.log("payloadFromType:", payload);
      // console.log("stateFromType:", state);
      return {
        ...state,
        registerInfo: { ...state.registerInfo, ...payload },
      };
    case "LOADING":
      return {
        ...state,
        isRegisterLoading: payload,
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        registerError: payload,
      };

    case "SET_REGISTER_ERROR":
      return {
        ...state,
        registerError: payload,
      };
    case "STORE_USER":
      return {
        ...state,
        regUser: payload,
      };
    default:
      return state;
  }
};

const Register = () => {
  const [state, dispatch] = useReducer(RegReducer, initialValue);
  const { registerError, registerInfo } = state;
  console.log("registerInfo:", registerInfo);

  const getUserDetails = async () => {
    dispatch({
      type: "LOADING",
      payload: true,
    });

    console.log("I am reached to the getUserDetails");

    // localStorage.getItem("token");
    const response = await Getrequest(`${baseURL}/user/find`, {
      authorization: localStorage.getItem("token"),
    });

    console.log("response:", response);
    dispatch({
      type: "LOADING",
      payload: false,
    });

    if (!response.error) {
      dispatch({
        type: "STORE_USER",
        payload: response,
      });
    }
  };

  //whenever application reloads we get user from local storage and then we add the user to the state
  useEffect(() => {
    getUserDetails();
  }, []);

  // console.log("userName", regUser?.name);

  //update Register Information
  const updateRegisterInfo = (target) => {
    // console.log(target);
    const { name, value } = target;
    // console.log("Name:", name, "Value:", value);
    const action = { type: "UPDATE_INFO", payload: { [name]: value } };
    // console.log("action:", action);
    dispatch(action);
  };

  // registerUser function to register user
  const registerUser = useCallback(
    async (e) => {
      e.preventDefault();
      dispatch({
        type: "LOADING",
        payload: true,
      });
      dispatch({
        type: "SET_REGISTER_ERROR",
        payload: null,
      });

      // console.log("I am reached to the registerUser");
      const response = await Postrequest(
        `${baseURL}/user/register`,
        JSON.stringify(registerInfo)
      );
      dispatch({
        type: "LOADING",
        payload: false,
      });

      if (response.error) {
        dispatch({
          type: "REGISTER_ERROR",
          payload: response,
        });
      }
      localStorage.setItem("user", JSON.stringify(response));
      dispatch({
        type: "REGISTER_USER",
        payload: response,
      });
    },
    [registerInfo]
  );

  // Error toast function
  const notify = () => {
    registerError?.error
      ? toast.error(
          <div>
            <span>{registerError.message}</span>
          </div>
        )
      : toast.success(<span>Congrats! User Registered Successfully</span>);
  };

  return (
    <div className="bg-[#5B96F7]">
      <div className="flex justify-center items-center h-screen bg-[#5B96F7]">
        <div className="h-[440px] w-[400px] rounded-xl shadow-xl bg-[#AFBBF7] p-6">
          <div className="text-center">
            <span className="font-bold text-2xl text-white">Registration</span>
          </div>
          <div className="flex justify-center items-center">
            <div className="form-control w-full max-w-xs pt-9">
              <form onSubmit={registerUser}>
                {/* userName */}
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={registerInfo.name}
                  onChange={(e) => updateRegisterInfo(e.target)}
                  className="input input-bordered w-full max-w-xs"
                />

                {/* email */}
                <input
                  type="email"
                  placeholder="type email..."
                  name="email"
                  value={registerInfo.email}
                  onChange={(e) => updateRegisterInfo(e.target)}
                  className="input input-bordered w-full max-w-xs mt-7"
                />

                {/* password */}
                <input
                  type="password"
                  placeholder="Password..."
                  name="password"
                  value={registerInfo.password}
                  onChange={(e) => updateRegisterInfo(e.target)}
                  className="input input-bordered w-full max-w-xs mt-7"
                />

                {/*register user*/}
                <button
                  className="btn mt-7 w-full border-none hover:bg-[#5B96F7] hover:text-white "
                  type="submit"
                  onClick={notify}
                >
                  {state.isRegisterLoading
                    ? "Creating your Account"
                    : "Register"}
                </button>
              </form>

              {/* redirect you to login if you already have an account */}
              <div className="flex gap-2 pt-3">
                <span>Already have an account?</span>
                <Link to="/auth/login" className="font-bold text-[#5B96F7]">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
