"use client";

import React from "react";
import { getSize } from "./util";
import { useScreenWidth } from "./hooks";
export const pcBreakPoint = 1024;

export default function Carousel() {
  const screenWidth = useScreenWidth();
  return (
    <div className="h-[471px] lg:h-[570px] block lg:flex justify-between relative bg-[#FFE4BE] ml-[20px] mr-[20px] p-[20px] rounded-[20px] lg:ml-[100px] lg:mr-[100px] lg:p-[80px]">
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          right: "50px",
          display: "flex",
          justifyContent: "space-between",
          width: "75px",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            border: "1px solid black",
            height: "13px",
            width: "13px",
          }}
        ></div>
        <div
          style={{
            borderRadius: "50%",
            border: "1px solid black",
            height: "13px",
            width: "13px",
          }}
        ></div>
        <div
          style={{
            borderRadius: "50%",
            border: "1px solid black",
            height: "13px",
            width: "13px",
          }}
        ></div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="text-[11px] lg:text-[16px] max-w-[600px] leading-[14px] lg:leading-[24px] mb-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </div>
        <div className="flex lg:hidden h-full items-center justify-center mb-[30px]">
          <img
            className="w-[132px] lg:w-[306px] h-[169px] lg:h-[391px]"
            src="https://gcdnb.pbrd.co/images/MDGHm6dtAL3P.png"
          />
        </div>
        <div className="text-[36px] lg:text-[80px] font-[410] leading-[40px] lg:leading-[80px] tracking-[-0.72px] lg:tracking-[-1.6px] max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center h-full">
        <img
          className="w-[132px] lg:w-[306px] h-[169px] lg:h-[391px]"
          src="https://gcdnb.pbrd.co/images/MDGHm6dtAL3P.png"
        />
      </div>
    </div>
  );
}
