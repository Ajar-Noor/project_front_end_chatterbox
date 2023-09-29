import { IconButton } from "@mui/material";
import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import ProfileForm from "../Settings/ProfileForm";

const Profile = () => {
  return (
    <>
      <div className="flex w-full h-full max-h-screen">
        <div className="h-full max-h-screen bg-[#F8FAFF] w-[380px] shadow-[0px 0px 2px rgba(0, 0, 0, 0.25)]">
          <div className="flex flex-col p-4 gap-5">
            <div className="flex items-center gap-3">
              <IconButton>
                <MdOutlineArrowBackIos color="#4B4B4B"/>
              </IconButton>
              <span className="font-bold text-2xl">Profile</span>
            </div>

            {/* Profile Form */}
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
