import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className=" flex flex-col gap-2 mb-5 h-[200px] w-[400px] items-center justify-center">
          <span className="font-semibold text-xl">Forgot your password?</span>

          <p className="text-[#999999] mb-5 font-normal text-lg">
            Please enter the email address associated with your account and We
            will email you a link to reset your password.
          </p>
          <Link
            to={"/auth/login"}
            variant="subtitle2"
            className="flex items-center gap-1 font-normal underline text-accent"
          >
            <IoIosArrowBack />
            <span>Return to sign in</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
