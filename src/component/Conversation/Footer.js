import React, { useState } from "react";
import { Fab, Tooltip } from "@mui/material";
import { IoIosSend } from "react-icons/io";
import { BsLink45Deg, BsImages, BsCamera } from "react-icons/bs";
import { GoSmiley } from "react-icons/go";
import { AiFillFileText, AiOutlineUser } from "react-icons/ai";
import { PiStickerDuotone } from "react-icons/pi";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Actions = [
  {
    color: "#4da5fe",
    icon: <BsImages size={24} />,
    y: 92,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <PiStickerDuotone size={24} />,
    y: 162,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <BsCamera size={24} />,
    y: 232,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <AiFillFileText size={24} />,
    y: 302,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <AiOutlineUser size={24} />,
    y: 372,
    title: "Contact",
  },
];

const ChatInput = ({ setisOpenPicker, isopenPicker }) => {
  return (
    <>
      <button className=" hover:bg-transparent hover:bg-opacity-100 rounded-full transition duration-300">
        <GoSmiley
          size={22}
          className="text-[#709CE6] translate-x-[-180%] "
          onClick={() => setisOpenPicker(!isopenPicker)}
        />
      </button>
    </>
  );
};

const Footer = () => {
  const [isopenPicker, setisOpenPicker] = useState(false);
  const [isopenActions, setisOpenActions] = useState(false);
  return (
    <div>
      {/* chat footer */}
      <div className="h-[100px] w-full bg-[#F7F9FD] shadow-[0px 0px 4px 0px rgba(0, 0, 0, 0.25)] flex items-center p-2 ">
        <div className="w-full max-w-full flex items-center">
          {/* Link icon */}
          <div className="max-w-content relative">
            <div
              className="flex flex-col absolute"
              style={{ display: isopenActions ? "inline-block" : "none" }}
            >
              {/* rendering action icons */}
              {Actions.map((el,index) => (
                <Tooltip placement="right" title={el.title} key={index}>
                  <Fab
                    style={{
                      position: "absolute",
                      left: 20,
                      bottom: 10,
                      top: -el.y,
                      backgroundColor: el.color,
                    }}
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </div>
            <button
              className=" hover:bg-transparent hover:bg-opacity-100 rounded-full transition duration-300"
              onClick={() => setisOpenActions(!isopenActions)}
            >
              <BsLink45Deg
                size={25}
                className="text-[#709CE6] translate-x-[140%] "
              />
            </button>
          </div>

          {/*text input field */}
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-full bg-[#EAF2FE] placeholder:text-[#709CE6] pl-14 p-5 ml-[-10px]"
          />
          <div>
            {/* changeInput */}
            <div
              className="fixed bottom-16 right-20 z-10"
              style={{ display: isopenPicker ? "inline" : "none" }}
            >
              {/* integrate emoji */}
              <Picker data={data} onEmojiSelect={console.log} />
            </div>
            <ChatInput
              isopenPicker={isopenPicker}
              setisOpenPicker={setisOpenPicker}
            />
          </div>
          <div class="h-12 w-14 bg-[#5B96F7] rounded-xl ml-[-5px]">
            <span className="flex items-center w-full h-full justify-center cursor-pointer">
              <IoIosSend className="text-white text-4xl" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
