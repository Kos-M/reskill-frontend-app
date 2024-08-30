import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Api from "../utils/Api";

export default function SinglePost() {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [userNCity, setUserNCity] = useState("");
  const [timeoutID, setTimeoutID] = useState(null);

  const [url, setURL] = useState("#");
  const navigate = useNavigate();
  const before = Date.now();
  const skeletonDelay = 250; // minimum delay to show/render the skeletons

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const postID = urlParams.get("id");

    Api.get(`/post/${postID}`)
      .then((res) => {
        const { body, title, url, userName, city } = res.data.result;
        // ensure that the delay will at least -> skeletonDelay
        let diff = Date.now() - before;
        if (diff >= skeletonDelay) diff = 0;
        else if (diff < skeletonDelay) {
          diff = skeletonDelay - diff;
        }
        if (timeoutID) clearTimeout(timeoutID);
        setTimeoutID(
          setTimeout(() => {
            setBody(body);
            setTitle(title);
            setURL(url);
            setUserNCity(
              userName && city
                ? `${userName} ${city ? "- " + city : "---"}`
                : " "
            );
          }, diff)
        );
      })
      .catch((e) => {
        if (e?.message.includes("404")) {
          navigate("/404");
        }
      });
  }, []);

  return (
    <div className="px-4 md:px-20 w-full h-full overflow-y-auto mt-8 md:mt-20 md:mb-60 mb-36">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Text */}
        <div className="md:w-[624px] mb-8 md:mb-0">
          <h1 className="text-black font-inter text-4xl md:text-5xl md:text-[64px] font-bold leading-tight md:leading-[77.45px]">
            {title ? (
              title
            ) : (
              <Skeleton className="w-2/3 h-[5vw] md:h-[3vw]" count={1} />
            )}
          </h1>

          {/* Image - appears after the title on mobile/tablet and moves to the right on desktop */}
          <div className="order-2 md:order-1 flex justify-center items-center md:justify-end mt-10 md:mt-0 rounded-lg md:items-start md:hidden">
            {url !== "#" ? (
              <img
                src={url}
                alt="hero image"
                className="object-cover w-full h-full rounded-lg"
              />
            ) : (
              <div className=" mx-auto flex flex-col  justify-center  h-full w-full py-10">
                <Skeleton
                  className="mx-auto  md:w-2/3 w-full h-[3vw] md:h-[2vh]"
                  count={2}
                />
                <Skeleton
                  circle
                  className="mx-auto md:w-[5vh] md:h-[5vh] w-[14vw] h-[14vw]"
                  count={1}
                />
                <Skeleton
                  className="mx-auto md:w-2/3 w-full h-[4vw] md:h-[2vh]"
                  count={3}
                />
              </div>
            )}
          </div>

          <p className="text-left font-inter font-light text-md md:text-xl md:text-[24px] leading-7 md:leading-9 text-semiGray pt-4 md:pt-6 tracking-wide">
            {userNCity ? (
              userNCity
            ) : (
              <Skeleton className=" w-1/2 h-[4vw] md:h-[1.5vw]" count={1} />
            )}
          </p>

          <p className=" pt-4 md:pt-6 text-left font-inter tracking-normal font-medium text-md md:text-xl leading-6 md:leading-[30px] text-black">
            {body ? (
              body.split(".")[0]
            ) : (
              <Skeleton className="w-full h-[4vw] md:h-[1.5vw]" count={2} />
            )}
          </p>

          <p className="pt-6 md:pt-8 text-left font-inter font-medium leading-6 md:leading-[30px] text-md md:text-xl md:text-[20px] text-black">
            {body ? (
              body.split(".")[1]
            ) : (
              <Skeleton className="w-full h-[4vw] md:h-[1.5vw]" count={3} />
            )}
          </p>
        </div>

        {/* Image - displayed on the right on desktop */}
        <div className="order-1 md:order-2 hidden md:flex justify-center items-center md:justify-end md:items-start rounded-lg md:w-[50%]">
          {url !== "#" ? (
            <img
              src={url}
              alt="hero image"
              className="object-contain w-full md:w-auto h-80 md:h-auto rounded-lg"
            />
          ) : (
            <div className="  flex flex-col  justify-center    h-full w-full  ml-[25%]  ">
              <Skeleton
                className="mx-auto  w-full h-[4vw] md:h-[2vh]"
                count={2}
              />
              <Skeleton
                circle
                className="text-left md:w-[5vh] md:h-[5vh] w-[14vw] h-[14vw]"
                count={1}
              />
              <Skeleton
                className="mx-auto w-full h-[4vw] md:h-[2vh]"
                count={3}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
