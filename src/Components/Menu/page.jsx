"use client";
import React, { useEffect, useState } from "react";
import { tabsList, starter, meat, vegan, desserts, drinks } from "./data";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./menu.css";
import Image from "next/image";
import Link from "next/link";
import TabSvg from "../TabSvg/page";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import data from "./data.json";
import BlurredUpImage from "../custom-image";

const Menu = ({ dev }) => {
  gsap.registerPlugin(ScrollTrigger);
  const device = useSelector((state) => state.home.device);

  const [tabIndex, setTabIndex] = useState(0);
  const [menus, setMenus] = useState(data.menu);
  useGSAP(() => {
    if (window.document) {
      let parent = document.getElementById("parentMenu");
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          scrub: 0.1,
          start: "0%",
          markers: false,
        },
      });
      let ele = document.getElementsByClassName("parallaxmenu");
      tl.to(ele, {
        y: (i, target) =>
          -(ScrollTrigger.maxScroll(window) / 6) * target.dataset.speed,
        ease: "none",
      });
    }
  });
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const element = document.getElementById("list")?.children[0];
      const middleOfScreen = window.scrollY + window.innerHeight / 2;
      const bottomOfScreen = window.scrollY + window.innerHeight;
      if (element != undefined) {
        const elementRect = element && element.getBoundingClientRect();
        const elementTop = elementRect.top + window.scrollY;
        const elementBottom = elementRect.bottom + window.scrollY;

        if (elementTop < middleOfScreen && elementBottom > middleOfScreen) {
          element.classList.add("listanim");
        }
        if (elementTop > bottomOfScreen) {
          element.classList.remove("listanim");
        }
      }
    });
  }, []);
  const onSelect = (e) => {
    setTabIndex(e);
  };

  return (
    <section
      id="parentMenu"
      className={` bg-white overflow-hidden bg-[url('/Menu/background.png')] bg-no-repeat bg-cover bg-center relative ${
        device == "mobile" ? "py-[60px]" : "pt-[120px] pb-[60px]"
      }`}
    >
      {device != "mobile" && (
        <>
          <Image
            alt=""
            src="/Menu/topBg.png"
            width={3000}
            height={3000}
            className=" absolute -top-[0%] min-[400px]:-top-[5%] min-[940px]:-top-[15%] -left-[23%] w-1/2 max-w-[820px]"
          ></Image>
          <Image
            alt=""
            src="/Menu/topBgRight.png"
            width={3000}
            height={3000}
            className=" absolute -top-[0%] min-[400px]:-top-[5%] min-[940px]:-top-[15%] -right-[23%] w-1/2 max-w-[820px]"
          ></Image>
        </>
      )}
      <div className=" max-w-7xl mx-auto relative z-20">
        <div>
          <h1 className="md:text-7xl text-5xl md:text-[100px] text-yellow text-center uppercase">
            menu highlights
          </h1>
          <h2 className=" uppercase text-4xl sm:text-[60px] tracking-widest md:tracking-wide text-yellow strokeYellowOne text-center mt-5 relative w-fit mx-auto">
            chef’s specials
            <span className=" absolute w-14 h-10 bg-[url('/Menu/cap.svg')] bg-[length:32px_auto] sm:bg-[length:48px_auto] bg-no-repeat bg-center aspect-square -top-4 sm:-top-8 -left-9 sm:-left-10 -rotate-[52deg]"></span>
          </h2>
        </div>
        <div className=" mt-[60px] w-full">
          <Tabs
            preload="true"
            selectedIndex={tabIndex}
            onSelect={(index) => {
              console.log("");
            }}
            className="flex flex-col divide-y divide-dashed divide-grey"
          >
            <div className=" w-[90%] max-w-[870px] mx-auto">
              <TabList className=" flex flex-row gap-3 sm:gap-10 flex-wrap lg:gap-[100px] justify-center items-center mb-10 min-h-40">
                <Swiper
                  slidesPerView="auto"
                  spaceBetween={20}
                  freeMode={true}
                  grabCursor="true"
                  modules={[FreeMode]}
                  id="list"
                  className="mySwiper"
                >
                  {menus &&
                    menus.map((item, index) => (
                      <div key={index + "slider"}>
                        <SwiperSlide key={index}>
                          <Tab
                            onClick={(e) => onSelect(index)}
                            key={index}
                            className=" flex flex-col justify-center items-center gap-5 cursor-pointer"
                          >
                            <div className=" w-20 h-20 aspect-square rounded-full bg-grey round flex justify-center items-center overflow-hidden">
                              {/* <TabSvg ></TabSvg> */}
                              <Image
                                src={item.image}
                                width={3000}
                                height={3000}
                                className="w-full h-auto scale-[1.8]"
                              ></Image>
                            </div>
                            {dev != "mobile" && (
                              <p className=" text-grey text-base font-work font-normal uppercase hidden opacity-0 max-w-[200px]">
                                {item.category}
                              </p>
                            )}
                          </Tab>
                        </SwiperSlide>
                      </div>
                    ))}
                </Swiper>
              </TabList>
              {dev == "mobile" && (
                <p className=" block sm:hidden text-center font-work font-semibold uppercase text-base mb-5 max-w-[70%] mx-auto">
                  {menus[tabIndex].category}
                </p>
              )}
            </div>

            <div className=" pt-10  px-5 min-h-[30rem] md:min-h-[50rem] min-[940px]:min-h-[30rem]">
              {menus &&
                menus.map((item, index) => (
                  <TabPanel>
                    <div className=" w-full grid grid-cols-1 min-[940px]:grid-cols-2 gap-10 justify-between">
                      {item.items &&
                        item.items.map((items, index) => {
                          if (index > 5) {
                            return false;
                          }
                          return (
                            <div
                              key={index + "list"}
                              className="flex gap-5 overflow-hidden"
                            >
                              <div className="min-w-[50px] sm:min-w-[100px] h-[50px] sm:h-[100px] aspect-square overflow-hidden rounded-full">
                                <BlurredUpImage
                                  classNameMain=" w-full h-auto rounded-full"
                                  imageSrc={items.image}
                                ></BlurredUpImage>
                              </div>
                              <div className=" flex flex-col justify-center items-center w-full">
                                <div className=" flex flex-row justify-between items-center gap-2 w-full">
                                  <p className=" w-full text-yellow text-xl sm:text-[30px]">
                                    {items.name}
                                  </p>
                                  <div className=" min-w-[20px] w-full h-[1px] border-t border-grey border-dashed"></div>
                                  <p className="text-xl text-green">
                                    {items.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </TabPanel>
                ))}
            </div>
          </Tabs>
        </div>
        <div className="mt-20 flex justify-center items-center">
          <Link
            href="/menu"
            className=" uppercase text-4xl px-10 py-5 bg-green text-white rounded-full"
          >
            see full menu
          </Link>
        </div>
      </div>
      <Image
        alt=""
        data-speed=".1"
        src="/Menu/clove.png"
        width={3000}
        height={3000}
        className=" absolute bottom-[10%] -left-[7%] max-w-[245px] parallaxmenu lg:block hidden"
      ></Image>
      <Image
        alt=""
        data-speed=".1"
        src="/Menu/chilli.png"
        width={3000}
        height={3000}
        className=" absolute -bottom-[5%] left-[15%] max-w-[220px] parallaxmenu lg:block hidden"
      ></Image>
      <Image
        alt=""
        data-speed=".1"
        src="/Menu/cinnamon.png"
        width={3000}
        height={3000}
        className=" absolute -bottom-[5%] right-[20%] max-w-[220px] parallaxmenu lg:block hidden"
      ></Image>
      <Image
        alt=""
        data-speed=".1"
        src="/Menu/onion.png"
        width={3000}
        height={3000}
        className=" absolute bottom-[0%] right-[0%] max-w-[220px] parallaxmenu lg:block hidden"
      ></Image>
    </section>
  );
};

export default Menu;
