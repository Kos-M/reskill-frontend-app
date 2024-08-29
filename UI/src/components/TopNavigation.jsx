import React, { useRef, useState, useEffect } from "react";

import PropTypes from "prop-types";

const Navbar = ({ className }) => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null); // Ref for the hamburger button

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the menu and the button
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={className}>
      <div
        className={`fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md  flex items-center justify-center transition-opacity duration-200 ease-in-out ${
          isMenuOpen ? "opacity-100 z-50" : "opacity-0 -z-10"
        }`}
      ></div>
      {/* Brand on the left */}
      <div className="text-black font-inter text-[20px] tracking-wide font-medium z-[60]">
        <a href="/">Site name</a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden z-[60]">
        <button
          onClick={toggleMenu}
          ref={buttonRef}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu items */}
      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row lg:space-x-12 items-center space-y-4 pb-4 z-[60] lg:space-y-0 absolute lg:static top-20 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-4 lg:px-0  `}
      >
        <a
          href="#"
          className="text-black font-inter text-[20px] font-medium leading-[30px] w-full lg:w-auto text-center py-4 lg:py-0"
        >
          Page
        </a>
        <a
          href="#"
          className="text-black font-inter text-[20px] font-medium leading-[30px] w-full lg:w-auto text-center py-4 lg:py-0"
        >
          Page
        </a>
        <a
          href="#"
          className="text-black font-inter text-[20px] font-medium leading-[30px] w-full lg:w-auto text-center py-4 lg:py-0"
        >
          Page
        </a>
        <button className="w-full lg:w-auto text-center inline-block rounded-md text-white bg-black px-[24px] py-[14px] font-inter text-[16px] font-medium leading-[24px] tracking-wider lg:mx-2 transition duration-300 ease-in-out transform hover:bg-gray-800 focus:bg-gray-900 active:scale-95">
          Button
        </button>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  className: PropTypes.string,
};
export default Navbar;
