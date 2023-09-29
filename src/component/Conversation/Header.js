import React from "react";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import Badge from "@mui/material/Badge";
import { FiVideo } from "react-icons/fi";
import { TbPhone } from "react-icons/tb";
import { RxMagnifyingGlass } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "../../redux/store";
import { Togglesidebar } from "../../redux/slices/app";

const Header = () => {
  const dispatch = useDispatch();
  //show online status batch
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
    <div>
      <div className="h-[100px] flex-none w-full bg-[#F8FAFF] shadow-[0px 0px 4px 0px rgba(0, 0, 0, 0.25)]">
        <div
          onClick={() => {
            dispatch(Togglesidebar());
          }}
          className="items-center flex w-full h-full justify-between p-5"
        >
          <div className="flex gap-6 items-center">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
            </StyledBadge>
            <div className="flex flex-col">
              <span className="text-black font-bold text-base leading-normal">
                {faker.name.fullName()}
              </span>
              <span className="text-[#696969] text-sm font-semibold leading-normal">
                Online
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className=" hover:bg-blue-500 hover:bg-opacity-100 py-2 px-4 rounded-full transition duration-300">
              <FiVideo size={23} className="text-[#4B4B4B]"></FiVideo>
            </button>
            <button className=" hover:bg-blue-500 hover:bg-opacity-100 py-2 px-4 rounded-full transition duration-300">
              <TbPhone size={25} className="text-[#4B4B4B]"></TbPhone>
            </button>
            <button className=" hover:bg-blue-500 hover:bg-opacity-100 py-2 px-4 rounded-full transition duration-300">
              <RxMagnifyingGlass
                size={25}
                className="text-[#4B4B4B]"
              ></RxMagnifyingGlass>
            </button>
            <img src="./images/Line4.svg" alt="line4" />
            <button className=" hover:bg-blue-500 hover:bg-opacity-100 py-2 px-4 rounded-full transition duration-300">
              <IoIosArrowDown className="text-[#4B4B4B]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
