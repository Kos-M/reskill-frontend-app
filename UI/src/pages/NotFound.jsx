import NotFoundImage from "../assets/notfound.png";

export default function NotFound() {
  return (
    <div className="w-full px-20 h-auto py-20 flex flex-col justify-center items-center ">
      <img
        className=" w-full md:w-1/2  h-56  object-contain  md:h-auto rounded-lg mx-auto"
        src={NotFoundImage}
      />
      <h1 className="py-10 font-inter font-bold text-semiGray text-3xl">
        Not Found
      </h1>
    </div>
  );
}
