"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hubspot from "./hubspot";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/Components/navbar/nav-bar";
import Footer from "@/Components/Footer/page";

const page = () => {
  const [innerWidth, setInnerWidth] = useState();

  useEffect(() => {
    setInnerWidth(window.innerWidth);

    AOS.init();
  }, []);
  return (
    <div className="">
      <NavBar width={innerWidth}></NavBar>
      <section
        className={`bg-white overflow-hidden ${
          innerWidth < 800 ? "pt-36" : ""
        }`}
      >
        <div className=" max-w-7xl mx-auto px-2 md:px-4 lg:px-8">
          <div className=" flex flex-col md:flex-row gap-10 lg:gap-20 sm:pt-16">
            <div
              data-aos="fade-left"
              data-aos-offset="-300"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-out-sine"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className=" w-full md:w-1/2 max-w-[645px] min-h-[30rem] rounded-[30px] overflow-hidden mx-auto"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13311.267267423327!2d-112.0809932!3d33.4801197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6f133ff90265%3A0x7aa8a87a2c064bb!2sVayal&#39;s%20Indian%20kitchen%20(RESTAURANT)!5e0!3m2!1sen!2sin!4v1709288871616!5m2!1sen!2sin"
                width="600"
                height="450"
                className=" h-[500px] md:h-full w-full mx-auto"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="async"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="-300"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-out-sine"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className=" w-full md:w-1/2"
            >
              <h1 className=" text-[100px] text-yellow leading-[100px] mb-2">
                Get in touch
              </h1>
              <Hubspot
                portalId="44223205"
                formId="93563ad0-6744-498e-b5b5-5e47abdc756b"
              ></Hubspot>
            </div>
          </div>
          <div className=" my-10 md:my-[60px] flex flex-col sm:flex-row gap-10 lg:gap-20">
            <div className=" w-full sm:w-1/2 flex flex-col lg:flex-row justify-between items-start">
              <div className="">
                <a
                  href="tel:+1480-401-2206"
                  type="tel"
                  target="_blank"
                  data-aos="fade-left"
                  data-aos-offset="-300"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className="flex flex-row gap-3 items-center"
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
                  data-aos="fade-left"
                  data-aos-offset="-300"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className="flex flex-row gap-3 items-center mt-3"
                >
                  <Image
                    alt=""
                    src="/Contact/call.svg"
                    width={3000}
                    height={3000}
                    className="w-5 h-5 aspect-square"
                  ></Image>
                  <p className=" font-work text-xl font-semibold underline">
                    602 - 561 - 6505
                  </p>
                </a>
                <div
                  data-aos="fade-left"
                  data-aos-offset="-300"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className=" mt-5 flex flex-row gap-5 justify-start items-center"
                >
                  <Link
                    href="https://www.instagram.com/vayalskitchen/"
                    target="blank"
                  >
                    <Image
                      alt=""
                      src="/Contact/instagram.svg"
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
                      src="/Contact/whatsapp.svg"
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
                      src="/Contact/facebook.svg"
                      width={3000}
                      height={3000}
                      className="w-10 h-10 aspect-square"
                    ></Image>
                  </Link>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="-300"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-out-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className=" mt-10 sm:mt-0"
              >
                <p className=" text-xl text-green font-work font-semibold">
                  507 w Thomas road <br /> Phoenix AZ <br />
                  85013
                </p>
              </div>
            </div>
            <div className=" w-full sm:w-1/2">
              <div
                data-aos="fade-left"
                data-aos-offset="-300"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-out-sine"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                className=" flex gap-1 justify-start items-center"
              >
                <Image
                  src="/Contact/time.svg"
                  width={3000}
                  height={3000}
                  className=" w-6 h-6 aspect-square"
                ></Image>
                <p className=" font-work text-xl font-bold">Working Hours:</p>
              </div>

              <div className=" flex flex-col lg:flex-row justify-start items-start gap-5">
                <p
                  data-aos="fade-left"
                  data-aos-offset="-300"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className=" font-work text-sm font-normal mt-2"
                >
                  Friday: 11AM –1:45 PM, 5 – 8:45 PM <br />
                  Saturday: 11:30 AM –1:45 PM, 5 –8:45 PM <br />
                  Sunday: 11AM – 1:45 PM, 5 – 8:30 PM <br />
                  <span className=" text-[#D51F0F]">Monday: Closed</span>
                </p>
                <p
                  data-aos="fade-left"
                  data-aos-offset="-300"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-sine"
                  data-aos-mirror="false"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center"
                  className=" font-work text-sm font-normal mt-2"
                >
                  Tuesday: 11 AM – 1:45 PM, 5 – 8:45 PM
                  <br />
                  Wednesday: 11AM – 1:45 PM, 5 – 8:45 PM
                  <br />
                  Thursday: 11 AM – 1:45 PM, 5 – 8:45 PM
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default page;
