"use client";
import React, { useEffect } from "react";
// import { loadingPage, deviceState, popupState } from "./Redux/store/homeSlice";
import { popupState } from "@/app/Redux/store/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const Popup = () => {
  const popupAppear = useSelector((state) => state.home.popup);
  const dispatch = useDispatch();

  return (
    <>
      {popupAppear == true ? (
        <div className=" fixed w-screen h-screen bg-[#000000B2] z-[3000] top-0 flex justify-center items-center pb-40 md:pb-0">
          <div className=" bg-yellow w-full max-w-[887px] rounded-xl border-[10px] border-white relative py-14 px-8 mx-5">
            <div
              onClick={() => {
                dispatch(popupState(false));
              }}
              className=" absolute top-3 md:top-5 right-3 md:right-5 rounded-full w-10 md:w-[50px] h-10 md:h-[50px] aspect-square cursor-pointer"
            >
              <Image
                alt=""
                src="/cancel.svg"
                height={3000}
                width={3000}
                priority
                className=" w-full h-auto"
              ></Image>
            </div>
            <div className=" w-full h-full flex flex-col gap-y-5 md:flex-row justify-between items-center">
              <div className=" text-black">
                <h1 className="text-5xl md:text-[100px] uppercase leading-[48px] md:leading-[100px]">
                  Call Us to <br />
                  <span className=" text-white">Order Now</span>
                </h1>
                <a
                  href="tel:+1480-401-2206"
                  type="tel"
                  target="_blank"
                  className="flex flex-row gap-3 items-center mt-5"
                >
                  <Image
                    alt=""
                    src="/Contact/call.svg"
                    width={3000}
                    height={3000}
                    className="w-5 h-5 aspect-square"
                  ></Image>
                  <p className=" font-work text-xl font-semibold underline">
                    480 - 401 - 2206
                  </p>
                </a>
                <a
                  type="tel"
                  target="_blank"
                  href="tel:+1602-561-6505"
                  className="flex flex-row gap-3 items-center mt-3"
                >
                  <Image
                    alt=""
                    src="/Contact/call.svg"
                    width={3000}
                    height={3000}
                    priority
                    className="w-5 h-5 aspect-square"
                  ></Image>
                  <p className=" font-work text-xl font-semibold underline">
                    602 - 561 - 6505
                  </p>
                </a>
              </div>
              <Image
                alt=""
                src="/popup-call.svg"
                height={3000}
                width={3000}
                priority
                className=" h-full w-auto max-w-[160px] max-h-[160px] md:max-h-full md:max-w-fit"
              ></Image>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Popup;
