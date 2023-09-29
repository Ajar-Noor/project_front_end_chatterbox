import React, { useState } from "react";
import { PiCircleDashed } from "react-icons/pi";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BiArchiveIn } from "react-icons/bi";
import { FaUserFriends} from 'react-icons/fa'
import { Avatar, Divider, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { ChatList } from "../../AllResources/dashboard/index";
import Friends from "../../sections/main/Friends";


//👉 Chat Element Component
export const ChatElement = ({
  id,
  name,
  img,
  msg,
  time,
  unread,
  pinned,
  online,
}) => {
  // user online status
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <>
      <div className="flex w-[100%] bg-[#fff] p-4 rounded-[15px] shrink-0 mt-4 items-center gap-4 shadow-[0px 0px 4px 0px]">
        <Stack direction="row" spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt="Remy Sharp" src={img} />
          )}
        </Stack>
        <div>
          <h3 className="text-[16px] leading-normal font-extrabold text-[#030303]">
            {name}
          </h3>
          <p className="text-[#7C7C7D] font-semibold leading-normal text-[14px]">
            {msg}
          </p>
        </div>
        <div className="flex flex-col ml-auto items-center gap-3">
          <p className="text-[12px] font-medium leading-normal text-[#686768]">
            {time}
          </p>
          <Badge color="primary" badgeContent={unread}></Badge>
        </div>
      </div>
    </>
  );
};

//👉 Chats Component
const Chats = () => {
  const [input, setinput] = useState("");
  const [openDialog,setOpenDialog]=useState(false);

const handleOpenDialog=()=>{
  setOpenDialog(true)
}

const handleCloseDialog=()=>{
  setOpenDialog(false)
}

  return (
    <>
      <div
        className="w-[340px] h-full max-h-screen shrink-0 bg-[#F8FAFF] relative pb-9
             shadow-[0px 0px 4px 0px rgba(0, 0, 0, 0.25)] px-4 flex flex-col"
      >
        {/* chat headings */}
        <div className="flex items-center justify-between py-4 pr-4">
          <h1 className="text-xl font-extrabold leading-normal font-[Manrope]">
            Chats
          </h1>
          {/* Buttons */}
          <div className="flex gap-1">
            <IconButton onClick={handleOpenDialog}>
              <FaUserFriends />
            </IconButton>
            <IconButton>
              <PiCircleDashed size={25} />
            </IconButton>
          </div>
        </div>

        {/* search bar */}
        <div className="items-center justify-items-center  relative top-[31px] flex">
          <RxMagnifyingGlass
            size={24}
            className="text-[#709CE6] translate-x-[140%] "
          />
          <input
            type="text"
            value={input}
            placeholder="Search..."
            name="search"
            className="w-[90%] p-3 pl-14 pr-18 ml-[-8px] box-border placeholder:text-[#709CE6] rounded-[30px] bg-[#EAF2FE]"
          ></input>
        </div>

        {/* archived chats */}
        <div>
          <div className="relative mt-[50px] flex items-center gap-3 pl-2">
            <BiArchiveIn size={22} color="#676667" />
            <button className="font-bold leading-normal text-sm text-[#709CE6] font-[Manrope]">
              Archived
            </button>
          </div>
          <Divider className="py-3 w-[100%]" />
        </div>

        {/* display pinned chats */}
        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div>
            <button className="font-bold leading-normal text-[16px] text-[#676667] pl-3 pt-3 font-[Manrope]">
              Pinned
            </button>
          </div>
          {ChatList.filter((el) => el.pinned).map((el) => {
            return <ChatElement {...el} />;
          })}

          {/* display all chats */}
          <div>
            <button className="font-bold leading-normal text-[16px] text-[#676667] pl-3 pt-4 font-[Manrope]">
              All Chats
            </button>
          </div>
          {ChatList.filter((el) => !el.pinned).map((el) => {
            return <ChatElement {...el} />;
          })}
        </div>
      </div>
      {openDialog && <Friends open={openDialog} handleClose={handleCloseDialog} />}
    </>
  );
};

export default Chats;
