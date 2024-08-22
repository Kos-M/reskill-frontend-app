import React from "react";
import RelatedArticlePosts from "../components/RelatedArticlePosts";
import FoodPlates from "../assets/FoodPlates.png";
import Flowers from "../assets/flowers.png";
import Sheeps from "../assets/sheep.png";

export default function Home() {
  return (
    <div className="px-20 w-100">
      {/* Headline */}
      <div className="w-[733px] inline-block py-20 text-left mx-auto">
        <p className="text-medium font-inter text-left font-bold text-[64px]">
          Posts List
        </p>
        {/* Subheading */}
        <p className="text-2xl leading-9  pt-6 font-inter font-light tracking-wider text-semiGray">
          Subheading that sets up context, shares more info about the author, or
          generally gets people psyched to keep reading
        </p>
      </div>

      <img
        src={FoodPlates}
        height="650"
        width="1281"
        className="rounded-lg"
        alt="food plates on the table"
      />

      {/* Rest Text  */}
      <div className="w-7/12 py-20 mx-auto font-normal font-inter text-xl leading-30 flex flex-col ">
        <p className="pb-2">
          Body text for your whole article or post. We’ll put in some lorem
          ipsum to show how a filled-out page might look:
        </p>

        <p className="py-2">
          Excepteur efficient emerging, minim veniam anim aute carefully curated
          Ginza conversation exquisite perfect nostrud nisi intricate Content.
          Qui international first-class nulla ut. Punctual adipisicing,
          essential lovely queen tempor eiusmod irure. Exclusive izakaya
          charming Scandinavian impeccable aute quality of life soft power
          pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et
          Porter destination Toto remarkable officia Helsinki excepteur Basset
          hound. Zürich sleepy perfect consectetur.
        </p>

        <p className="py-2">
          Exquisite sophisticated iconic cutting-edge laborum deserunt Addis
          Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo
          nostrud delightful. Conversation aute Rochester id. Qui sunt
          remarkable deserunt intricate airport handsome K-pop excepteur classic
          esse Asia-Pacific laboris.
        </p>
      </div>

      {/* Two Images (Flowers - Sheeps) */}
      <div className="flex">
        <img src={Flowers} alt="flowers" className="w-1/2 h-auto pr-8" />
        <img src={Sheeps} alt="sheeps" className="w-1/2 h-auto" />
      </div>

      {/* Text After double images */}
      <div className="w-7/12 py-20 mx-auto font-normal font-inter text-xl leading-30 flex flex-col">
        <p className="py-2">
          Excepteur efficient emerging, minim veniam anim cloying aute carefully
          curated gauche. Espresso exquisite perfect nostrud nisi intricate.
          Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure.
          Exclusive izakaya charming Quezon City impeccable aute quality of life
          soft power pariatur occaecat discerning. Qui wardrobe aliquip, et
          Amadeus rock opera.
        </p>
        <p className="py-2">
          Exquisite sophisticated iconic cutting-edge laborum deserunt esse
          bureaux cupidatat id minim. Sharp classic the best commodo nostrud
          delightful. Conversation aute wifey id. Qui sunt remarkable deserunt
          intricate airport excepteur classic esse riot girl.
        </p>
      </div>

      {/* Related Articles or Posts */}
      <div>
        <h1 className="text-black font-semibold text-[40px] leading-44 pb-8">Related articles or posts</h1>
        <RelatedArticlePosts  />
      </div>
    </div>
  );
}
