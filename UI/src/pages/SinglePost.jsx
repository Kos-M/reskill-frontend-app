import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../utils/Api";

export default function SinglePost() {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [userNCity, setUserNCity] = useState("");

  const [url, setURL] = useState("#");
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const postID = urlParams.get("id");

    Api.get(`/post/${postID}`)
      .then((res) => {
        const { body, title, url, userName, city } = res.data.result;
        setBody(body);
        setTitle(title);
        setURL(url);
        setUserNCity(`${userName} ${city ? "- " + city : ""}`);
      })
      .catch((e) => {
        if (e?.message.includes("404")) {
          navigate("/404");
        }
      });
  }, []);

  return (
    <div className="px-4 md:px-20 w-full h-full  overflow-y-auto mt-8 md:mt-20 mb-[120px]">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Text */}
        <div className="md:w-[624px] mb-8 md:mb-0">
          <h1 className="text-black font-inter text-4xl md:text-5xl md:text-[64px] font-bold leading-tight md:leading-[77.45px]">
            {title}
          </h1>

          {/* Image - appears after the title on mobile/tablet and moves to the right on desktop */}
          <div className="order-2 md:order-1 flex justify-center items-center md:justify-end   mt-10 md:mt-0 rounded-lg md:items-start md:hidden">
            <img
              src={url}
              alt="hero image"
              className="object-contain w-auto h-80 md:h-auto rounded-lg "
            />
          </div>

          <p className="text-left font-inter font-light text-md md:text-xl md:text-[24px] leading-7 md:leading-9 text-semiGray pt-4 md:pt-6 tracking-wide">
            {userNCity}
          </p>

          <p className="pt-4 md:pt-6 text-left font-inter tracking-normal font-medium text-md md:text-xl leading-6 md:leading-[30px] text-black">
            {body.split(".")[0]}
          </p>

          <p className="pt-6 md:pt-8 text-left font-inter font-medium leading-6 md:leading-[30px] text-md md:text-xl md:text-[20px] text-black">
            {body.split(".")[1]}
          </p>
        </div>

        {/* Image - displayed on the right on desktop */}
        <div className="order-1 md:order-2 hidden md:flex justify-center items-center md:justify-end md:items-start rounded-lg md:w-[50%]">
          <img
            src={url}
            alt="hero image"
            className="object-contain w-full md:w-auto h-80 md:h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
