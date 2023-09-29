import { Divider, IconButton, Link } from "@mui/material";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxMagnifyingGlass } from "react-icons/rx";
import { ChatList } from "../../AllResources/dashboard";
import { ChatElement } from "../../layout/dashboard/Chats";
import CreateGroup from "../../sections/main/CreateGroup";

const Group = () => {
  const [input, setInput] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  console.log("Welcome to Group Chat");
  return (
    <>
      <div className="flex w-full h-full max-h-screen">
        {/* left */}
        <div className="h-full max-h-screen bg-[#F8FAFF] w-[380px] shadow-[0px 0px 2px rgba(0, 0, 0, 0.25)]">
          <div className="p-6 flex flex-col gap-4 h-full max-h-screen">
            <div>
              <span className="text-xl font-semibold">Group</span>
            </div>
            <div className="w-full">
              {/* search bar */}
              <div className="items-center justify-items-center flex">
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
            </div>

            {/* create New Group */}
            <div className="flex justify-between px-3 items-center">
              <Link className="text-xl font-medium text-accent cursor-pointer">
                Create New Group
              </Link>
              <IconButton
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                <AiOutlinePlus className="text-accent" />
              </IconButton>
            </div>
            <Divider />
            <div className="flex flex-col gap-2 h-full overflow-scroll">
              <div className="flex flex-col gap-1">
                {/*  */}
                <span className="font-bold leading-normal text-[16px] text-[#676667] pl-3 pt-3 font-[Manrope]">
                  Pinned
                </span>
                {/* Chat List */}
                {ChatList.filter((el) => el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })}
              </div>
              <div className="flex flex-col">
                {/*  */}
                <span className="font-bold leading-normal text-[16px] text-[#676667] pl-3 pt-3 font-[Manrope]">
                  All Groups
                </span>
                {/* Chat List */}
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        {/* Reuse Conversation Component */}
      </div>
      {openDialog && (
        <CreateGroup open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Group;
