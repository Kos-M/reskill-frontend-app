import { useEffect, useState } from "react";
import RelatedArticlePosts from "../components/RelatedArticlePosts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Api from "../utils/Api";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    Api.get("/posts").then((ans) => {
      setPosts(ans?.data?.posts);
    });
  }, []);

  useEffect(() => {
    if (posts.length > 0) setFetched(true);
  }, [posts]);

  return (
    <div className="px-4 md:px-10 py-2 lg:px-20 w-full overflow-x-clip">
      {/* Headline */}
      <div className="w-full md:w-[733px]  text-left md:py-14 mx-auto md:mx-0">
        <p className="text-medium font-inter text-left font-bold text-[42px] md:text-[64px]">
          {fetched ? (
            posts[0]?.title
          ) : (
            <Skeleton
              className="text-[12px] md:text-[12px] w-2/3 h-[4vw] md:h-[2vh]"
              count={1}
            />
          )}
        </p>
        {/* Subheading */}
        <p className="text-base md:text-2xl leading-9  pt-6 font-inter font-light tracking-wider text-semiGray">
          {fetched ? (
            posts[0]?.body
          ) : (
            <Skeleton count={3} className="h-[5vw] md:h-[2vh]" />
          )}
        </p>
      </div>

      {/* Hero IMAGE container */}
      <div className="w-full h-[30vh] md:h-[50vh] mx-auto my-2 md:my-6  ">
        {fetched ? (
          <a href={`/post?id=${posts[0]?.id}`}>
            <img
              src={posts?.length > 0 ? posts[0]?.url : "#"}
              className="rounded-lg w-full h-full block object-cover "
              alt="hero image"
            />
          </a>
        ) : (
          <div className="mx-auto flex flex-col text-center  justify-center  h-full w-full    ">
            <Skeleton
              className="mx-auto md:w-2/3 w-full h-[4vw] md:h-[2vh]"
              count={2}
            />
            <Skeleton
              circle
              className="mx-auto md:w-[5vh] md:h-[5vh] w-[14vw] h-[14vw]"
              count={1}
            />
            <Skeleton
              className="mx-auto  md:w-2/3 w-full h-[4vw] md:h-[2vh]"
              count={3}
            />
          </div>
        )}
      </div>

      {/* Rest Text  */}
      <div className="w-full md:max-w-[842px] my-8 md:my-20 mx-auto font-normal font-inter text-xl leading-30 flex flex-col relative">
        <p className="pb-2 ">
          {fetched ? (
            posts[1].body
          ) : (
            <Skeleton className=" h-[4vw] md:h-[2vh]" count={3} />
          )}
        </p>

        <p className="py-2">
          {fetched ? posts[2].body : <Skeleton height={25} count={3} />}
        </p>

        <p className="py-2">
          {fetched ? posts[3].body : <Skeleton height={25} count={3} />}
        </p>
      </div>

      {/* Two Images (Flowers - Sheeps) */}
      <div className="flex flex-col md:flex-row">
        {fetched ? (
          <>
            <a
              className="w-full md:w-1/2 h-auto mb-4 md:mb-0 md:pr-4 max-h-[427px]"
              href={`/post?id=${posts[1]?.id}`}
            >
              <img
                src={posts.length > 0 ? posts[1].url : ""}
                alt="flowers"
                className="w-full h-auto object-cover max-h-[427px] rounded-lg "
              />
            </a>
            <a
              className="w-full md:w-1/2 h-auto md:pl-4"
              href={`/post?id=${posts[2]?.id}`}
            >
              <img
                src={posts.length > 0 ? posts[2].url : ""}
                alt="sheeps"
                className="w-full h-auto max-h-[427px] object-cover rounded-lg "
              />
            </a>
          </>
        ) : (
          <div className="w-full flex  flex-col md:flex-row  justify-center items-center">
            <div className="flex flex-col justify-center h-full w-3/4 px-8 md:px-20 pb-10 md:pb-0">
              <Skeleton
                className="mx-auto w-full h-[4vw] md:h-[2vh]"
                count={2}
              />
              <Skeleton
                circle
                className="mx-auto md:w-[5vh] md:h-[5vh] w-[14vw] h-[14vw]"
                count={1}
              />
              <Skeleton
                className="mx-auto w-full h-[4vw] md:h-[2vh]"
                count={3}
              />
            </div>
            <div className="flex flex-col justify-center  h-full w-3/4 px-8 md:px-20">
              <Skeleton
                className="mx-auto w-full h-[4vw] md:h-[2vh]"
                count={2}
              />
              <Skeleton
                circle
                className="mx-auto md:w-[5vh] md:h-[5vh] w-[14vw] h-[14vw]"
                count={1}
              />
              <Skeleton
                className="mx-auto w-full h-[4vw] md:h-[2vh]"
                count={3}
              />
            </div>
          </div>
        )}
      </div>

      {/* Text After double images */}
      <div className="w-full md:max-w-[842px] my-8 md:my-20 mx-auto font-normal font-inter text-xl leading-30 flex flex-col relative">
        <p className="py-2">
          {fetched ? posts[4].body : <Skeleton height={25} count={4} />}
        </p>
        <p className="py-2">
          {fetched ? posts[5].body : <Skeleton height={25} count={3} />}
        </p>
      </div>

      {/* Related Articles or Posts */}
      <div>
        <h1 className="text-black font-semibold tracking-wide text-2xl md:text-[40px] leading-8 md:leading-44 pb-4 md:pb-8">
          {fetched ? (
            "Related articles or posts"
          ) : (
            <Skeleton height={25} className="w-1/2 md:w-1/3" count={1} />
          )}
        </h1>
        {fetched ? (
          <RelatedArticlePosts posts={posts.slice(4, 13)} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
              return (
                <div
                  key={`dummy_container_skeleton_${i}`}
                  className="flex flex-col justify-center   mx-auto  h-full w-4/5 px-8  pb-10 md:px-10"
                >
                  <Skeleton
                    className="mx-auto w-full h-[4vw] md:h-[2vh]"
                    count={2}
                  />
                  <Skeleton
                    circle
                    className="mx-auto md:w-[5vh] md:h-[5vh] w-[14vw] h-[14vw]"
                    count={1}
                  />
                  <Skeleton
                    className="mx-auto w-full h-[4vw] md:h-[2vh]"
                    count={3}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
