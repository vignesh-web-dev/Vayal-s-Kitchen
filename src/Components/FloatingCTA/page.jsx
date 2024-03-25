"use client";
import Link from "next/link";
import React from "react";
import { popupState } from "@/app/Redux/store/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import "./floating.css";

const Floating = () => {
  const dispatch = useDispatch();
  return (
    <div
      id="floatingText"
      className=" fixed z-[1001] bottom-6 mx-auto right-0 left-0 w-[calc(100vw-1rem)] md:w-[16rem] floating"
    >
      <div className=" flex flex-grow gap-x-1.5 rounded-xl bg-green p-1.5 text-white shadow-xl md:flex-grow-0 cursor-pointer">
        <div
          onClick={(e) => {
            e.preventDefault();
            dispatch(popupState(true));
          }}
          className=" text-white text-xl py-5 w-full text-center border tracking-wide border-white rounded-lg hover:bg-white hover:text-green"
        >
          Order online
        </div>
        <Link
          target="blank"
          href="https://www.grubhub.com/restaurant/vayals-indian-kitchen-507-w-thomas-rd-phoenix/7584032"
          className=" text-white text-xl  py-5 w-full text-center border tracking-wide border-white rounded-lg hover:bg-white hover:text-green"
        >
          Grubhub
        </Link>
      </div>
    </div>
  );
};

export default Floating;
