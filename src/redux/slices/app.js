import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import axios from "axios";

const initialState = {
  // Sidebar inital values
  sidebar: {
    open: false,
    type: "CONTACT", //can be Contact, starred msgs, media links shared
  },
  users: [], //all users of app who are not friends and not requested yet
  friends: [],
  friendRequests: [],
  // // Snackbar initial Values
  // snackbar: {
  //   open: null,
  //   message: null,
  //   severity: null,
  // },
};

// Create Slice
const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    //togglesidebar
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },

    // // openSnackbar
    // openSnackbar(state, action) {
    //   state.snackbar.open = true;
    //   state.snackbar.severity = action.payload.severity;
    //   state.snackbar.message = action.payload.message;
    // },
    // // CloseSnackbar
    // closeSnackbar(state, action) {
    //   state.snackbar.open = false;
    //   state.snackbar.severity = null;
    //   state.snackbar.message = null;
    // },
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateFriendRequest(state, action) {
      state.friendRequests = action.payload.requests;
    },
  },
});

// export const {toggleSidebar, updateSidebarType } = slice.actions



// ToggleSidebar
const Togglesidebar = () => {
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  };
};

// Update Sidebar
function Updatesidebar(type) {
  return async () => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}

// // show snackbar
// export const ShowSnackbar =
//   ({ severity, message }) =>
//   async (dispatch, getState) => {
//     dispatch(
//       slice.actions.openSnackbar({
//         message,
//         severity,
//       })
//     );
//     setTimeout(() => {
//       dispatch(slice.actions.closeSnackbar());
//     }, 4000);
//   };

// // Close Snackbar
// export const closeSnackbar = () => async (dispatch, getState) => {
//   dispatch(slice.actions.closeSnackbar());
// };

const FetchUsers = () => {
  return async (dispatch, getState) => {
    await axios
      .get("/api/user/get-users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState.auth.token}`,
        },
      })
      .then((res) => {
        console.log("response", res);
        dispatch(slice.actions.updateUsers({ users: res.data.data }));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

const FetchFriends = () => {
  return async (dispatch, getState) => {
    await axios
      .get("/api/user/get-friends", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState.auth.token}`,
        },
      })
      .then((res) => {
        console.log("response", res);
        dispatch(slice.actions.updateFriends({ friends: res.data.data }));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

const FetchFriendRequests = () => {
  return async (dispatch, getState) => {
    await axios
      .get("/api/user/get-friend-requests", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState.auth.token}`,
        },
      })
      .then((res) => {
        console.log("response", res);
        dispatch(
          slice.actions.updateFriendRequests({ friendRequests: res.data.data })
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

//export reducer
export default slice.reducer;

export {
  Togglesidebar,
  Updatesidebar,
  FetchUsers,
  FetchFriends,
  FetchFriendRequests,
};
