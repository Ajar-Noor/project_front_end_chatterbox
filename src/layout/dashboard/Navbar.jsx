import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { state, logOutUser } = useContext(AuthContext);
  const { User } = state;

  return (
    <div>
      <div className=" px-24 flex bg-[#AFBBF7] h-[60px] w-[100%] sticky z-10 justify-between items-center text-[#F0F4FA]">
        <div className="font-serif text-2xl grid content-center">
          <span>chitterchatter</span>
          {console.log("Username", User)}
          {User && <span>{`logged in as ${User?.name}`}</span>}
        </div>

        <div className="flex gap-5">
          {User && (
            <Link to="/login" onClick={() => logOutUser()}>
              LogOut
            </Link>
          )}

          <div>
            <div>
              <Link to="/login">LogIn</Link>
            </div>
            <div>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
