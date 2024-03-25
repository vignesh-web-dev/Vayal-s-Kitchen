"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import data from "./data.json";
import { useGSAP } from "@gsap/react";
import Particles from "./Particles";
import { UseDispatch, useSelector } from "react-redux";

const HomeSectionThree = ({ dev }) => {
  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null);
  const ref = useRef(null);
  const right = useRef(null);
  const device = useSelector((state) => state.home.device);

  useGSAP(() => {
    const tl = gsap.timeline();
    let mm = gsap.matchMedia(comp);
    if (window.document) {
      let parent = document.getElementsByClassName("parentThree")[0];
      let child = document.getElementsByClassName("pinned")[0];
      var tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          scrub: 0.5,
          start: device === "mobile" ? "-=10%" : "0%",
          end: device === "mobile" ? "-=10% top" : "0% top",
          markers: false,
        },
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });
      let one = document.getElementById("one");
      let two = document.getElementById("two");
      let three = document.getElementById("three");
      let four = document.getElementById("four");
      let five = document.getElementById("five");
      let plate = document.getElementById("plate");
      let leaf = document.getElementById("leaf");
      let samosa = document.getElementById("samosa");
      let items = document.getElementById("items");
      let parti1 = document.getElementById("parti1");
      let parti2 = document.getElementById("parti2");
      let parti3 = document.getElementById("parti3");
      let parti4 = document.getElementById("parti4");
      let parti5 = document.getElementById("parti5");
      let parti6 = document.getElementById("parti6");
      let parti7 = document.getElementById("parti7");
      let parti8 = document.getElementById("parti8");
      let parti9 = document.getElementById("parti9");
      if (device == "desktop" || device == "tablet") {
        tl2.to(
          one,
          {
            scale: "0.85",
            maxWidth: "220px",
            right: "10%",
            rotate: "-17.5deg",
            bottom: "10%",
            ease: "none",
          },
          0
        );
        tl2.to(
          five,
          {
            scale: "0.85",
            maxWidth: "270px",
            right: "0%",
            rotateZ: "11.5deg",
            ease: "none",
            translateX: 0,
          },
          0
        );
        tl2.to(
          three,
          {
            scale: 0.85,
            maxWidth: "235px",
            bottom: "8%",
            left: "0px",
            rotate: "9deg",
            ease: "none",
          },
          0
        );
        tl2.to(
          four,
          {
            translateX: 0,
            maxWidth: "207px",
            top: "1%",
            left: "0",
            rotate: "-13.5deg",
            ease: "none",
          },
          0
        );
        tl2.to(
          two,
          {
            opacity: 0,
            width: "235px",
            ease: "none",
          },
          0
        );
        //   svg transitions
        tl2.to(
          plate,
          {
            scale: 0.95,
            top: "10%",
            left: "35%",
            margin: "auto",
            ease: "none",
          },
          0
        );
        tl2.to(
          leaf,
          {
            top: "32%",
            left: "10%",
            ease: "none",
          },
          0
        );
        tl2.to(
          samosa,
          {
            top: "42%",
            left: "45%",
            ease: "none",
          },
          0
        );
        tl2.to(
          items,
          {
            top: "65%",
            left: "40%",
            ease: "none",
          },
          0
        );
        //particles
        tl2.to(
          parti1,
          {
            top: "3%",
            left: "32%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti2,
          {
            top: "3%",
            left: "50%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti3,
          {
            top: "10%",
            right: "-8%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti4,
          {
            left: "33%",
            top: "30%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti4,
          {
            left: "50%",
            top: "30%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti5,
          {
            right: "2%",
            top: "44%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti6,
          {
            right: "15%",
            top: "49%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti7,
          {
            left: "37%",
            top: "49%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti8,
          {
            left: "40%",
            top: "62%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti9,
          {
            right: "40%",
            bottom: "15%",
            ease: "none",
          },
          0
        );
      }
      if (device == "mobile") {
        tl2.to(
          one,
          {
            scale: "0.85",
            maxWidth: "170px",
            right: "10%",
            rotate: "-17.5deg",
            bottom: "20%",
            ease: "none",
          },
          0
        );
        tl2.to(
          five,
          {
            scale: "0.85",
            maxWidth: "270px",
            top: "25%",
            right: "0%",
            rotateZ: "11.5deg",
            // top: "5%",
            ease: "none",
            translateX: 0,
          },
          0
        );
        tl2.to(
          three,
          {
            scale: 0.85,
            maxWidth: "175px",
            bottom: "18%",
            left: "0px",
            rotate: "9deg",
            ease: "none",
          },
          0
        );
        tl2.to(
          four,
          {
            translateX: 0,
            maxWidth: "207px",
            top: "1%",
            left: "0",
            rotate: "-13.5deg",
            ease: "none",
          },
          0
        );
        tl2.to(
          two,
          {
            opacity: 0,
            width: "235px",
            ease: "none",
          },
          0
        );
        //   svg transitions
        tl2.to(
          plate,
          {
            scale: 0.95,
            width: "140px",
            top: "6%",
            right: "5%",
            margin: "auto",
            ease: "none",
          },
          0
        );
        tl2.to(
          leaf,
          {
            top: "32%",
            left: "1%",
            ease: "none",
          },
          0
        );
        tl2.to(
          samosa,
          {
            top: "85%",
            right: "5%",
            ease: "none",
          },
          0
        );
        tl2.to(
          items,
          {
            top: "85%",
            left: "4%",
            ease: "none",
          },
          0
        );
        //particles
        tl2.to(
          parti1,
          {
            top: "3%",
            left: "32%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti2,
          {
            top: "3%",
            left: "50%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti3,
          {
            top: "10%",
            right: "-8%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti4,
          {
            left: "33%",
            top: "30%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti4,
          {
            left: "50%",
            top: "30%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti5,
          {
            right: "2%",
            top: "44%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti6,
          {
            right: "15%",
            top: "49%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti7,
          {
            left: "37%",
            top: "49%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti8,
          {
            left: "40%",
            top: "62%",
            ease: "none",
          },
          0
        );
        tl2.to(
          parti9,
          {
            right: "40%",
            bottom: "15%",
            ease: "none",
          },
          0
        );
      }
    }
  }, [device]);
  return (
    <section
      id="catering"
      ref={ref}
      className=" parentThree pb-[60px] pt-5 sm:pt-[60px] overflow-hidden bg-lightgreen"
    >
      <div className="desktop w-full flex flex-col-reverse lg:flex-row gap-8 max-w-7xl mx-auto">
        <div className="right h-full w-full min-w-1/2 lg:max-w-[540px] flex flex-col gap-10 px-5 sm:px-10">
          <h1 className="text-7xl md:text-[100px] hidden lg:block">
            our catering services
          </h1>
          {data &&
            data.map((item, index) => (
              <div
                key={index + "three"}
                className=" flex flex-row items-start gap-5 lg:max-w-[410px]"
              >
                <Image
                  alt={item.title}
                  src={"/Home/tick.svg"}
                  width={3000}
                  height={3000}
                  className=" w-16 h-auto rounded-full aspect-square"
                ></Image>
                <div className=" flex justify-start items-start flex-col">
                  <p className=" text-3xl md:text-[40px] leading-[100%] font-bold text-green font-work">
                    {item.title}
                  </p>
                  <p className=" text-base font-work font-normal text-black mt-5 leading-[170%]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div>
          <h1 className="text-5xl md:text-[100px] lg:hidden block px-2 mb-5">
            our catering services
          </h1>
          <div
            oncontextmenu="return false;"
            ref={right}
            className="pinned h-[1000px] sm:min-h-[890px] w-full lg:min-w-[600px] max-w-[740px] m-auto flex flex-col justify-start items-center text-black relative pointer-events-none"
          >
            <Image
              alt=""
              id="one"
              src="/Home/sectionThree/1.png"
              width={3000}
              height={3000}
              className="one w-1/2 max-w-[290px] absolute z-20 scale-90 translate-x-10"
            ></Image>
            <Image
              alt=""
              id="two"
              src="/Home/sectionThree/2.png"
              width={3000}
              height={3000}
              className="w-1/2 max-w-[290px] absolute z-10 scale-75 translate-x-20"
            ></Image>
            <Image
              alt=""
              id="three"
              src="/Home/sectionThree/3.png"
              width={3000}
              height={3000}
              className="w-1/2 max-w-[290px] absolute z-30"
            ></Image>
            <Image
              alt=""
              id="four"
              src="/Home/sectionThree/4.png"
              width={3000}
              height={3000}
              //max-w-[207px]
              className="w-1/2 max-w-[290px] absolute z-10 scale-75 -translate-x-20"
            ></Image>
            <Image
              alt=""
              id="five"
              src="/Home/sectionThree/5.png"
              width={3000}
              height={3000}
              // max-w-[270px]
              className="w-1/2 max-w-[290px] absolute scale-90 z-20 -translate-x-10"
            ></Image>
            {/*  */}
            <Image
              alt=""
              id="plate"
              src="/Home/sectionThree/plate.svg"
              width={3000}
              height={3000}
              className=" w-[30%] max-w-[140px] absolute z-0"
            ></Image>
            <Image
              alt=""
              id="leaf"
              src="/Home/sectionThree/leaf.svg"
              width={3000}
              height={3000}
              className="w-1/2 max-w-[220px] absolute z-0"
            ></Image>
            <Image
              alt=""
              id="samosa"
              src="/Home/sectionThree/samosa.svg"
              width={3000}
              height={3000}
              className="w-1/2 max-w-[165px] absolute z-0"
            ></Image>
            <Image
              alt=""
              id="items"
              src="/Home/sectionThree/items.svg"
              width={3000}
              height={3000}
              className="w-1/2 max-w-[150px] absolute z-0"
            ></Image>
            {/* Particles Images */}
            <Image
              alt=""
              id="parti1"
              src="/particles/1.svg"
              width={3000}
              height={3000}
              className="absolute z-0 w-fit"
            ></Image>
            <Image
              alt=""
              id="parti2"
              src="/particles/2.svg"
              width={3000}
              height={3000}
              className="absolute z-0 w-fit"
            ></Image>
            <Image
              alt=""
              id="parti3"
              src="/particles/3.svg"
              width={3000}
              height={3000}
              className="absolute z-0 w-fit"
            ></Image>
            <Image
              alt=""
              id="parti4"
              src="/particles/4.svg"
              width={3000}
              height={3000}
              className="absolute z-0 w-fit"
            ></Image>
            <Image
              alt=""
              id="parti5"
              src="/particles/5.svg"
              width={3000}
              height={3000}
              className="absolute z-0 w-fit"
            ></Image>
            <Image
              alt=""
              id="parti6"
              src="/particles/6.svg"
              width={3000}
              height={3000}
              className="absolute z-0 w-fit"
            ></Image>
            <Image
              alt=""
              id="parti7"
              src="/particles/7.svg"
              width={3000}
              height={3000}
              className="absolute z-0 w-fit"
            ></Image>
            <Image
              alt=""
              id="parti8"
              src="/particles/8.svg"
              width={3000}
              height={3000}
              className="absolute z-0 w-fit"
            ></Image>
            <Image
              alt=""
              id="parti9"
              src="/particles/9.svg"
              width={3000}
              height={3000}
              className="absolute z-0 w-fit"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;
