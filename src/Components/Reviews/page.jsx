"use client";
import React from "react";

import "./reviews.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import reviews from "./review.json";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Reviews = ({ dev }) => {
  const slides = dev == "desktop" ? "auto" : 1;
  const data = reviews.review;
  return (
    <section className=" md:pt-[60px] pt-8 bg-white">
      <div className=" max-w-7xl px-10 mx-auto flex flex-col justify-center items-center">
        <h1 className=" text-5xl md:text-[100px] leading-[100px] uppercase text-center">
          Word of <span className=" text-yellow">Mouth</span>
        </h1>
        <p className=" text-lg md:text-2xl md:mb-0 mb-5 font-work md:mt-2 leading-[150%] max-w-lg text-center">
          We are all ears. Tell us what you feel and share your experience with
          us.
        </p>
      </div>
      <Swiper
        slidesPerView={slides}
        centeredSlides={dev == "desktop" ? true : false}
        spaceBetween={dev == "desktop" ? 60 : 0}
        loop={true}
        grabCursor="true"
        autoplay={{
          delay: dev == "desktop" ? 3000 : 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper !pb-[60px] font-black"
      >
        {data &&
          data.map((item, index) => (
            <div
              key={index + item.name}
              className=" flex justify-center items-center"
            >
              <SwiperSlide className=" max-w-[890px] px-5">
                <div className="parDiv md:blur-[4px] grayscale rounded-3xl shadow p-8 md:p-12 my-5 md:my-10">
                  <div className=" flex md:flex-row flex-col gap-4 justify-start items-start md:items-center">
                    <Image
                      alt=""
                      src={item.image}
                      width={3000}
                      height={3000}
                      className="profileImage w-[80px] md:w-[120px] h-auto aspect-square rounded-full"
                    ></Image>
                    <div className=" flex flex-col justify-start items-start">
                      <p className=" lineUp text-3xl md:text-[32px] font-work font-bold ">
                        {item.name}
                      </p>
                      <p className=" lineUp text-grey text-xl md:text-[32px] font-normal font-work mt-3">
                        Our Yelp fan
                      </p>
                    </div>
                  </div>
                  <p className="paradown font-medium font-work text-xl md:text-3xl leading-[30px] mt-5 text-start">
                    {item.content}
                  </p>
                  <p className=" mt-5 font-work font-normal text-xl md:text-2xl text-start">
                    {item.date}
                    <span className=" text-yellow ml-3">Dined With Us</span>
                  </p>
                </div>
              </SwiperSlide>
            </div>
          ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
