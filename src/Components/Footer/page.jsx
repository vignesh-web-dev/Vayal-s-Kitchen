"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import ScrollText from "../ScrollingText/page";
import { usePathname } from "next/navigation";
import { popupState } from "@/app/Redux/store/homeSlice";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("true");
          document.getElementById("floatingText").classList.add("hideFloating");
        } else {
          console.log("false");
          document
            .getElementById("floatingText")
            .classList.remove("hideFloating");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);
    const target = document.querySelector("#sectionFooter");
    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section id="sectionFooter" className=" bg-black overflow-hidden">
      <div className=" mt-[30px] mb-[60px]">
        <ScrollText number="1"></ScrollText>
      </div>

      <div className="w-[95%] m-auto rounded-t-[40px] bg-lightgreen p-10 md:p-[60px] flex flex-col lg:flex-row justify-between lg:items-center gap-10">
        <div className=" max-w-fit">
          <Image
            alt="logo"
            src="/vayals.svg"
            width={3000}
            height={3000}
            className=" max-w-[265px]"
          ></Image>
          <h1 className=" text-[40px] tracking-[2px] text-center">
            Vayal’s kitchen
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-20 md:gap-[100px]">
          <div className=" flex gap-5 flex-col text-[50px] leading-[50px]">
            <Link href="/about-us">About Us</Link>
            <div
              onClick={() => dispatch(popupState(true))}
              className=" text-yellow cursor-pointer"
            >
              Order food
            </div>
            <Link href="/menu">Our Menu</Link>
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
            <Link href="contact-us" className=" text-green">
              Contact Us
            </Link>
          </div>
          <div className="underline underline-offset-4">
            <div className="flex flex-col gap-5 font-work font-semibold">
              <a
                target="_blank"
                type="email"
                href="mailto:vayalskitchen@gmail.com"
                className=" flex flex-row gap-2"
              >
                <Image
                  alt=""
                  src="/Home/Footer/mail.svg"
                  className=" w-6 h-auto"
                  height={3000}
                  width={3000}
                ></Image>
                <p className="text-xl ">vayalskitchen@gmail.com</p>
              </a>
              <a
                target="_blank"
                type="tel"
                href="tel:+1(456)89058"
                className=" flex flex-row gap-2"
              >
                <Image
                  alt=""
                  src="/Home/Footer/call.svg"
                  className=" w-6 h-auto"
                  height={3000}
                  width={3000}
                ></Image>
                <p className="text-xl ">+1 (456) 89058</p>
              </a>
              <Link
                href="https://www.facebook.com/people/Vayals-Indian-Kitchen/100077552566092/?mibextid=ZbWKwL"
                target="blank"
                className=" flex flex-row gap-2"
              >
                <Image
                  alt=""
                  src="/Home/Footer/messenger.svg"
                  className=" w-6 h-auto"
                  height={3000}
                  width={3000}
                ></Image>
                <p className="text-xl ">@vayals_official</p>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/vayalskitchen"
                className=" flex flex-row gap-2"
              >
                <Image
                  alt=""
                  src="/Home/Footer/instagram.svg"
                  className=" w-6 h-auto"
                  height={3000}
                  width={3000}
                ></Image>
                <p className="text-xl ">@vayals_kitchen</p>
              </Link>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=16025616505&text&type=phone_number&app_absent=0"
                className=" flex flex-row gap-2"
              >
                <Image
                  alt=""
                  src="/Home/Footer/whatsapp.svg"
                  className=" w-6 h-auto"
                  height={3000}
                  width={3000}
                ></Image>
                <p className="text-xl ">+1 (602) 561-6505</p>
              </a>
            </div>
            <a
              href="https://maps.app.goo.gl/eJDqKT7i3qHuhMHE9"
              target="_blank"
              className=" flex flex-row gap-5 mt-5"
            >
              <Image
                alt=""
                src="/Home/Footer/location.svg"
                width={3000}
                height={3000}
                className=" w-12 h-auto"
              ></Image>
              <p className=" text-xl font-work font-semibold max-w-[170px]">
                507 w Thomas road Phoenix AZ 85013
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
