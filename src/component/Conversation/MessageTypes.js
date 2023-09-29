import { IconButton } from "@mui/material";
import React from "react";
import { PiDownloadSimple, PiDotsThreeVertical } from "react-icons/pi";
import { Message_options } from "../../AllResources/dashboard";

export const DocMsg = ({ el }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: el.incoming ? "start" : "end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: el.incoming ? "#FFF" : "#5B96F7",
            padding: "12px",
            borderRadius: "16px",
            width: "max-content",
          }}
        >
          <div className="flex flex-col gap-3">
            <div
              style={{ backgroundColor: el.incoming ? "#5B96F7" : "#FFF" }}
              className="flex p-2 gap-3 items-center rounded-lg"
            >
              {/* show dox img */}
              <div className="avatar">
                <div className="w-12 rounded">
                  <img src="./images/img.jpg" alt="el.message" />
                </div>
              </div>
              {/* doc name */}
              <span style={{ color: el.incoming ? "#fff" : "#5B96F7" }}>
                abstract.png
              </span>
              <IconButton style={{ color: el.incoming ? "#fff" : "#5B96F7" }}>
                <PiDownloadSimple></PiDownloadSimple>
              </IconButton>
            </div>
            <span style={{ color: el.incoming ? "#5B96F7" : "#fff" }}>
              {el.message}
            </span>
          </div>
        </div>
        <MessageOptions />
      </div>
    </>
  );
};

export const LinkMsg = ({ el }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: el.incoming ? "start" : "end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: el.incoming ? "#FFF" : "#5B96F7",
            padding: "12px",
            borderRadius: "16px",
            width: "max-content",
          }}
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col p-2 gap-3 items-center bg-[#fff] rounded-lg">
              {/* show link preview*/}
              <img
                src={el.preview}
                alt={el.message}
                style={{ maxHeight: 210, borderRadius: "10px" }}
              />
              <div className="flex flex-col gap-3">
                {/* link title*/}
                <span style={{ color: el.incoming ? "#5B96F7" : "#fff" }}>
                  Tile of the chatApp
                </span>
                {/* rendering link */}
                <span style={{ color: "blue" }}>www.youtube.com</span>
              </div>
              {/* message along with link */}
              <span style={{ color: el.incoming ? "#5B96F7" : "#fff" }}>
                {el.message}
              </span>
            </div>
          </div>
        </div>
        <MessageOptions />
      </div>
    </>
  );
};

export const ReplyMsg = ({ el }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: el.incoming ? "start" : "end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: el.incoming ? "#FFF" : "#5B96F7",
            padding: "12px",
            borderRadius: "16px",
            width: "max-content",
          }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col p-2 gap-6 items-center bg-[#fff] rounded-lg">
              <span className="text-[#5B96F7] ">{el.message}</span>
            </div>
            <span style={{ color: el.incoming ? "#5B96F7" : "#fff" }}>
              {el.reply}
            </span>
          </div>
        </div>
        <MessageOptions />
      </div>
    </>
  );
};

// Media message
export const MediaMsg = ({ el }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: el.incoming ? "start" : "end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: el.incoming ? "#FFF" : "#5B96F7",
            padding: "12px",
            borderRadius: "16px",
            width: "max-content",
          }}
        >
          <div className="flex flex-col gap-2">
            {/*send text msg with image  */}
            <img
              src={el.img}
              alt={el.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <span style={{ color: el.incoming ? "#5B96F7" : "#fff" }}>
              {el.message}
            </span>
          </div>
        </div>
        <MessageOptions />
      </div>
    </>
  );
};

// TextMessage
export const TextMessage = ({ el }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: el.incoming ? "start" : "end",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: el.incoming ? "#FFF" : "#5B96F7",
            padding: "12px",
            borderRadius: "16px",
            width: "max-content",
          }}
        >
          <div style={{ color: el.incoming ? "#5B96F7" : "#fff" }}>
            {el.message}
          </div>
        </div>
        {/* vertical dot three dropdown */}
        <MessageOptions />
      </div>
    </>
  );
};

// TimeLine Message
export const TimeLine = ({ el }) => {
  return (
    <>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">{el.text}</div>
      </div>
    </>
  );
};

const MessageOptions = () => {
  return (
    <>
      <details className="dropdown mb-32">
        <summary className="m-1 btn bg-transparent border-none">
          <PiDotsThreeVertical size={20} />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {Message_options.map((el, index) => (
            <li key={index}>
              <a>{el.title}</a>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
};
