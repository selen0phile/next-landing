"use client";

import React, { useRef } from "react";
import { getSize } from "./util";
import { useScreenWidth } from "./hooks";
import { useSwipeable } from "react-swipeable";
import { motion, useTransform, useScroll } from "framer-motion";
export const pcBreakPoint = 1024;

export default function Carousel() {
  const targetRef = useRef(null);
  const data = [
    {
      text1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      text2: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://gcdnb.pbrd.co/images/MDGHm6dtAL3P.png",
      backgroundColor: "#FFE4BE",
      textColor: "black",
    },
    {
      text1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      text2: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://gcdnb.pbrd.co/images/MDGHm6dtAL3P.png",
      backgroundColor: "#0000ff88",
      textColor: "white",
    },
    {
      text1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      text2: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://gcdnb.pbrd.co/images/MDGHm6dtAL3P.png",
      backgroundColor: "#00ff0088",
      textColor: "black",
    },
  ];
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section
      id="carousel"
      ref={targetRef}
      className="relative h-[300vh] lg:h-[300vh] lg:ml-[100px] lg:mr-[100px] ml-[20px] mr-[20px]"
    >
      <div className="sticky top-20 lg:top-0 flex h-[700px] lg:h-[100vh] items-center overflow-x-scroll overflow-y-hidden no-scrollbar">
        <motion.div
          style={{ x }}
          className="flex lg:w-[3600px] w-[1200px] gap-4"
        >
          {data.map((card, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 250 }}
                whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Card
                  index={index}
                  key={index}
                  text1={card.text1}
                  text2={card.text2}
                  image={card.image}
                  backgroundColor={card.backgroundColor}
                  textColor={card.textColor}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function Card({
  index,
  text1,
  text2,
  image,
  backgroundColor,
  textColor,
}) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      className={`h-[471px] lg:h-[570px] block lg:flex justify-between relative p-[20px] rounded-[20px] lg:p-[80px] lg:w-[1150px] w-full flex-shrink-0`}
    >
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          right: "20px",
          display: "flex",
          justifyContent: "space-between",
          width: "75px",
        }}
      >
        {/* {data.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            style={{
              cursor: "pointer",
              borderRadius: "50%",
              border: "1px solid black",
              height: "13px",
              width: "13px",
              backgroundColor: i === index ? "black" : "white",
            }}
          ></div>
        ))} */}
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="text-[12px] lg:text-[16px] max-w-[600px] leading-[14px] lg:leading-[24px] mb-[30px]">
          {text1}
        </div>
        <div className="flex lg:hidden h-full items-center justify-center mb-[30px] ">
          <img
            className="w-[132px] lg:w-[306px] h-[169px] lg:h-[391px]"
            src="https://gcdnb.pbrd.co/images/MDGHm6dtAL3P.png"
          />
        </div>
        <div className="text-[36px] w-[250px] lg:w-full lg:text-[80px] font-[410] leading-[40px] lg:leading-[80px] tracking-[-0.72px] lg:tracking-[-1.6px] max-w-[700px]">
          {text2}
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center h-full">
        <img
          className="w-[132px] lg:w-[306px] h-[169px] lg:h-[391px]"
          src={image}
        />
      </div>
    </div>
  );
}
