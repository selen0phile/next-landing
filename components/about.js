"use client";

import React, { useContext, useEffect } from "react";
import { getSize } from "./util";
import { pcBreakPoint } from "./Carousel";
import { useScreenWidth } from "./hooks";
import SineWaveAnimation from "./sinewave";
import Reveal from "./Reveal";
import SineWave from "./Sine";
import { GlobalStateContext } from "./GlobalContext";
import { useInView } from "react-intersection-observer";

const About = () => {
  const screenWidth = useScreenWidth();
  return (
    <div className="ml-[20px] md:ml-[50px] md:mr-[50px] mr-[20px] lg:ml-[100px] lg:mr-[100px]">
      <div className="max-w-[769px]">
        <Reveal>
          <div className="text-[22px] md:text-[30px] lg:text-[48px] leading-[28px] md:leading-[46px] lg:leading-[65px] tracking-[-1.36px] md:tracking-[-2px] lg:tracking-[-4px]">
            The Stanford Ling Sound Test is an innovative digital platform
            designed for early detection of hearing impairment in children.
          </div>
        </Reveal>
      </div>
      <SineWave />
      <Reveal width="100%">
        <div className="w-full flex md:flex lg:block justify-center">
          <div className="max-w-[238px] lg:max-w-[717px] text-[13px] md:text-[17px] lg:text-[20px] lg:float-right ">
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
          <div className="text-[22px] lg:text-[48px] font-[410] leading-[36px] lg:leading-[65px] tracking-[-1.36px] lg:tracking-[-4px] md:text-[30px] md:leading-[50px] md:tracking-[-2px]">
            A project by
          </div>
          <Reveal>
            <div className="md:text-[50px] text-[36px] lg:text-[64px] font-[800] leading-[36px] md:leading-[50px] lg:leading-[65px] tracking-[-2.24px] md:tracking-[-2px] lg:tracking-[-4px] mb-[30px] lg:mb-[60px] text-[#8C1515]">
              Stanford University
            </div>
          </Reveal>
          <Reveal>
            <div className="text-[13px] lg:text-[20px] leading-[18px] lg:leading-[29px] md:text-[17px] md:leading-[19px]">
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
