import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import Contact from './Contact'
import { useSelector } from "react-redux";

const Conversation = () => {
  // accessing store
  const { sidebar } = useSelector((store) => store.app);
  //  console.log(app,"app")

  return (
    <>
    <div className="flex h-full max-h-screen ">
      <div
        className=" flex flex-col  "
        style={{
          height: "100%",
          width: sidebar.open ? `calc(100vw - 789px )` : "calc(100vw - 469px )",
        }}
      >
        {/* chat header */}
        <Header />
        {/* message */}
        <div className="w-full grow h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <Message />
        </div>
        {/* chat Footer */}
        <Footer />
        {/* Contact */}
         {/* contact */}
      </div>
         {sidebar.open && <Contact />}
         </div>
    </>
  );
};

export default Conversation;
