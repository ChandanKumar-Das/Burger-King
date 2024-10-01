import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Appcontext";
import { Serch } from "../lib/serch";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logOut } = useContext(AppContext);
  
  function capitalizeFirstLetter(str) {
    if (str.length === 0) return "";
    return str.charAt(0).toUpperCase();
  }

 

  console.log(user);

  return (
    <div className="shadow-xl sticky top-0 z-50 bg-white">
      <div className="container py-3 sm:py-0 sm:max-w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <div
             
              className="font-bold text-2xl sm:text-3xl flex gap-2"
            >
              <img src={Logo} alt="Logo" className="w-16" />
            </div>
          </div>

          {/* Search Input in the Middle */}
          <div onChange={Serch} className="flex-grow flex justify-end px-4 mx-4">
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
              {!user ? (
                <li>
                  <div
                    onClick={() => navigate("/login")}
                    className="inline-block py-4 px-4 hover:text-primary duration-300"
                  >
                    {"Log In"}
                  </div>
                </li>
              ) : (
                <li>
                  <div className="relative group">
                    <div className="inline-block cursor-pointer bg-black rounded-full text-lg px-1 text-white duration-300">
                      <div className="font-bold ">
                        {capitalizeFirstLetter(user.username)}
                      </div>
                    </div>

                    <ul className="absolute top-full left-0 mb-1 bg-white rounded-md w-24 h-16 flex flex-col justify-center items-center font-sen text-[14px] text-[#8A8E9B] font-normal leading-[12px] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                      <li className="flex justify-center pb-4 pt-2 text-black hover:text-blue-500">
                        My Profile
                      </li>
                      <li
                        className="flex justify-center text-black hover:text-blue-500"
                        onClick={logOut}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                </li>
              )}
            </ul>

            {/* Order Button */}
            {user ? (
              <div className="flex relative items-center gap-2 bg-blue-600 text-white py-1 px-4 rounded-full">
                <button>Cart</button>
                <LiaCartArrowDownSolid />
                <div className="absolute text-xs right-1 top-0.5 bg-red-500 px-1 rounded-full">
                  0
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
