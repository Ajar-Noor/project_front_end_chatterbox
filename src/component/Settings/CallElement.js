import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { faker } from "@faker-js/faker";
import { FiArrowDownLeft, FiVideo } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { TbPhone } from "react-icons/tb";

const CallLogElement = ({ online, incoming, missed,name,img }) => {
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
        <div className="flex gap-2">
          {online ? (
            <div
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name} src={img} />
            </div>
          ) : (
            <Avatar alt={name} src={img} />
          )}
        </div>
        <div>
          <h3 className="text-[16px] leading-normal font-extrabold text-[#030303]">
            {name}
          </h3>
          <div className="flex gap-1">
            {incoming ? (
              <FiArrowDownLeft color={missed ? "red" : "green"} />
            ) : (
              <FiArrowUpRight color={missed ? "red" : "green"} />
            )}
            <span className="leading-normal font-bold text-[#6e6e6e]">
              Yesterday 08:55PM
            </span>
          </div>
        </div>
        <div className="ml-auto">
          <IconButton>
            <TbPhone className=" text-[green]" />
          </IconButton>
        </div>
      </div>
    </>
  );
};

// callElement
export const CallElement = ({ online,img,name }) => {
  return (
    <>
      <div className="flex w-[100%] bg-[#fff] p-4 rounded-[15px] shrink-0 mt-4 items-center gap-4 shadow-[0px 0px 4px 0px]">
        <div className="flex gap-2">
          {online ? (
            <div
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name} src={img} />
            </div>
          ) : (
            <Avatar alt={name} src={img} />
          )}
        </div>
        <div>
          <h3 className="text-[16px] leading-normal font-medium text-[#030303]">
            {name}
          </h3>
        </div>
        <div className="ml-auto flex gap-1">
          <IconButton>
            <FiVideo className=" text-[green]" />
          </IconButton>
          <IconButton>
            <TbPhone className=" text-[green]" />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default CallLogElement;
