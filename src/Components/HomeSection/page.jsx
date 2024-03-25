"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import ScrollText from "../../Components/ScrollingText/page";
import { useDispatch, useSelector } from "react-redux";

import { useGSAP } from "@gsap/react";

export default function Sectionone({ dev }) {
  const device = useSelector((state) => state.home.device);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.config({ nullTargetWarn: false });
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger",
        pin: true,
        start: "-1 top",
        scrub: 0.1,
        end: "40% -=10%",
        markers: false,
        duration: 1,
      },
    });
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".top",
        scrub: 0.1,
        start: "-1 top",
        end: "5% top",
        markers: false,
      },
    });
    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".top",
        scrub: 0.1,
        start: "-1 top",
        end: "3% top",
        markers: false,
      },
    });
    var tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".top",
        scrub: 0.1,
        start: "5% top",
        markers: false,
      },
    });
    var tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".top",
        scrub: 0.1,
        start: "-1 top",
        end: "1% top",
        markers: false,
      },
    });
    if (device == "desktop" || device == "tablet") {
      tl2.to(
        "#rice",
        {
          scale: 0.7,
          //   x: "50%",
          //   y: "50%",
          left: "10%",
          top: "80%",
          ease: "none",
        },
        0
      );

      tl2.to(
        "#biriyani",
        {
          scale: 0.5,
          x: "-30%",
          y: "-70%",
          ease: "none",
        },
        0
      );
      tl2.to(
        "#kebab",
        {
          left: "5%",
          y: "-30%",
          ease: "none",
        },
        0
      );
      tl2.to(
        "#tandoori",
        {
          scale: 0.8,
          right: "3%",
          y: "40%",
          ease: "none",
        },
        0
      );
      tl2.to(
        "#naan",
        {
          bottom: "-20%",
          y: "40%",
          ease: "none",
        },
        0
      );
      tl3.to(".text", {
        opacity: 1,
      });
      tl5.to(".textfade", {
        opacity: 0,
      });
      tl5.to(".mark", {
        opacity: 1,
      });
      tl.to(
        "#yellow",
        {
          width: "678px",
          bottom: "0",
          ease: "none",
        },
        0
      );
    }
    if (device == "mobile") {
      tl2.to(
        "#rice",
        {
          scale: 0.7,
          left: "0%",
          top: "20%",
          ease: "none",
        },
        0
      );

      tl2.to(
        "#biriyani",
        {
          scale: 0.5,
          x: "-30%",
          y: "-70%",
          ease: "none",
        },
        0
      );
      tl2.to(
        "#kebab",
        {
          left: "5%",
          top: "80%",
          ease: "none",
        },
        0
      );
      tl2.to(
        "#tandoori",
        {
          scale: 0.8,
          right: "3%",
          top: "30%",
          ease: "none",
        },
        0
      );
      tl2.to(
        "#naan",
        {
          bottom: "0%",
          y: "40%",
          ease: "none",
        },
        0
      );
      tl3.to(".text", {
        opacity: 1,
      });
      tl5.to(".textfade", {
        opacity: 0,
      });
      tl5.to(".mark", {
        opacity: 1,
      });
      tl.to(
        "#yellow",
        {
          width: "100%",
          bottom: "0",
          scrub: true,
          ease: "none",
        },
        0
      );
    }
    tl4.to(".parallax", {
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none",
      duration: 2,
    });
    ScrollTrigger.refresh();
  }, [device]);

  return (
    <>
      <section className="w-full bg-lightgreen min-h-screen h-full flex flex-col justify-center items-center relative trigger overflow-hidden">
        <div className="relative flex justify-center items-center w-full">
          <div className="absolute textfade w-full flex max-w-2xl flex-col justify-center items-center z-20">
            <h1 className="md:text-6xl text-4xl text-black text-center hidden md:block">
              Welcome to Vayals Kitchen
            </h1>
            <h1 className="md:text-6xl text-4xl text-black text-center block md:hidden">
              Welcome to
              <br />
              Vayals Kitchen
            </h1>
            <p className=" text-xl font-work text-center md:max-w-xl max-w-xs font-normal mt-5 leading-[150%]">
              Immerse yourself in a culinary journey & indulge in the vibrant
              tastes of India
            </p>
          </div>
          <div className="w-full absolute overflow-hidden mark opacity-0">
            <ScrollText></ScrollText>
          </div>
        </div>

        <Image
          data-speed=".5"
          id="rice"
          alt="rice"
          src="/Home/rice.png"
          priority
          width={3000}
          height={3000}
          className={`${
            device == "mobile"
              ? "w-1/2 top-[15%] -left-28"
              : device === "tablet"
              ? "w-[35%] top-36 -left-[20%]"
              : "w-[30%] top-56 -left-20"
          } max-w-[510px] absolute lg:-left-14 -left-20 rotate-[210deg] parallax z-0 load`}
        ></Image>
        <Image
          priority
          data-speed="1"
          id="biriyani"
          alt="biriyani"
          src="/Home/biriyani.png"
          width={3000}
          height={3000}
          className={` ${
            device == "mobile"
              ? "w-1/2 top-56  -right-28"
              : device === "tablet"
              ? "w-[35%] top-36 -right-[20%]"
              : "w-[30%] top-56  -right-20"
          } max-w-[510px] absolute  lg:-right-14 rotate-[210deg] parallax load`}
        ></Image>
        <Image
          priority
          data-speed={device == "mobile" ? "0.2" : "0.5"}
          id="kebab"
          alt="kebab"
          src="/Home/kebab.png"
          width={3000}
          height={3000}
          className={`${
            device == "mobile"
              ? "w-1/2 top-1/2 -left-[50%]"
              : device === "tablet"
              ? "w-[35%] top-56 -left-[35%]"
              : "w-[25%] top-56 -left-[35%]"
          } max-w-[340px] absolute rotate-[210deg] parallax`}
        ></Image>
        <Image
          priority
          data-speed=".8"
          id="tandoori"
          alt="tandoori"
          src="/Home/tandoori.png"
          width={3000}
          height={3000}
          className={`${
            device == "mobile"
              ? "w-1/2 top-1/2 -right-[50%]"
              : device === "tablet"
              ? "w-[35%]  -right-[35%] top-56"
              : "w-[25%] -right-[35%] top-56"
          } max-w-[340px] absolute  rotate-[210deg] parallax`}
        ></Image>
        <Image
          priority
          data-speed={device == "mobile" ? "0.1" : "1"}
          id="naan"
          alt="naan"
          src="/Home/naan.png"
          width={3000}
          height={3000}
          className={` ${
            device == "mobile"
              ? "w-1/2  -bottom-[30%]"
              : device === "tablet"
              ? "w-[35%]  -bottom-[50%]"
              : " w-[25%]  -bottom-[50%]"
          } max-w-[340px] absolute right-[5%] rotate-[210deg] parallax z-10`}
        ></Image>
        {device == "desktop" || device === "tablet" ? (
          <div
            id="yellow"
            className=" w-[300px] h-auto aspect-square absolute -bottom-[100%] top-0 m-auto bg-yellow rounded-full right-0 left-0 mx-auto overflow-hidden"
          >
            <div className=" text w-full h-full  bg-[url('/Home/text.svg')] bg-no-repeat bg-center bg-[length:80%_auto] opacity-0"></div>
          </div>
        ) : (
          <div
            id="yellow"
            className=" w-[300px] h-auto aspect-square absolute -bottom-[100%] top-0 m-auto bg-yellow rounded-full right-0 left-0 mx-auto overflow-hidden"
          >
            <div className=" text w-full h-full  bg-[url('/Home/text.svg')] bg-no-repeat bg-center bg-[length:80%_auto] opacity-0"></div>
          </div>
        )}
      </section>
    </>
  );
}
