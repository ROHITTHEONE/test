import Links from "./Links";
import Social from "./Social";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = (e) => {
    setShowMenu(!showMenu);
  };

  window.addEventListener("click", (e) => {
    if (e.target.id !== "menu") {
      setShowMenu(false);
    }
  });

  return (
    <div className='flex justify-between align-center h-16 px-4 py-2'>
      <div></div>
      <img
        src={logo}
        alt='website logo'
        className='justify-self-end ml-8 translate-y-8 w-auto h-14'
      />
      <div className='flex flex-col justify-between items-end relative'>
        <img
          id='menu'
          src={menu}
          alt='ham burger manu icon'
          className='w-auto h-8 mt-2'
          onClick={handleMenu}
        />
        <div
          className={`${
            showMenu ? "show" : "hide"
          } flex flex-col text-white bg-gray-900 absolute top-14 -right-4 z-20 px-8 py-10 text-xl overflow-x-auto w-60 space-y-8`}
        >
          <Links />
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
