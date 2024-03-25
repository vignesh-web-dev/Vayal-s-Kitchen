"use client";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { isMobile, isTablet } from "react-device-detect";
import "./navbar.css";
import Link from "next/link";
import { popupState } from "@/app/Redux/store/homeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar() {
  const [visible, setVisiblity] = useState(true);
  const popupAppear = useSelector((state) => state.home.popup);

  const [inViewport, setInViewport] = useState(false);

  const [passedThreshold, setPassedThreshold] = useState(false);

  const [line, setLine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setPassedThreshold(true);
      } else if (scrollPosition > 0) {
        setVisiblity(true);
      } else {
        setPassedThreshold(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [popupAppear]);

  useEffect(() => {
    const lenis = new Lenis({
      syncTouch: false,
    });
    // lenis.stop();
    // console.log(popupAppear);
    // if (popupAppear) {
    //   document.body.style.overflow = "hidden";
    //   lenis.stop();
    // } else {
    //   document.body.style.overflow = "visible";
    //   lenis.start();
    // }

    lenis.on("scroll", (e) => {
      const scrollPosition = window.scrollY;
      if (e.direction === -1) {
        // debugger;
        // if (inViewport) {
        //   setVisiblity(false);
        //   // console.log('Element is in the viewport!');
        // } else {
        setVisiblity(true);
        // console.log('Element is not in the viewport!');
        // }
      } else if (scrollPosition > 0) {
        setVisiblity(false);
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    // gsap.ticker.add((time)=>{
    //   lenis.raf(time * 1000)
    // })

    // gsap.ticker.lagSmoothing(0)

    // handleTargetDiv

    const scrollToHashedElement = () => {
      const { hash } = window.location;
      if (hash) {
        setTimeout(() => {
          const targetId = hash.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const targetOffset =
              targetElement.getBoundingClientRect().top +
              window.pageYOffset -
              70;
            lenis.scrollTo(hash, { offset: -50, duration: 1 });
          }
        }, 1000);
      }
    };

    // Scroll to the target element when the hash changes
    const handleHashChange = () => {
      scrollToHashedElement();
    };

    // Initial scroll to the target element on page load
    scrollToHashedElement();

    // Event listener for hash change
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange); // Listen for hash changes
    };
  }, [inViewport]);

  const [innerWidth, setInnerWidth] = useState();

  const nav = useRef();
  const mobileNavSection = useRef();
  const menu = useRef(null);
  const backdrop = useRef(null);
  const menuitems = useRef(null);
  const fill = useRef(null);
  const [device, setDevice] = useState(null);
  const pathname = usePathname();
  const [className, setClassName] = useState("close");

  const handleResize = (props) => {
    setInnerWidth(props.target.innerWidth);
    if (props.target.innerWidth >= 950) {
      const element = nav?.current;
      if (element != null) {
        const e =
          element.querySelectorAll(".active")[0] &&
          element.querySelectorAll(".active")[0]?.parentElement;
        const centerX = e && e.offsetLeft;
        const width = e && e.offsetWidth;
        // setDotInitialPosition(centerX - 75 + width / 2);
      }
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      mobileNavSection.current &&
        mobileNavSection?.current.classList.add("active");

      if (window.screenY > 100) {
        console.log("more moved");
      }
    } else {
      mobileNavSection.current &&
        mobileNavSection?.current.classList.remove("active");
    }
  };

  const handleScroll2 = () => {
    if (scrollDirection === "up") {
      mobileNavSection.current &&
        mobileNavSection?.current.classList.remove("hide2");
    } else {
      if (window.scrollY > 100) {
        // Window is scrolled more than 100px
        // console.log("Window scrolled more than 100 pixels");
        mobileNavSection.current &&
          mobileNavSection?.current.classList.add("hide2");
      } else {
        mobileNavSection.current &&
          mobileNavSection?.current.classList.remove("hide2");
      }
    }
  };

  const [prevScrollPos, setPrevScrollPos] = useState(null);
  const [scrollDirection, setScrollDirection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll2);
    };
  }, [scrollDirection]);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    if (isMobile || isTablet) {
      setDevice(isMobile ? "mobile" : "tablet");
    } else {
      setDevice("desktop");
    }
    return () => {};
  }, []);

  useEffect(() => {
    if (innerWidth >= 950) {
      const element = nav.current;
      const e =
        element?.querySelectorAll(".active")[0] &&
        element?.querySelectorAll(".active")[0].parentElement;
      if (e != undefined) {
        const centerX = e.offsetLeft;
        const width = e.offsetWidth;
        // setDotInitialPosition(centerX - 75 + width / 2);
      } else {
        // setDotInitialPosition(-1000);
      }
    }

    return () => {};
  }, [device, pathname]);
  useEffect(() => {
    var root = document.getElementsByTagName("html")[0];
    if (className == "open") {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      root.classList.add("overflowClass");
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "visible";
      root.classList.remove("overflowClass");
    }

    return () => {};
  }, [className]);

  const styles = {
    // transform: `translateX(${dotInitialPosition}px)`,
  };

  // const handleToggle = () => {
  //   setClassName(className === "close" ? "open" : "close");
  //   if (className === "close") {
  //     // document.getElementsByTagName("body")[0].style.overflow = "hidden";
  //     menu.current.style.display = "block";
  //     // .style.transform = "translate(0px, 0px)";
  //   } else {
  //     // document.getElementsByTagName("body")[0].style.overflow = "unset";
  //     setTimeout(() => {
  //       menu.current.style.display = "none";
  //     }, 550);

  //     // fill.current.style.transform = "scale(0,1)";
  //   }
  //   if (fill.current.classList.contains("show")) {
  //     fill.current.classList.remove("show");
  //     fill.current.classList.add("hide");
  //     backdrop.current.classList.remove("showback");
  //     backdrop.current.classList.add("hideback");
  //     menuitems.current.classList.remove("showmenu");
  //     menuitems.current.classList.add("hidemenu");
  //   } else {
  //     fill.current.classList.remove("hide");
  //     fill.current.classList.add("show");
  //     backdrop.current.classList.remove("hideback");
  //     backdrop.current.classList.add("showback");
  //     menuitems.current.classList.remove("hidemenu");
  //     menuitems.current.classList.add("showmenu");
  //   }
  // };
  const handleToggle = () => {
    setClassName(className === "close" ? "open" : "close");
    var root = document.getElementsByTagName("html")[0];
    if (mobileNavSection.current.classList.contains("menu")) {
      mobileNavSection.current.classList.remove("menu");
      menu.current.classList.remove("innermenu");
      // document.getElementsByTagName("body")[0].style.overflow = "unset";
      // root.classList.remove("overflowClass");
    } else {
      mobileNavSection.current.classList.add("menu");
      menu.current.classList.add("innermenu");
      // document.getElementsByTagName("body")[0].style.overflow = "hidden";
      // root.classList.add("overflowClass");
    }
  };

  const idscroll = () => {
    handleToggle();
    document.getElementById("catering").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {innerWidth < 800 ? (
        //   <nav
        //   ref={nav}
        //   className={`navbar ${
        //     passedThreshold ? "active" : ""
        //   } fixed w-full z-[1000] transition-all duration-500 lg:px-8 md:px-4 px-2 py-5 ${
        //     visible
        //       ? "top-0 pointer-events-auto"
        //       : "-top-20 pointer-events-none"
        //   } ${line ? "border-b border-b-darl-black bg-white" : ""}`}
        // >
        // <section
        //   // ref={mobileNavSection}
        //   className={`z-[1000] lg:px-8 md:px-4 px-2 py-5 flex flex-row items-center justify-between w-full mobile-nav relative`}
        // >
        //   {/* <div> */}
        //   <Link href="/" className="">
        //     <Image
        //       src="/vayals.svg"
        //       width={1000}
        //       height={1000}
        //       alt="logo"
        //       className=" w-[70px] h-auto"
        //     />
        //   </Link>
        //   <div
        //     className={` ${className} icon-toogle flex justify-center items-center mr-6 absolute right-2 top-0 bottom-0 z-[1000] my-auto`}
        //     onClick={handleToggle}
        //   >
        //     <button className=" w-6 h-6 aspect-square button menu">
        //       <span></span>
        //       <span></span>
        //     </button>
        //   </div>
        //   <div ref={menu} className=" menu hidden">
        //     <div
        //       ref={backdrop}
        //       className="backdrop"
        //       style={{ opacity: 1 }}
        //     ></div>
        //     <div
        //       ref={fill}
        //       className="menu-fill"
        //       style={{
        //         translate: "none",
        //         rotate: "none",
        //         scale: "none",
        //         transform: "scale(0,1)",
        //       }}
        //     ></div>
        //     <div ref={menuitems} className="flex  menu-items">
        //       <div className=" relative w-[90%] flex justify-start ml-auto bg-green text-white">
        //         <ul className="flex flex-col gap-5 justify-center items-start text-white ml-10">
        //           <li className=" text-5xl">
        //             <Link href="/" className=" text-left">
        //               Home
        //             </Link>
        //           </li>
        //           <li className=" text-5xl">
        //             <Link href="/menu">Menu</Link>
        //           </li>
        //           <li className=" text-5xl">
        //             <Link href="/about-us">About Us</Link>
        //           </li>
        //           <li className=" text-5xl">
        //             {pathname == "/" ? (
        //               <Link
        //                 onClick={(e) => {
        //                   if (pathname == "/") {
        //                     idscroll("catering");
        //                   }
        //                 }}
        //                 href="#catering"
        //                 scroll={false}
        //               >
        //                 Catering
        //               </Link>
        //             ) : (
        //               <Link href="/#catering" scroll={false}>
        //                 Catering
        //               </Link>
        //             )}
        //           </li>
        //           <li className="text-5xl">
        //             <Link href="/contact-us">Contact</Link>
        //           </li>
        //         </ul>
        //       </div>
        //     </div>
        //   </div>
        //   {/* </div> */}
        // </section>
        <div
          ref={nav}
          className={`navbar ${
            passedThreshold ? "active" : ""
          } fixed w-full z-[1500] transition-all duration-500 ${
            visible
              ? "top-0 pointer-events-auto"
              : "-top-36 pointer-events-none"
          }`}
        >
          <section
            ref={mobileNavSection}
            className={` bg-lightgreen z-[1500] lg:px-8 md:px-4 px-2 flex flex-col items-center justify-between w-full mobile-nav relative py-5`}
          >
            <div className="relative top-0 left-0 w-full flex flex-row items-center justify-between z-[1500] ">
              <Link href="/" className="logoimage">
                <Image
                  src="/vayals.svg"
                  width={1000}
                  height={1000}
                  alt="logo"
                  className=" w-[70px] h-auto"
                />
              </Link>
              <p className="logotext text-4xl">Vayal’s Kitchen</p>
              <div className="  w-6 h-6 aspect-square mr-6"></div>
              <div
                className={` ${className} icon-toogle flex justify-center items-center absolute right-2 top-0 bottom-0 z-[1000] my-auto`}
                onClick={handleToggle}
              >
                <div className="w-fit h-auto aspect-square p-2 bg-white rounded-xl">
                  <button className=" w-6 h-6 aspect-square button menuspan">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            {/* menu-items col-span-12 translate-y-10 pb-20 md:self-end xl:col-span-10 xl:col-start-2 xl:translate-y-0 xl:self-start xl:pb-0 */}
            <div
              ref={menuitems}
              className="h-full w-full relative z-[1500] px-6 opacity-0 max-h-0 invisible menuitems"
            >
              <ul className="flex flex-col gap-5 justify-center items-start text-white pt-10">
                <li className=" text-5xl">
                  <Link href="/" className=" text-left">
                    Home
                  </Link>
                </li>
                <li className=" text-5xl">
                  <Link href="/menu">Menu</Link>
                </li>
                <li className=" text-5xl">
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className=" text-5xl">
                  {pathname == "/" ? (
                    <Link
                      onClick={(e) => {
                        if (pathname == "/") {
                          idscroll("catering");
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
                <li className="text-5xl">
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
              <div className=" mt-10">
                <p className=" text-white text-xl mb-5">Stay Connected</p>
                <div className=" mt-5 flex flex-row gap-5 justify-start items-center">
                  <Link
                    href="https://www.instagram.com/vayalskitchen/"
                    target="blank"
                  >
                    <Image
                      alt=""
                      src="/Contact/instagramWhite.svg"
                      width={3000}
                      height={3000}
                      className="w-10 h-10 aspect-square"
                    ></Image>
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=16025616505&text&type=phone_number&app_absent=0"
                    target="blank"
                  >
                    <Image
                      alt=""
                      src="/Contact/whatsappWhite.svg"
                      width={3000}
                      height={3000}
                      className="w-10 h-10 aspect-square"
                    ></Image>
                  </Link>
                  <Link
                    href="https://www.facebook.com/people/Vayals-Indian-Kitchen/100077552566092/?mibextid=ZbWKwL"
                    target="blank"
                  >
                    <Image
                      alt=""
                      src="/Contact/facebookWhite.svg"
                      width={3000}
                      height={3000}
                      className="w-10 h-10 aspect-square"
                    ></Image>
                  </Link>
                </div>
              </div>
            </div>
            <div
              ref={menu}
              className="absolute top-0 left-0 z-[1400] min-h-0 w-full bg-yellow"
            ></div>
          </section>
        </div>
      ) : innerWidth === undefined ? (
        <></>
      ) : (
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
            <div></div>
            {/* <Link
              href="#"
              className="text-xl px-5 py-3 rounded-full bg-green text-white"
            >
              Order Online
            </Link> */}
          </div>
        </section>
      )}
    </>
  );
}
