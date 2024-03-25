"use client";
import React from "react";
import Image from "next/image";
import { default as useProgressiveImg } from "./useProgressiveImage";

export default function BlurredUpImage({ imageSrc, classNameMain }) {
  const [src, { blur }] = useProgressiveImg(
    `${imageSrc}-lq.png`,
    `${imageSrc}.png`
  );
  return (
    <Image
      alt=""
      width={blur ? 20 : 5000}
      height={blur ? 20 : 5000}
      src={src}
      className={classNameMain}
      style={{
        filter: blur ? "blur(10px)" : "none",
        transition: blur ? "none" : "filter 0.2s ease-out",
      }}
    />
  );
}
