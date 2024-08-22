import React from "react";
import Hero from "../assets/hero_single_post.png";

export default function SinglePost() {
  return (
    <div className="px-20 w-100 mb-[120px]">
      <div className="flex flex-grow  justify-between">
        {/* Text */}
        <div className="w-[624px]  ">
          <h1 className="text-black font-inter text-[64px]  font-bold leading-[77.45px] ">
            Single Post
          </h1>
          <p className="text-left font-inter font-light text-[24px] leading-9 flex items-center   text-semiGray  order-1 self-stretch flex-none  pt-6  tracking-wide ">
            Subheading for description or instructions
          </p>

          <p className="pt-6 text-left font-inter tracking-normal font-[450] text-xl   leading-[30px] text-black order-2 self-stretch flex-none">
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look:
          </p>

          <p className="pt-8 text-left font-inter font-[450] leading-[30px]  text-[20px]  text-black order-2 self-stretch flex-none">
            Excepteur efficient emerging, minim veniam anim aute carefully
            curated Ginza conversation exquisite perfect nostrud nisi intricate
            Content. Qui international first-class nulla ut. Punctual
            adipisicing, essential lovely queen tempor eiusmod irure. Exclusive
            izakaya charming Scandinavian impeccable aute quality of life soft
            power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip,
            et Porter destination Toto remarkable officia Helsinki excepteur
            Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src={Hero}
            alt="hero image"
            className=" object-contain w-auto h-auto rounded-r-lg px-[5px]"
          />
        </div>
      </div>
    </div>
  );
}
