"use client";

import React from "react";
import { getSize } from "./util";
import { useScreenWidth } from "./hooks";
import { Box } from "@chakra-ui/react";

const Hero = () => {
  const screenWidth = useScreenWidth();
  return (
    <div
      className="h-[602px] lg:h-[920px]"
      style={{
        position: "relative",
        textAlign: "center",
      }}
    >
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div
          className="w-[251px] lg:w-[1010px]"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>
            <h1 className="text-[40px] tracking-[-0.8px] leading-[47px] lg:text-[96px] lg:leading-[114px] lg:tracking-[-1.92px]">
              Joyful & Accessible
            </h1>
            <h1 className="text-[40px] tracking-[-0.8px] leading-[47px] lg:text-[96px] lg:leading-[114px] lg:tracking-[-1.92px] mb-[36px] lg:mb-[70px]">
              Hearing Tests for All Kids
            </h1>
            <p className="text-[13px] lg:text-[20px]">
              The First Digital Ling Six Test for Early Detection of Hearing
              Impairment and
            </p>
            <p className="text-[13px] lg:text-[20px] mb-[23px] lg:mb-[48px]">
              Monitoring Children's Hearing Health
            </p>
            <button className="readBioButton">Get Started →</button>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, right: 0, zIndex: -1 }}>
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
