import React from "react";

import fb from "../assets/icons/fb.png";
import linkedin from "../assets/icons/linkedin.png";
import yt from "../assets/icons/yt.png";
import insta from "../assets/icons/insta.png";
import PropTypes from "prop-types";

Footer.propTypes = {
  className: PropTypes.string,
};

export default function Footer({ className }) {
  return (
    <footer className={className}>
      <hr className="md:mx-10 lg:mx-20 w-full max-w-96 lg:max-w-screen-xl" />

      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:mr-8 mb-4 md:mb-0 md:ml-10 lg:ml-20 ">
          {/* Brand */}
          <h2 className="font-inter font-normal text-black text-[24px] tracking-wider leading-[36px] mx-2 md:mx-0  mt-[52px] ">
            Site name
          </h2>

          {/* Social icons */}
          <div className="flex items-center mx-auto mt-[92px]">
            <a href="#facebook">
              <img
                src={fb}
                alt="facebook"
                className="object-contain w-auto h-auto pl-2 pr-3 md:pl-0 md:pr-3"
              />
            </a>
            <a href="#linkedin">
              <img
                src={linkedin}
                alt="linkedin"
                className="object-contain w-auto h-auto px-3 md:px-3"
              />
            </a>
            <a href="#youtube">
              <img
                src={yt}
                alt="youtube"
                className="object-contain w-auto h-auto px-3 md:px-3"
              />
            </a>
            <a href="#instagram">
              <img
                src={insta}
                alt="instagram"
                className="object-contain w-auto h-auto pr-2 pl-3 md:pr-0 md:pl-3"
              />
            </a>
          </div>
        </div>

        {/* Links */}
        <section className="flex flex-col md:flex-row mt-[48px] mb-4 md:mb-0 w-full md:w-auto items-center max-w-[90%] md:max-w-screen-sm lg:max-w-full relative mx-auto lg:mr-20 lg:ml-auto lg:justify-end flex-grow  ">
          <div className="flex flex-col mr-8 w-[187px] mb-8 md:mb-0  items-center md:items-start">
            <h2 className="mb-[24px]">Topic</h2>
            <a href="#" className="hover:underline mb-[24px] text-footerLinks">
              Page
            </a>
            <a href="#" className="hover:underline mb-[24px] text-footerLinks">
              Page
            </a>
            <a href="#" className="hover:underline mb-[24px] text-footerLinks">
              Page
            </a>
          </div>
          <div className="flex flex-col mr-8 pl-0 w-[187px] mb-8 md:mb-0 items-center md:items-start">
            <h2 className="mb-[24px]">Topic</h2>
            <a href="#" className="hover:underline mb-[24px] text-footerLinks">
              Page
            </a>
            <a href="#" className="hover:underline mb-[24px] text-footerLinks">
              Page
            </a>
            <a href="#" className="hover:underline mb-[24px] text-footerLinks">
              Page
            </a>
          </div>
          <div className="flex flex-col mr-8 w-[187px] mb-2 md:mb-0 items-center md:items-start">
            <h2 className="mb-[24px]">Topic</h2>
            <a href="#" className="hover:underline mb-[24px] text-footerLinks">
              Page
            </a>
            <a href="#" className="hover:underline mb-[24px] text-footerLinks">
              Page
            </a>
            <a href="#" className="hover:underline mb-[24px] text-footerLinks">
              Page
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}
