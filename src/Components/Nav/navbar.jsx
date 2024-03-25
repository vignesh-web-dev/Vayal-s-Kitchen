"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { isMobile, isTablet } from "react-device-detect";
import { useDispatch } from "react-redux";
import { deviceState } from "@/app/Redux/store/homeSlice";
import "./navbar.css";

const Navbar = ({ width }) => {
  //   const [innerWidth, setInnerWidth] = useState();
  //   useEffect(() => {
  //     setInnerWidth(window.innerWidth);
  //   }, []);
  const innerWidth = width;
  const pathname = usePathname();
  const nav = useRef();
  const mobileNavSection = useRef();
  const menu = useRef(null);
  const backdrop = useRef(null);
  const menuitems = useRef(null);
  const fill = useRef(null);
  const [className, setClassName] = useState("close");

  const handleToggle = () => {
    setClassName(className === "close" ? "open" : "close");
    if (className === "close") {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      menu.current.style.display = "block";
      // .style.transform = "translate(0px, 0px)";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "unset";
      setTimeout(() => {
        menu.current.style.display = "none";
      }, 550);

      // fill.current.style.transform = "scale(0,1)";
    }
    if (fill.current.classList.contains("show")) {
      fill.current.classList.remove("show");
      fill.current.classList.add("hide");
      backdrop.current.classList.remove("showback");
      backdrop.current.classList.add("hideback");
      menuitems.current.classList.remove("showmenu");
      menuitems.current.classList.add("hidemenu");
    } else {
      fill.current.classList.remove("hide");
      fill.current.classList.add("show");
      backdrop.current.classList.remove("hideback");
      backdrop.current.classList.add("showback");
      menuitems.current.classList.remove("hidemenu");
      menuitems.current.classList.add("showmenu");
    }
  };
  return (
    <div>
      {innerWidth && innerWidth > 800 ? (
        <section
          className={`navbar 
   w-full transition-all duration-500 lg:px-8 md:px-4 px-2 py-5 top-0 pointer-events-auto relative`}
        >
          <div className="flex flex-row items-center justify-between mx-auto max-w-7xl">
            <Link href="/">
              <Image
                src="/vayals.svg"
                width={1000}
                height={1000}
                alt="logo"
                className=" w-[100px] h-auto"
              />
            </Link>
            <ul className="flex flex-row gap-5 justify-center items-center text-black">
              <li className=" text-2xl">
                <Link href="/">Home</Link>
              </li>
              <li className=" text-2xl">
                <Link href="/menu">Menu</Link>
              </li>
              <li className=" text-2xl">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className=" text-2xl">
                {pathname == "/" ? (
                  <Link
                    onClick={(e) => {
                      if (pathname == "/") {
                        document
                          .getElementById("catering")
                          .scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    href="#catering"
                    scroll={false}
                  >
                    Catering
                  </Link>
                ) : (
                  <Link href="/#catering" scroll={false}>
                    Catering
                  </Link>
                )}
              </li>
              <li className=" text-2xl">
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
            {/* <div></div> */}
            <Link
              href="#"
              className="text-xl px-5 py-3 rounded-full bg-green text-white"
            >
              Order Online
            </Link>
          </div>
        </section>
      ) : innerWidth === undefined ? (
        <></>
      ) : (
        <section
          className={` z-[9999] lg:px-8 md:px-4 px-2 py-5 flex flex-row items-center justify-between w-full mobile-nav top-0 pointer-events-auto`}
        >
          {/* <div> */}
          <Link href="/" className="">
            <Image
              alt="logo"
              src="/vayals.svg"
              height={3000}
              width={3000}
              className="h-12 w-auto"
            ></Image>
          </Link>
          <div
            className={` ${className} icon-toogle flex justify-center items-center mr-6 relative z-[10000000]`}
            onClick={handleToggle}
          >
            <button className=" w-6 h-6 aspect-square button menu">
              <span></span>
              <span></span>
            </button>
          </div>
          <div ref={menu} className=" menu hidden">
            <div
              ref={backdrop}
              className="backdrop"
              style={{ opacity: 1 }}
            ></div>
            <div
              ref={fill}
              className="menu-fill"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "scale(0,1)",
              }}
            ></div>
            <div
              ref={menuitems}
              className="flex justify-center landscape:flex-row flex-col min-w-[800px] max-w-[800px] items-start text-black landscape:mt-16 portrait:mt-28 relative z-50 pl-9 pr-7 menu-items"
            >
              <div className=" relative portrait:-top-28">
                <div className="text-[#8d9ba6] text-base font-semibold font-proxima mb-2">
                  Menu
                </div>
                <div className=" font-proxima font-medium text-black text-2xl py-1">
                  <Link href="/" onClick={handleToggle}>
                    Home
                  </Link>
                </div>
                <div className=" font-proxima font-medium text-black text-2xl py-1">
                  <Link href="/about-us" onClick={handleToggle}>
                    About Us
                  </Link>
                </div>
                <div className=" font-proxima font-medium text-black text-2xl py-1">
                  <Link href="/services" onClick={handleToggle}>
                    Services
                  </Link>
                </div>
                <div className=" font-proxima font-medium text-black text-2xl py-1">
                  <Link href="/contact-us" onClick={handleToggle}>
                    Contact Us
                  </Link>
                </div>
                <div className=" font-proxima font-medium text-red text-2xl py-1">
                  <Link href="/careers" onClick={handleToggle}>
                    Careers
                  </Link>
                </div>
              </div>
              <div className=" relative portrait:-top-28 portrait:mt-12">
                <p className="text-[#8d9ba6] font-semibold text-base font-proxima mb-2">
                  Get in touch
                </p>
                <a
                  href="mailto:contact@onehubshoppy.com"
                  className=" underline underline-offset-[6px] font-proxima font-medium text-black text-base py-1"
                  onClick={handleToggle}
                >
                  support@kazadra.com
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
      )}
    </div>
  );
};

export default Navbar;
