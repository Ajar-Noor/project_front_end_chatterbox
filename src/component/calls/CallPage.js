import React, { useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Divider, IconButton } from "@mui/material";
import CallLogElement from "../Settings/CallElement";
import { CallLogs } from "../../AllResources/dashboard";
import StartCall from "../../sections/main/StartCall";
import { AiOutlinePlus } from "react-icons/ai";

const CallPage = () => {
  const [input, setInput] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <div className="flex w-full h-full max-h-screen">
        {/* left */}
        <div className="h-full max-h-screen bg-[#F8FAFF] w-[380px] shadow-[0px 0px 2px rgba(0, 0, 0, 0.25)]">
          <div className="p-6 flex flex-col gap-4 h-full">
            <div>
              <span className="text-xl font-semibold">Call Logs</span>
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
                />
              </div>
            </div>
            <div className="flex justify-between px-3 items-center">
              <Link className="text-xl font-medium text-accent cursor-pointer">
                Start new conversation
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
              {/* Call logs */}
            <div className="overflow-y-auto h-full max-h-screen scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {CallLogs.map((el, index) => {
                return <CallLogElement key={index} {...el} />;
              })}
            </div>
          </div>
        </div>
        {/* Right */}
      </div>
      {openDialog && (
        <StartCall open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default CallPage;
