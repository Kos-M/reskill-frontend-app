import React from "react";
import Cherry from "../assets/cherry.png";
import Carrot from "../assets/carrot.png";
import Mushroom from "../assets/mushroom.png";


export default function RelatedArticlePosts() {

    const posts = [
        { title: "Title", author: "Author", image: Carrot },
        { title: "Title", author: "Author", image: Cherry },
        { title: "Title", author: "Author", image: Mushroom },
      
        { title: "Title", author: "Author", image: Carrot },
        { title: "Title", author: "Author", image: Cherry },
        { title: "Title", author: "Author", image: Mushroom },
      
        { title: "Title", author: "Author", image: Carrot },
        { title: "Title", author: "Author", image: Cherry },
        { title: "Title", author: "Author", image: Mushroom },
      ];

  return (
<div className="grid grid-cols-3 gap-8">
 
      {posts.map((post, index) => (
        <div key={index} className="pb-20">
          <img src={post.image} alt={`image_${post.title}`} className="rounded-lg" />
          {/* Title and Autho */}
          <div className="w-full py-6">
          <h1 className="font-inter text-xl leading-30 text-black font-medium">{post.title}</h1>
          <h4 className="text-semiGray font-inter leading-30 text-xl font-medium py-1">{post.author}</h4>

          </div>
        </div>
      ))}
    </div>
  );
}
