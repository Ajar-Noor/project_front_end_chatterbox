import React from "react";
import { Avatar, Button, Divider, IconButton } from "@mui/material";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "../../redux/store";
import { Togglesidebar } from "../../redux/slices/app";
import { faker } from "@faker-js/faker";
import { TbPhone } from "react-icons/tb";
import { FiVideo } from "react-icons/fi";
import { IoIosArrowForward, IoMdNotificationsOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { SiAdblock } from "react-icons/si";
import { RiDeleteBinLine } from "react-icons/ri";

const Contact = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[320px] bg-white h-full max-h-screen">
        <div className="h-full">
          {/* header section */}
          <div className="shadow-[0px 0px 2px rgba(0, 0, 0, 0.25)] bg-[#F8FAFF] w-full">
            <div className="h-full p-8 flex items center justify-between gap-6">
              <p>Contact Info</p>
              <IconButton
                onClick={() => {
                  dispatch(Togglesidebar());
                }}
              >
                <TiDeleteOutline />
              </IconButton>
            </div>
          </div>
          {/* Body section */}
          <div className="h-full relative flex-grow-1 p-3 gap-6">
            <div className="flex items-center gap-4 p-3">
              <Avatar
                src={faker.image.avatar()}
                alt={faker.name.firstName()}
                className="h-[64px] w-[64px]"
              />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{faker.name.firstName()}</span>
                <span className="font-semibold">{"+92 000 0000000"}</span>
              </div>
            </div>
            <div className="flex items-center justify-evenly ">
              <div className="items-center flex flex-col gap-2">
                <IconButton>
                  <TbPhone />
                </IconButton>
                <span className="font-normal">Voice</span>
              </div>
              <div className="items-center flex flex-col gap-2">
                <IconButton>
                  <FiVideo />
                </IconButton>
                <span className="font-normal">Video</span>
              </div>
            </div>
            <Divider className="p-2" />

            {/* Typography section */}
            <div className="flex flex-col gap-2 p-2">
              <span className="font-semibold">Typography</span>
              <span className="font-normal">Imagination is only the limit</span>
            </div>
            <Divider />

            {/* Media Links and docs section */}
            <div className="flex items-center justify-between p-2">
              <span className="font-semibold">Media, Links & Docs</span>
              <Button endIcon={<IoIosArrowForward />}>401</Button>
            </div>
            <div className="flex gap-2 items-center">
              {[1, 2, 3].map((el) => (
                <div>
                  <img
                    src={faker.image.city()}
                    alt={faker.internet.userName()}
                  />
                </div>
              ))}
            </div>
            <Divider className="p-2" />

            {/* Starred Messages section*/}
            <div className="flex items-center justify-between">
              <div className=" flex items-center gap-2 ">
                <FaStar />
                <span className="font-semibold">Starred Messages</span>
              </div>
              <IconButton>
                <IoIosArrowForward />
              </IconButton>
            </div>
            <Divider className="p-2" />
            {/* notifications section */}
            <div className="flex items-center justify-between p-2">
              <div className=" flex items-center gap-2 ">
                <IoMdNotificationsOutline size={22} />
                <span className="font-semibold">Mute Notifications</span>
              </div>
              <input
                type="checkbox"
                className="toggle toggle-warning"
                checked
              />
            </div>
            <Divider className="p-2" />
            <span className="p-2 font-medium">1 group in common</span>
            <div className="flex gap-4 items-center p-2">
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
              <div className="gap-1 flex flex-col">
                <span className="font-semibold">Ajar Noor</span>
                <span className="font-normal">Owl, Parrot, Rabit, You</span>
              </div>
            </div>

            {/* Delete and Block section */}
            <div className="flex items-center gap-3">
              <Button startIcon={<SiAdblock />} className="w-full">
                Block
              </Button>
              <Button startIcon={<RiDeleteBinLine />} className="w-full">
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
