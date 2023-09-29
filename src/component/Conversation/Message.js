import React from "react";
import { Chat_History } from "../../AllResources/dashboard";
import {
  TimeLine,
  TextMessage,
  MediaMsg,
  ReplyMsg,
  LinkMsg,
  DocMsg,
} from "./MessageTypes";

const Message = (index) => {
  return (
    <>
      <div className="p-6">
        <div className="flex flex-col gap-6">
          {Chat_History.map((el,index) => {
            switch (el.type) {
              case "divider":
                // timeline
                return <TimeLine el={el} />;

              case "msg":
                switch (el.subtype) {
                  case "img":
                    // img msg
                    return <MediaMsg el={el} />;

                  case "doc":
                    // img doc
                    return <DocMsg el={el} />;

                  case "link":
                    // img link
                    return <LinkMsg el={el} />;
                  case "reply":
                    // reply msg
                    return <ReplyMsg el={el} />;

                  default:
                    // text message
                    return <TextMessage el={el} />;
                }

              default:
                return <></>;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Message;
