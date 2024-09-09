import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "javascript:void(0)",
  },
  {
    id: 2,
    name: "About",
    link: "javascript:void(0)",
  },
  {
    id: 3,
    name: "Menu",
    link: "javascript:void(0)",
  },
  {
    id: 4,
    name: "Services",
    link: "javascript:void(0)",
  },
];

const Navbar = () => {
  return (
    <motion.div
      className="shadow-xl "
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container py-3 sm:py-0 sm:max-w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo Animation */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="javascript:void(0)" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-16" />
            </a>
          </motion.div>

          <div className="flex justify-between items-center gap-4">
            {/* Menu Links Animation */}
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <motion.li
                  key={menu.id}
                  whileHover={{ scale: 1.1, color: "#1DA1F2" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={menu.link}
                    className="inline-block py-4 px-4 hover:text-primary duration-300"
                  >
                    {menu.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Order Button Animation */}
            <motion.button
              className="bg-blue-600 from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Order
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
