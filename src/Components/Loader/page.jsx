import React from "react";
import Image from "next/image";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader fixed h-screen w-screen bg-green z-[2002] flex flex-col justify-center items-center">
      <div className="innerDiv w-fit lg:min-w-[800px] max-w-[1000px] max-h-[60%] rounded-full bg-black flex flex-row justify-center md:justify-between items-center gap-5 p-4 md:p-[60px] mb-10 relative z-10 mx-[10%]">
        <div className=" divBorder w-full absolute h-full  border-[10px] border-black rounded-full md:rounded-[265px] left-0 top-0"></div>
        <div className=" divBorder w-full absolute h-full  border-[10px] border-black rounded-full md:rounded-[265px] left-0 top-0"></div>
        <div className=" divBorder w-full absolute h-full  border-[10px] border-black rounded-full md:rounded-[265px] left-0 top-0"></div>
        <Image
          alt="load"
          src="/load.png"
          width={3000}
          height={3000}
          priority
          className=" w-[50%] h-auto max-h-full hidden md:block"
        ></Image>
        <Image
          alt="load"
          src="/vayals.svg"
          width={3000}
          height={3000}
          priority
          className=" aspect-square w-full md:w-1/2 h-auto max-h-full"
        ></Image>
      </div>
      <p className=" text-3xl text-white leading-[40px] mt-20 lg:mt-0 text-center">
        Bringing India's Flavors to Your Plate <br />
        Indulge in Authentic Indian Cuisine
      </p>
    </div>
  );
};

export default Loader;
