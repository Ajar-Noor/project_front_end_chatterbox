import React, {
  createContext,
  useCallback,
  useReducer,
  useEffect,
} from "react";
import { Getrequest, Postrequest, baseURL } from "../utils/Services";

const initialValue = {
  User: null,
  logIn_Info: { email: "", password: "" },
  logInError: null,
  isLogInLoading: false,
  userIsLoggedIn: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  // console.log("actionFromReducer:", action);
  switch (type) {
    case "LOGIN_LOADING":
      return {
        ...state,
        isLogInLoading: payload,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        logInError: payload,
      };
    case "SET_LOGIN_ERROR":
      return {
        ...state,
        logInError: payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        User: payload,
      };
    case "UPDATE_LOGIN_INFO":
      return {
        ...state,
        logIn_Info: { ...state.logIn_Info, ...payload },
      };
    case "STORE_USER":
      console.log("user", state.User);
      return {
        ...state,
        User: payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        User: payload,
      };
    case "SET_USER_LOGGED_IN":
      return {
        ...state,
        userIsLoggedIn: true,
      };
    case "SET_USER_LOGGED_OUT":
      return {
        ...state,
        userIsLoggedIn: false,
      };

    default:
      return state;
  }
};

export const AuthContext = createContext();


// Auth Context Provider Component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { logIn_Info } = state;

  const getUserDetails = async () => {
    dispatch({
      type: "LOGIN_LOADING",
      payload: true,
    });

    console.log("I am reached to the getUserDetails");

    // localStorage.getItem("token");
    const response = await Getrequest(`${baseURL}/user/find`, {
      authorization: localStorage.getItem("token"),
    });

    console.log("response:", response);
    dispatch({
      type: "LOGIN_LOADING",
      payload: false,
    });

    if (!response.error) {
      dispatch({
        type: "STORE_USER",
        payload: response,
      });
    }
  };

  // setUserLoggedIn

  const setUserLoggedIn = () => {
    dispatch({
      type: "SET_USER_LOGGED_IN",
    });
  };

  const setUserLoggedOut = () => {
    dispatch({
      type: "SET_USER_LOGGED_OUT",
    });
  };

 // Fetch user details from local storage on component mount
 useEffect(() => {
  getUserDetails();

  // Check if the user is logged in and set userIsLoggedIn accordingly
  if (localStorage.getItem("token")) {
    setUserLoggedIn();
  }
}, []);

  //update LogIn information
  const updateLogInInfo = (target) => {
    // console.log(target);
    const { name, value } = target;
    // console.log("loginName:", name, "loginValue:", value);
    const action = { type: "UPDATE_LOGIN_INFO", payload: { [name]: value } };
    // console.log("action:", action);
    dispatch(action);
  };
  // console.log("loginInfo", logIn_Info);


  // Login function to LOgin user

  const loggedInUser = useCallback(
    async (e) => {
      e.preventDefault();

      //setloading to true
      dispatch({
        type: "LOGIN_LOADING",
        payload: true,
      });

      //seterror to null
      dispatch({
        type: "LOGIN_ERROR",
        payload: null,
      });

      //make a request to backEnd
      const response = await Postrequest(
        `${baseURL}/user/login`,
        JSON.stringify(logIn_Info)
      );

      dispatch({
        type: "LOGIN_LOADING",
        payload: false,
      });

      //Check there is any error
      if (response.error) {
        dispatch({
          type: "SET_LOGIN_ERROR",
          payload: response,
        });
      }

      console.log("response:", response);
      // setting the login user info
      const { token, ...user } = response;
      //store user info into localStorage if user exist
      localStorage.setItem("token", token);
      dispatch({
        type: "STORE_USER",
        payload: user,
      });
      dispatch({
        type: "LOGIN_USER",
        payload: response,
      });
      // setUserlogedIn
      setUserLoggedIn();
    },
    [logIn_Info]
  );
  // console.log("logininfo", logIn_Info);

  //logOut user
  const logOutUser = useCallback(() => {
    localStorage.removeItem("token");
    dispatch({
      type: "LOGOUT_USER",
      payload: null,
    });
    setUserLoggedOut();
  });

  return (
    //created a provider
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        loggedInUser,
        updateLogInInfo,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
