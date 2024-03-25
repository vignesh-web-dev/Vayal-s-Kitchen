"use client";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { isMobile, isTablet } from "react-device-detect";
import NavBar from "@/Components/navbar/nav-bar";
import Sectionone from "@/Components/HomeSection/page";
import HomeSectionTwo from "@/Components/HomeSectionTwo/page";
import HomeSectionThree from "@/Components/HomeSectionThree/page";
import HomeSectionFour from "@/Components/HomeSectionFour/page";
import HomeSectionFive from "@/Components/HomeSectionFive/page";
import Footer from "@/Components/Footer/page";
import Image from "next/image";
import Loader from "@/Components/Loader/page";
import Menu from "@/Components/Menu/page";
import Reviews from "@/Components/Reviews/page";
import { loadingPage, deviceState, popupState } from "./Redux/store/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const Home = () => {
  const device = useSelector((state) => state.home.device);
  const loading = useSelector((state) => state.home.loading);
  const [innerWidth, setInnerWidth] = useState();
  const [imagesLoaded, setLoadedImages] = useState(false);
  const dispatch = useDispatch();
  const [hashname, setHashName] = useState("");
  // }

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setHashName(window.location.hash);
    if (isMobile) {
      if (isMobile) {
        dispatch(deviceState("mobile"));
      }
    } else if (isTablet) {
      dispatch(deviceState("tablet"));
    } else {
      dispatch(deviceState("desktop"));
    }
  });
  useEffect(() => {
    hashname;
    if (hashname != "") {
      let r = hashname.split("#")[1];
      const element = document.getElementById(r);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth",
          });
        }, 1000);
      }
    }
  }, [hashname]);

  useEffect(() => {
    onLoad();
    if (imagesLoaded) {
      console.log("downloaded");
      dispatch(loadingPage(false));
    }
  }, [imagesLoaded]);
  const onLoad = () => {
    const allImages = document.querySelectorAll(".load");
    const imageLoadStatus = Array.from(allImages).map((img, index) => {
      return img.complete;
    });
    console.log(imageLoadStatus);
    const allLoaded = imageLoadStatus.every((status) => status);
    if (!allLoaded) {
      setTimeout(onLoad, 100);
    } else {
      setTimeout(() => {
        console.log("all images are loaded");
        setLoadedImages(true);
      }, 1000);
      return;
    }
  };

  return (
    <main className=" text-black top  overflow-hidden">
      <>
        {loading && <Loader></Loader>}

        <div className={`absolute top-0 mx-auto w-full z-[1500]`}>
          <NavBar width={innerWidth}></NavBar>
        </div>
        <Sectionone dev={device}></Sectionone>
        <HomeSectionTwo dev={device}></HomeSectionTwo>
        <HomeSectionThree dev={device}></HomeSectionThree>
        <HomeSectionFour dev={device}></HomeSectionFour>
        <Menu dev={device}></Menu>
        <HomeSectionFive dev={device}></HomeSectionFive>
        <Reviews dev={device}></Reviews>
        <Footer></Footer>
      </>
      {/* )} */}
    </main>
  );
};

export default Home;
