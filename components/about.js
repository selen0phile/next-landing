"use client";

import React from "react";
import { getSize } from "./util";
import { pcBreakPoint } from "./Carousel";
import { useScreenWidth } from "./hooks";
import SineWaveAnimation from "./sinewave";
import Reveal from "./Reveal";

const About = () => {
  const screenWidth = useScreenWidth();
  return (
    <div className="ml-[20px] mr-[20px] lg:ml-[100px] lg:mr-[100px]">
      <div className="max-w-[769px]">
        <Reveal>
          <div className="text-[22px] lg:text-[48px] leading-[28px] lg:leading-[65px] tracking-[-1.36px] lg:tracking-[-4px]">
            The Stanford Ling Sound Test is an innovative digital platform
            designed for early detection of hearing impairment in children.
          </div>
        </Reveal>
      </div>
      <div className="h-[200px]"></div>
      <Reveal width="100%">
        <div className="w-full flex lg:block justify-center">
          <div className="max-w-[238px] lg:max-w-[717px] text-[13px] lg:text-[20px] lg:float-right">
            It transforms traditional hearing assessments into engaging,
            game-like experiences. Parents and Speech-Language Pathologists can
            administer the test remotely, track hearing health over time through
            interactive dashboards, and gain valuable insights. Currently in
            early development, the app aims to complement traditional methods
            and is built by Piech Lab at Stanford, in collaboration with various
            Stanford groups. User feedback is crucial for its ongoing
            improvement.
          </div>
        </div>
      </Reveal>

      <div className="block lg:flex justify-between items-center w-full pt-[200px]">
        <div className="max-w-full lg:max-w-[50%] text-[36px] lg:text-[65px] leading-[36px] lg:leading-[65px] mb-[50px] lg:mb-0">
          <div className="text-[22px] lg:text-[48px] font-[410] leading-[36px] lg:leading-[65px] tracking-[-1.36px] lg:tracking-[-4px]">
            A project by
          </div>
          <Reveal>
            <div className="text-[36px] lg:text-[64px] font-[800] leading-[36px] lg:leading-[65px] tracking-[-2.24px] lg:tracking-[-4px] mb-[30px] lg:mb-[60px] text-[#8C1515]">
              Stanford University
            </div>
          </Reveal>
          <Reveal>
            <div className="text-[13px] lg:text-[20px] leading-[18px] lg:leading-[29px]">
              Built by Piech Lab in Stanford Artificial Intelligence Lab, with
              collaborators from Stanford's HCI Gorup, Ear Institute, and
              Graduate School of Education.
            </div>
          </Reveal>
        </div>

        <Reveal width="100%">
          <div
            style={{
              display: "flex",
              height: getSize(530, 354, screenWidth),
              width:
                screenWidth > pcBreakPoint
                  ? getSize(530, 354, screenWidth)
                  : "100%",
              background: "#8C1515",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "9px",
            }}
          >
            <img
              style={{
                width: getSize(360, 240, screenWidth),
              }}
              src="/stanford.png"
            ></img>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
