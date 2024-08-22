import React from "react";

export default function TopNavigation() {
  return (
    <>
      {/* <div className="w-full h-[164px] debug">
        <div className=">Site Name</div>
      </div> */}

      <nav className="w-full h-[164px] flex items-center justify-between px-20 py-20">
        {/* <!-- Brand on the left --> */}
        <div className="py-67 text-black font-inter text-[20px]  tracking-wide font-medium leading-[30px] text-left">Site name</div>

        {/* <!-- Menu items on the right --> */}
        <div className="flex items-center space-x-12 py-14 tracking-wider">
          <a href="#" className="text-black font-inter text-[20px] font-medium leading-[30px]">
            Page
          </a>
          <a href="#" className="text-black font-inter text-[20px] font-medium leading-[30px]">
            Page
          </a>
          <a href="#" className="text-black font-inter text-[20px] font-medium leading-[30px]">
            Page
          </a>
          <button className="inline-block rounded-md text-white bg-black px-[24px] py-[14px] mx-2 font-inter text-[16px] font-medium leading-[24px]  tracking-wider
          "> Button</button>
        </div>
      </nav>
    </>
  );
}
