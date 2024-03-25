"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useDispatch, useSelector } from "react-redux";
import { popupState } from "@/app/Redux/store/homeSlice";

const HomeSectionFive = () => {
  gsap.registerPlugin(ScrollTrigger);
  const device = useSelector((state) => state.home.device);
  const dispatch = useDispatch();

  useGSAP(() => {
    if (window.document) {
      let parent = document.getElementById("parentfive");
      var tl2 = gsap.timeline(
        {
          scrollTrigger: {
            trigger: parent,
            scrub: 1,
            start: "top bottom",
            end: "bottom top",
            markers: false,
          },
        },
        3
      );
      let main = document.getElementById("order");
      tl2.to(
        main,
        {
          rotation: -60,
          duration: 1,
          ease: "power1.out",
        },
        0
      );
      ScrollTrigger.refresh();
    }
  }, [device]);
  return (
    <section id="parentfive" className=" bg-green py-[60px]">
      <div className=" max-w-[584px] w-[95%] md:w-full h-fit relative mx-auto p-[60px] sm:p-[84px]">
        <Image
          alt=""
          src="/Home/sectionFive/deliver.png"
          width={3000}
          height={3000}
          className=" w-full h-auto"
        ></Image>
        <Image
          alt=""
          id="order"
          src="/Home/sectionFive/order.svg"
          width={3000}
          height={3000}
          className=" absolute w-auto h-full right-0 top-0 origin-left rotate-90"
        ></Image>
      </div>
      <div className="max-w-7xl m-auto mt-[60px] flex justify-center items-center gap-10 flex-wrap">
        <div
          onClick={() => dispatch(popupState(true))}
          className="bg-yellow uppercase px-10 py-5 rounded-full text-[40px] text-white leading-[40px] min-h-[90px] flex justify-center items-center cursor-pointer"
        >
          Order online
        </div>
        <Link
          target="blank"
          href="https://www.grubhub.com/restaurant/vayals-indian-kitchen-507-w-thomas-rd-phoenix/7584032"
          className="bg-white uppercase px-10 py-5 rounded-full text-[40px] text-white leading-[40px] min-h-[90px] flex justify-center items-center"
        >
          <Image
            alt=""
            src="/Home/sectionFive/grubhub.svg"
            width={3000}
            height={3000}
            className=" w-[175px] h-auto"
          ></Image>
        </Link>
      </div>
    </section>
  );
};

export default HomeSectionFive;
