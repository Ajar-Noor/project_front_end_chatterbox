import React from "react";
import Chats from "./Chats";
import Sidebar from "./Sidebar";
import Conversation from "../../component/Conversation";

const Main = () => {
  return (
    <>
      <div className="h-screen max-h-screen w-full max-w-screen rounded-[30px] bg-[#F8FAFF] flex">
        <Sidebar />
        <Chats />
        <div
          style={{
            height: "100%",
            background: "#F0F4FA",
          }}
        >
          {/* conversation */}
          <Conversation />
        </div>
      </div>
    </>
  );
};

export default Main;
