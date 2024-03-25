"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import data from "./data.json";
import { useGSAP } from "@gsap/react";
import { UseDispatch, useSelector } from "react-redux";

const HomeSectionTwo = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const right = useRef(null);
  const device = useSelector((state) => state.home.device);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    ScrollTrigger.refresh();
    if (window.document) {
      let parent = document.getElementsByClassName("triggerParent")[0];
      let child = document.getElementsByClassName("right")[0];
      mm.add("(min-width: 1024px)", () => {
        gsap.to(child, {
          ease: "none",
          scrollTrigger: {
            trigger: parent,
            pin: child,
            start: "top top",
            scrub: true,
            end: "bottom bottom",
            markers: false,
          },
        });
      });
    }
  }, [device]);
  return (
    <section ref={ref} className=" bg-white pb-16">
      <div className="desktop w-full flex flex-col lg:flex-row gap-5 max-w-7xl mx-auto px-5 triggerParent">
        <div
          ref={right}
          className="right lg:h-screen flex flex-col justify-start lg:justify-start items-start lg:items-start text-black w-full lg:w-1/2 pt-10 "
        >
          <h1 className="text-7xl md:text-[100px] lg:max-w-[540px] hidden lg:block">
            Why Dine
            <br />
            With Us
          </h1>
          <h1 className=" text-5xl md:text-[100px] lg:max-w-[540px] lg:hidden">
            Why Dine With Us
          </h1>
          <p className="text-xl md:text-2xl leading-[150%] font-work lg:max-w-[540px] mt-5">
            Whether you're a connoisseur of Indian cuisine or trying it for the
            first time, a memorable experience awaits at Vayal's Kitchen. From
            our flavorful dishes to our warm ambiance, every detail is designed
            to immerse you in the vibrant flavors and hospitality of India.
          </p>
        </div>
        <div className="left h-full lg:w-1/2 pt-10  grid grid-cols-1 min-[900px]:grid-cols-2 lg:grid-cols-1 gap-20 md:gap-[100px]">
          {data &&
            data.map((item, index) => (
              <div
                key={index + "sectionTwo"}
                className=" flex flex-row gap-5 md:gap-7"
              >
                <div className=" w-24 h-24 md:w-[150px] md:h-[150px] rounded-full aspect-square flex justify-center items-center p-2 md:p-6 bg-lightgreen">
                  <Image
                    alt={item.title}
                    src={"/Home/sectiontwo/" + item.image}
                    width={3000}
                    height={3000}
                    className=" w-full h-auto"
                  ></Image>
                </div>
                <div className=" max-w-[320px] flex justify-center items-start flex-col">
                  <p className="text-3xl md:text-[40px] font-bold text-green font-work leading-[100%]">
                    {item.title}
                  </p>
                  <p className="text-base font-work font-normal text-black mt-5 leading-[170%]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSectionTwo;
