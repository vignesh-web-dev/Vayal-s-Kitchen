"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const ScrollText = ({ number }) => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const r = 100;
    const adjustJank = 4;
    const scrollElems = document.querySelectorAll(".container h1");
    scrollElems.forEach((obj, i) => {
      var d = obj.offsetWidth;
      var parent = obj.parentElement;
      var clone = obj.cloneNode(true);
      parent.appendChild(clone);
      gsap.set(parent.parentElement, { width: d });

      adjustTween(obj, d);
    });
    function adjustTween(obj, d) {
      let progress = 0;
      if (obj.tween) {
        progress = obj.tween.progress();
        obj.tween.kill();
      }
      var t = d / r;

      obj.tween = gsap
        .fromTo(
          obj.parentElement,
          {
            x: 0,
          },
          {
            duration: t,
            x: "-" + (d + adjustJank),
            ease: "linear",
            repeat: -1,
          }
        )
        .progress(progress); 
    }
  });
  return (
    <div>
      {number == "1" ? (
        <div className=" whitespace-nowrap	text-nowrap container">
          <h1 className=" tracking-[10px] text-6xl sm:text-[100px] inline-block text-green">
            •&nbsp;Vayal’s kitchen&nbsp;•
            <span className=" strokeGreen">
              &nbsp;Best Indian experience&nbsp;
            </span>
          </h1>
        </div>
      ) : (
        <>
          <div className="whitespace-nowrap	 text-nowrap container">
            <h1 className=" tracking-[10px] text-6xl sm:text-[100px] inline-block ml-[70px]">
              Vayal’s kitchen
              <span className=" stroke ml-[70px]">Best Indian experience</span>
            </h1>
          </div>
          <div className="whitespace-nowrap	text-nowrap container my-14">
            <h1 className=" tracking-[10px] text-6xl sm:text-[100px] inline-block text-nowrap relative -left-40 ml-[70px]">
              Best Indian experience
              <span className=" stroke ml-[70px]">Vayal’s kitchen</span>
            </h1>
          </div>
          <div className="whitespace-nowrap	 text-nowrap container">
            <h1 className=" tracking-[10px] text-6xl sm:text-[100px] inline-block text-nowrap ml-[70px]">
              Vayal’s kitchen
              <span className=" stroke ml-[70px]">Best Indian experience</span>
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default ScrollText;
