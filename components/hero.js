"use client";

import { HiOutlineArrowRight } from "react-icons/hi";
import React from "react";
import { getSize } from "./util";
import { useScreenWidth } from "./hooks";
import { Box } from "@chakra-ui/react";
import Reveal from "./Reveal";
import Button from "./Button";

const Hero = () => {
  const screenWidth = useScreenWidth();
  return (
    <div className="flex justify-center items-center relative text-center ">
      <img
        src="/spiral.svg"
        alt="spiral"
        className="h-[252px] lg:h-[469px]"
        style={{
          position: "absolute",
          top: 0,
          left: -10,
          // width: "506.022px",
          zIndex: -1,
        }}
      />
      <div className="w-[251px] lg:w-[1100px] flex flex-col justify-center h-full items-center mt-[230px]">
        <div className="mb-[30px]">
          <Reveal width="100%">
            <h1 className="text-center text-[40px] tracking-[-2px] leading-[57px] lg:text-[96px] lg:leading-[114px] lg:tracking-[-6px] font-bold">
              Joyful & Accessible
            </h1>
          </Reveal>
          <Reveal width="100%">
            <h1 className="text-center text-[40px] tracking-[-2px] leading-[57px] lg:text-[96px] lg:leading-[114px] lg:tracking-[-6px] mb-[36px] lg:mb-[70px] font-bold">
              Hearing Tests for All Kids
            </h1>
          </Reveal>
          <Reveal width="100%">
            <p className="text-[13px] lg:text-[20px]">
              The First Digital Ling Six Test for Early Detection of Hearing
              Impairment and
            </p>
          </Reveal>
          <Reveal width="100%">
            <p className="text-[13px] lg:text-[20px] mb-[23px] lg:mb-[48px]">
              Monitoring Children's Hearing Health
            </p>
          </Reveal>
        </div>
        <Reveal>
          <Button text="Get Started" />
        </Reveal>
      </div>
      <div style={{ position: "absolute", bottom: -160, right: 0, zIndex: -1 }}>
        <img
          src="/wave.png"
          alt="wave"
          className="h-[204px] lg:h-[372px]"
          style={
            {
              // width: "653px",
            }
          }
        />
      </div>
    </div>
  );
};

export default Hero;
