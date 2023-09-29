// import { Dialog, DialogContent, Tab, Tabs } from "@mui/material";
// import { Stack } from "@mui/system";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   FetchFriendRequests,
//   FetchFriends,
//   FetchUsers,
// } from "../../redux/slices/app";

// // users List
// const UsersList = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(FetchUsers());
//   }, []);

//   const { users } = useSelector((state) => state.app);

//   return (
//     <>
//       {users.map((el, index) => {
//         // render userComponent
//         return <></>;
//       })}
//     </>
//   );
// };

// // friends List
// const FriendsList = () => {
//   const dispatch = useDispatch();
//   const { friends } = useSelector((state) => state.app);

//   useEffect(() => {
//     dispatch(FetchFriends());
//   }, []);

//   return (
//     <>
//       {friends.map((el, index) => {
//         // render friendscomponent
//         return <></>;
//       })}
//     </>
//   );
// };

// // friend Requests List
// const RequestsList = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(FetchFriendRequests());
//   }, []);

//   const { friendRequests } = useSelector((state) => state.app);

//   return (
//     <>
//       {friendRequests.map((el, index) => {
//         // render friendRequestComponent
//         return <></>;
//       })}
//     </>
//   );
// };

// const Friends = ({ open, handleClose }) => {
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <Dialog
//       fullWidth
//       maxWidth="xs"
//       open={open}
//       keepMounted
//       onClose={handleClose}
//       sx={{ p: 4 }}
//     >
//       <Stack p={2} sx={{ width: "100%" }}>
//         <Tabs value={value} onChange={handleChange} centered>
//           <Tab label="Explore" />
//           <Tab label="Friends" />
//           <Tab label="Requests" />
//         </Tabs>
//       </Stack>
//       {/* Dialog Content */}
//       <DialogContent>
//         <Stack sx={{ height: "100%" }}>
//           <Stack spacing={2.5}>
//             {() => {
//               switch (value) {
//                 case 0: //dispaly all user
//                   return <UsersList />;
//                 case 1: //dispaly all friends
//                   return <FriendsList />;
//                 case 2: //display all friend request
//                   return <RequestsList />;

//                 default:
//                   break;
//               }
//             }}
//           </Stack>
//         </Stack>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default Friends;
