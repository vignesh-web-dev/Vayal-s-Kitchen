"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import { useGSAP } from "@gsap/react";
import { UseDispatch, useSelector } from "react-redux";

const HomeSectionFour = ({ dev }) => {
  const comp = useRef(null);
  const device = useSelector((state) => state.home.device);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    const tl = gsap.timeline();
    let mm = gsap.matchMedia();
    if (window.document) {
      let parent = document.getElementById("parentfour");
      var tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          scrub: 0.5,
          start: device === "mobile" ? "0%" : "0%",
          end: device === "mobile" ? "20% top" : "20% top",
          markers: false,
        },
        onComplete: () => ScrollTrigger.refresh(),
      });
      var tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          scrub: true,
          start: "0%",
          markers: false,
        },
      });
      let main = document.getElementById("main");
      if (device == "mobile") {
        tl2.to(
          main,
          {
            borderRadius: "60px",
            ease: "none",
          },
          0
        );
        tl2.to(parent, {
          backgroundColor: "#ffffff",
          ease: "none",
          duration: 10,
        });
      } else if (device === "desktop" || device == "tablet") {
        tl2.to(
          parent,
          {
            backgroundColor: "#ffffff",
            ease: "none",
          },
          0
        );
        tl2.to(
          main,
          {
            width: "85%",
            marginBottom: "140px",
            ease: "none",
            duration: 10,
          },
          0
        );
      }
      let ele = document.getElementsByClassName("parallaxfour");
      tl4.to(ele, {
        y: (i, target) =>
          -(ScrollTrigger.maxScroll(window) / 8) * target.dataset.speed,
        ease: "none",
      });
    }
  }, [device]);
  return (
    <section
      id="parentfour"
      className=" bg-lightgreen relative overflow-hidden"
    >
      <div
        className={`mx-auto flex justify-center relative overflow-hidden ${
          dev === "mobile" ? " mb-20" : "rounded-[60px]  pt-36"
        }`}
      >
        <div id="main" className=" overflow-hidden h-full w-full relative">
          <Image
            alt="billing"
            priority
            src={
              dev == "mobile"
                ? "/Home/sectionFour/billingMobile.png"
                : "/Home/sectionFour/billing.png"
            }
            width={3000}
            height={3000}
            className={` h-auto relative max-h-[980px] z-10 w-full ${
              dev === "mobile" ? "" : "rounded-[60px]"
            }`}
          ></Image>
          <div
            className={`absolute h-full w-full z-20 bg-[#00000066] ${
              dev === "mobile" ? " mb-20" : "rounded-[60px]"
            }`}
          ></div>
          <div className="absolute bottom-0 my-auto md:bottom-[60px] w-full z-30 flex flex-col justify-center items-center">
            <h1 className=" text-6xl md:text-[80px] text-white text-center">
              Wanna know more? <br />
              <span className="strokeWhite">Talk to us today</span>
            </h1>
            <Link
              href="/contact-us"
              className={`${dev === "mobile" ? "mb-5" : "rounded-[60px]"}`}
            >
              <button className="bg-yellow uppercase px-10 py-5 rounded-full text-4xl md:text-[40px] text-white leading-6	 md:leading-[40px] mt-5">
                contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        alt=""
        data-speed=".05"
        src="/Home/sectionFour/spice.png"
        width={3000}
        height={3000}
        className=" w-full max-w-[500px] absolute -bottom-5 -left-20 h-auto parallaxfour"
      ></Image>
      <Image
        alt=""
        data-speed=".1"
        src="/Home/sectionFour/chilli.png"
        width={3000}
        height={3000}
        className=" w-full max-w-[266px] absolute top-36 -left-16 h-auto parallaxfour"
      ></Image>
      <Image
        alt=""
        data-speed=".05"
        src="/Home/sectionFour/chilicut.png"
        width={3000}
        height={3000}
        className=" w-full max-w-[370px] absolute my-auto top-0 bottom-0 -right-60 h-auto parallaxfour"
      ></Image>
    </section>
  );
};

export default HomeSectionFour;
