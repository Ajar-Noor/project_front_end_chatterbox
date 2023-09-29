import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { connectSocket } from "../../Socket"; // Import connectSocket, not socket
import { toast } from "react-toastify";

const PrivateRoutes = () => {
  console.log("Dashboard Component Rendered");
  const { state } = useContext(AuthContext);
  const { userIsLoggedIn } = state;

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    let socketInstance; // Declare a variable to store the socket instance

    if (userIsLoggedIn) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };
      window.reload();

      // Connect the socket and store the instance in the socketInstance variable
      socketInstance = connectSocket(token);

      // new friend request

      socketInstance.on("new_friend_request", (data) => {
        toast.success({ message: data.message });
      });
      socketInstance.on("request_accepted", (data) => {
        toast.success({ message: data.message });
      });
      socketInstance.on("request_sent", (data) => {
        toast.success({ message: data.message });
      });
    }

    return () => {
      if (socketInstance) {
        // Use socketInstance here, not socket
        socketInstance.off("new_friend_request");
        socketInstance.off("request_accepted");
        socketInstance.off("request_sent");
      }
    };
  }, [userIsLoggedIn,token]);

  // console.log("Before Redirection");
  // if (!userIsLoggedIn) {
  //   return <Navigate to="/auth/login" />;
  // } else if (userIsLoggedIn) {
  //   return <Navigate to="/chatapp" />;
  // }
  // console.log("After Redirection");

  return(
    <>
    {/* I am reached at outlet */}
    {token? (<Outlet />): (<Navigate to='/auth/login'/>)}
    </>
     )
};

export default PrivateRoutes;
