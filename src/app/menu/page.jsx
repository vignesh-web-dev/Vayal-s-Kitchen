"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "./data.json";
import Type from "./type";
import "./menu.css";
import NavBar from "@/Components/navbar/nav-bar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Footer from "@/Components/Footer/page";
const page = () => {
  const [device, setDevice] = useState("");
  const [innerWidth, setInnerWidth] = useState();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    AOS.init();
    setInnerWidth(window.innerWidth);
    if (window.innerWidth > 800) {
      setDevice("mobile");
    }
  }, []);
  const dishes = data.menu;
  const sub1 = data.subcategory1;
  const sub2 = data.subcategory2;
  const sub3 = data.subcategory3;
  let length = 0;
  let firstrow = 0;
  let secondrow = 0;
  return (
    <>
      <div className=" bg-[url('/MenuPage/bg.png')] bg-repeat-y bg-cover bg-top">
        <NavBar width={innerWidth}></NavBar>
        <section className=" w-full overflow-hidden">
          <div
            className={`max-w-7xl w-full mx-auto ${
              device == "mobile" ? " pt-0" : " pt-36"
            }`}
          >
            <h1 className=" text-[100px] leading-[100px] text-yellow text-center">
              Our Menu
            </h1>
            <div className=" flex flex-col min-[550px]:flex-row flex-wrap justify-start min-[550px]:justify-center items-center mt-5 gap-8 mx-5">
              <p className=" uppercase text-2xl text-[#D51F0F] leading-[26px]">
                V* - Vegan option on request
              </p>
              <p className=" uppercase text-2xl text-[#46AF4E] leading-[26px]">
                V - Vegan
              </p>
              <p className=" uppercase text-2xl text-[#1378FF] leading-[26px]">
                GF - Gluten Free
              </p>
            </div>
            <div className=" mx-5 mt-20 divide-y divide-dashed divide-grey menupage">
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => {
                  console.log(index);
                  setTabIndex(index);
                }}
                preload="true"
                className="flex flex-col "
              >
                <TabList className=" flex flex-row gap-y-3 gap-x-5 flex-wrap  justify-center items-center mb-10">
                  {dishes &&
                    dishes.map((item, index) => {
                      return (
                        <Tab
                          key={index}
                          className=" flex flex-col justify-center items-center gap-5 cursor-pointer font-medium text-2xl px-5 py-2 rounded-full"
                        >
                          {item.category}
                        </Tab>
                      );
                    })}
                </TabList>

                {dishes &&
                  dishes.map((item, index) => {
                    length = item.items.length;
                    firstrow = Math.ceil(length / 2);
                    secondrow = length - firstrow;
                    return (
                      <TabPanel key={index}>
                        <div key={index + "dishes"} className=" pb-[70px] ">
                          <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-20">
                            <div className=" flex flex-col gap-5">
                              {item.items &&
                                item.items.map(
                                  (item, index) =>
                                    index < firstrow && (
                                      <div
                                        data-aos="fade-left"
                                        data-aos-offset={
                                          device == "mobile" ? "0" : "-300"
                                        }
                                        data-aos-delay="0"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-out-sine"
                                        data-aos-mirror="false"
                                        data-aos-once="true"
                                        data-aos-anchor-placement={
                                          device == "mobile"
                                            ? "bottom-bottom"
                                            : "top-center"
                                        }
                                        key={index + "menuLeft"}
                                        className=" flex flex-row justify-between gap-5 items-center w-full"
                                      >
                                        <div>
                                          <div className=" flex flex-row justify-between items-center gap-2 w-fit">
                                            <p className=" w-full text-2xl font-work font-semibold">
                                              {item.name}
                                            </p>
                                            {item.type != "" && (
                                              <Type item={item}></Type>
                                            )}
                                          </div>
                                          <p className=" text-black text-base font-work font-normal">
                                            {item.content}
                                          </p>
                                        </div>
                                        <p className=" font-work text-2xl font-semibold">
                                          {item.price}
                                        </p>
                                      </div>
                                    )
                                )}
                            </div>
                            <div className=" flex flex-col gap-5">
                              {item.items &&
                                item.items.map(
                                  (item, index) =>
                                    index >= firstrow && (
                                      <div
                                        data-aos="fade-left"
                                        data-aos-offset={
                                          device == "mobile" ? "0" : "-300"
                                        }
                                        data-aos-delay="0"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-out-sine"
                                        data-aos-mirror="false"
                                        data-aos-once="true"
                                        data-aos-anchor-placement={
                                          device == "mobile"
                                            ? "bottom-bottom"
                                            : "top-center"
                                        }
                                        key={index + "menu"}
                                        className=" flex flex-row justify-between gap-5 items-center w-full"
                                      >
                                        <div>
                                          <div className=" flex flex-row justify-between items-center gap-2 w-fit">
                                            <p className=" w-full text-2xl font-work font-semibold">
                                              {item.name}
                                            </p>
                                            {item.type != "" && (
                                              <Type item={item}></Type>
                                            )}
                                          </div>
                                          <p className=" text-black text-base font-work font-normal">
                                            {item.content}
                                          </p>
                                        </div>
                                        <p className=" font-work text-2xl font-semibold">
                                          {item.price}
                                        </p>
                                      </div>
                                    )
                                )}
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    );
                  })}
              </Tabs>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default page;
