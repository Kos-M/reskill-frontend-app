import React from "react";

import fb from "../assets/icons/fb.png";
import linkedin from "../assets/icons/linkedin.png";
import yt from "../assets/icons/yt.png";
import insta from "../assets/icons/insta.png";

export default function Footer() {
  return (
    <footer className="w-full h-[264px]    ">
      <hr className="mx-20" />

      <div className=" flex justify-between  ">
        <div className="  flex  flex-col     ">
          {/* Brand */}
          <h2 className="font-inter font-[330] text-black text-[24px] tracking-wider leading-[36px] ml-20 mt-[52px]">
            Site name
          </h2>

          {/* Social icons */}
          <div className=" mx-20 flex mt-[92px]  ">
            <img
              src={fb}
              alt="facebook"
              className="object-contain w-auto h-auto pl-2 pr-3"
            />
            <img
              src={linkedin}
              alt="linkedin"
              className="object-contain w-auto h-auto px-3"
            />
            <img
              src={yt}
              alt="youtube"
              className="object-contain w-auto h-auto px-3"
            />
            <img
              src={insta}
              alt="instagram"
              className="object-contain w-auto h-auto pr-2 pl-3"
            />
          </div>

        </div>
          {/* Links */}
          <section className="flex mr-20">
          <div className=" flex flex-col  mt-[52px] mr-8  w-[187px] space-y-[24px]">
            <h2>Topic</h2>
            <a href="#" >Page</a>
            <a href="#" >Page</a>
            <a href="#" >Page</a>
          </div>
          <div className=" flex flex-col  mt-[52px] mr-8 pl-0 w-[187px] space-y-[24px]">
            <h2>Topic</h2>
            <a href="#" >Page</a>
            <a href="#" >Page</a>
            <a href="#" >Page</a>
          </div>
          <div className=" flex flex-col  mt-[52px] w-[187px] space-y-[24px]">
            <h2>Topic</h2>
            <a href="#" >Page</a>
            <a href="#" >Page</a>
            <a href="#" >Page</a>
          </div>
          </section>
      </div>
    </footer>
  );
}
