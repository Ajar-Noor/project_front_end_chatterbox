import React, { useEffect, useState } from "react";
// import { PiUsersThree } from 'react-icons/pi'
// import { TbPhone } from 'react-icons/tb'
import { SlSettings } from "react-icons/sl";
import { NavButtons, Profile_Menu } from "../../AllResources/dashboard/index";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/chatapp";
    case 1:
      return "/call";
    case 2:
      return "/group";
    case 3:
      return "/setting";

    default:
      break;
  }
};

function Sidebar() {
  const [selected, setselected] = useState(0);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [isOn, setisOn] = useState(false);
  const avatarUrl = faker.image.avatar();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  // const handleSwitch = () => {
  //   setisOn(!isOn);
  // };
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("night");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <div className=" h-screen max-h-screen w-[129px] shrink-0 bg-primary shadow-[0px 0px 4px 0px rgba(0, 0, 0, 0.25)] rounded-tl-[30px] rounded-bl-[30px] relative flex flex-col items-center ">
        <div className="flex flex-col gap-5 items-center p-5">
          {/* logo */}
          <div className="h-[64px] w-[64px] items-center bg-secondary rounded-[12px] shrink-0">
            <img src="./images/logo.png" alt="logo"></img>
          </div>

          {/* sidebar icons bar */}
          <div className="flex flex-col gap-5 items-center">
            {NavButtons.map((el) =>
              el.index === selected ? (
                <div className="max-w-content bg-accent rounded-xl">
                  <button
                    class="btn rounded-full max-h-12 max-w-12 bg-transparent border-none text-base-100 hover:bg-accent"
                    key={el.index}
                  >
                    {el.icon}
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    class="btn rounded-full max-h-12 max-w-12 bg-transparent border-none text-dark hover:bg-accent"
                    key={el.index}
                    onClick={() => {
                      setselected(el.index);
                      navigate(getPath(el.index));
                    }}
                  >
                    {el.icon}
                  </button>
                </div>
              )
            )}
            <div className="flex flex-col w-full">
              <div className="divider"></div>
            </div>

            {/* setting icon */}
            {selected === 3 ? (
              <div className="max-w-content bg-accent rounded-xl">
                <button class="btn rounded-full max-h-12 max-w-12 bg-transparent border-none text-base-100 hover:bg-accent">
                  <SlSettings size={24} />
                </button>
              </div>
            ) : (
              <div>
                <button
                  class="btn rounded-full max-h-12 max-w-12 bg-transparent border-none text-dark hover:bg-accent"
                  onClick={() => {
                    setselected(3);
                    navigate(getPath(3));
                  }}
                >
                  <SlSettings size={24} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* theme toggle button */}
        <div className="h-full flex flex-col justify-end pb-12 items-center gap-5">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={(e) => handleToggle(e)}
              checked={theme === "light" ? false : true}
            />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* dropdown at sidebar profile */}
          <details className="dropdown dropdown-top max-w-content">
            <summary className="m-1 btn bg-transparent border-none hover:bg-transparent">
              <img
                src={avatarUrl}
                alt="fakerimage"
                height={48}
                width={48}
                className="rounded-full"
              />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36 left-[-12px]">
              {Profile_Menu.map((el, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center w-full gap-1"
                >
                  <a>
                    {el.title}
                    <span className="text-black ml-3">{el.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
