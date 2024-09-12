import React from "react";
import Logo from "../assets/logo.png";
import { LiaCartArrowDownSolid } from "react-icons/lia";

const Menu = [
  // {
  //   id: 1,
  //   name: "About",
  //   link: "javascript:void(0)",
  // },
  {
    id: 2,
    name: "LogIn",
    link: "javascript:void(0)",
  },
  // {
  //   id: 3,
  //   name: "SignUp",
  //   link: "javascript:void(0)",
  // },
  // {
  //   id: 4,
  //   name: "Services",
  //   link: "javascript:void(0)",
  // },
];

const Navbar = () => {
  return (
    <div className="shadow-xl sticky top-0 z-50 bg-white">
      <div className="container py-3 sm:py-0 sm:max-w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="javascript:void(0)" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-16" />
            </a>
          </div>

          {/* Search Input in the Middle */}
          <div className="flex-grow flex justify-end px-4 mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4">
            {/* Menu Links */}
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-4 px-4 hover:text-primary duration-300"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Order Button */}
            <div className="flex relative items-center gap-2 bg-blue-600 text-white py-1 px-4 rounded-full">
              <button>
                Cart
              </button>
              <LiaCartArrowDownSolid />
              <div className="absolute text-xs right-1 top-0.5 bg-red-500 px-1 rounded-full">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
