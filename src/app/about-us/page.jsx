"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./about.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "@/Components/navbar/nav-bar";
import Footer from "@/Components/Footer/page";
import { useDispatch, useSelector } from "react-redux";
import { isMobile, isTablet } from "react-device-detect";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [device, setDevice] = useState("");
  const [innerWidth, setInnerWidth] = useState(null);

  useEffect(() => {
    if (isMobile || isTablet) {
      setDevice(isMobile ? "mobile" : "tablet");
    } else {
      setDevice("desktop");
    }
    return () => {};
  }, []);
  useEffect(() => {
    setInnerWidth(window.innerWidth);
    AOS.init();
    document.title = "Vayals • About Us";
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Vayals indians kitchen - About Us");
  }, []);
  useGSAP(() => {
    if (window.document) {
      let parent = document.getElementById("aboutparent");
      var tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          scrub: 1,
          start: "top top",
          end: "center top",
          markers: false,
        },
      });
      if (device == "mobile") {
        tl2.to(
          parent,
          {
            borderRadius: "0px 0px 100px 100px",
            duration: 1,
            ease: "power1.out",
          },
          0
        );
      } else {
        tl2.to(
          parent,
          {
            width: "90%",
            borderRadius: "0px 0px 100px 100px",
            duration: 1,
            ease: "power1.out",
          },
          0
        );
      }
    }
  }, [device]);
  return (
    <div className=" bg-[#000000]">
      <div id="aboutparent" className="bg  mx-auto w-full overflow-hidden">
        <NavBar width={innerWidth}></NavBar>
        <section className={`${innerWidth < 800 ? "pt-36" : ""}`}>
          <div className=" w-full  pb-20 px-2 md:px-4 lg:px-8 max-w-7xl overflow-hidden mx-auto flex flex-row gap-10">
            <div className="w-1/2  hidden md:block">
              <Image
                alt=""
                data-aos="slide-right"
                data-aos-offset="-500"
                data-aos-delay="0"
                data-aos-duration="500"
                data-aos-easing="ease-out-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                src="/About/left.png"
                width={3000}
                height={3000}
                className=" w-full h-auto  max-w-[535px]"
              ></Image>
            </div>
            <div className="w-full md:w-1/2">
              <div className=" md:max-w-[535px] mx-5 md:mx-0">
                <h1 className=" text-[100px] leading-[100px]">Our Story</h1>
                <Image
                  alt=""
                  data-aos="slide-left"
                  data-aos-offset="-500"
                  data-aos-delay="0"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  src="/About/left.png"
                  width={3000}
                  height={3000}
                  className=" w-full h-auto block md:hidden"
                ></Image>
                <p className=" text-xl font-work leading-[26px] mt-5">
                  At Vayal's Kitchen, we are passionate about bringing the
                  vibrant flavors of Indian cuisine to our customers. Our
                  journey began with a love for authentic recipes passed down
                  through generations, and a desire to share these culinary
                  treasures with the world.
                  <br />
                  Each dish we serve is a testament to our commitment to
                  quality, prepared with care and attention to detail using the
                  finest ingredients and traditional spices.
                </p>
                <Image
                  alt=""
                  data-aos="slide-left"
                  data-aos-offset="-500"
                  data-aos-delay="0"
                  data-aos-duration="500"
                  data-aos-easing="ease-out-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  src="/About/right.png"
                  width={3000}
                  height={3000}
                  className=" w-full h-auto mt-[60px]"
                ></Image>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className=" w-full max-w-7xl mx-auto py-[60px]">
          <h1 className="text-5xl sm:text-[100px] sm:leading-[100px] text-center text-yellow uppercase">
            Our Restaurant
          </h1>
          <h2 className="text-4xl sm:text-[70px] sm:leading-[70px] mt-2 text-center strokeYellowOne">
            Keep calm and dine with us
          </h2>
          <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-5 mx-5">
            <div>
              <Image
                alt=""
                src="/About/first.png"
                width={3000}
                height={3000}
                className=" aspect-square w-full h-auto rounded-[20px]"
              ></Image>
              <p className=" text-xl font-work text-center mt-[30px] text-white">
                Discover India's diverse flavors here, where our menu showcases
                authentic tastes from every region. Embark on a culinary journey
                like no other, from fiery spices to creamy curries.
              </p>
            </div>
            <div>
              <Image
                alt=""
                src="/About/second.jpg"
                width={3000}
                height={3000}
                className=" aspect-square w-full h-auto rounded-[20px]"
              ></Image>
              <p className=" text-xl font-work text-center mt-[30px] text-white">
                Delight awaits with attentive service and cozy ambiance.
                Experience unforgettable dining moments from the warm welcome to
                the flavorful fare.
              </p>
            </div>
            <div>
              <Image
                alt=""
                src="/About/third.jpg"
                width={3000}
                height={3000}
                className=" aspect-square w-full h-auto rounded-[20px]"
              ></Image>
              <p className=" text-xl font-work text-center mt-[30px] text-white">
                Experience the vibrancy of Indian festivals with events ranging
                from Diwali dinners to Holi brunches. Join us for unforgettable
                celebrations filled with delicious food and cherished memories.
              </p>
            </div>
          </div>
          <div className=" w-full flex justify-center items-center mt-[60px]">
            <Link
              href="/contact-us"
              className="px-10 py-5 uppercase bg-yellow w-fit rounded-full text-[40px] text-white mx-auto"
            >
              contact us
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;
