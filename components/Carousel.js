"use client";

import React from "react";
import { getSize } from "./util";
import { useScreenWidth } from "./hooks";
import { useSwipeable } from "react-swipeable";
export const pcBreakPoint = 1024;

export default function Carousel() {
  const screenWidth = useScreenWidth();
  const [index, setIndex] = React.useState(0);
  const handlers = useSwipeable({
    onSwipedRight: () => prevSlide(),
    onSwipedLeft: () => nextSlide(),
  });

  function nextSlide() {
    setIndex((index + 1) % data.length);
  }
  function prevSlide() {
    setIndex((index - 1 + data.length) % data.length);
  }
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
      backgroundColor: "red",
      textColor: "white",
    },
    {
      text1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      text2: "Lorem ipsum dolor sit amet, consectetur",
      image: "https://gcdnb.pbrd.co/images/MDGHm6dtAL3P.png",
      backgroundColor: "green",
      textColor: "white",
    },
  ];
  return (
    <div
      {...handlers}
      style={{
        backgroundColor: data[index].backgroundColor,
        color: data[index].textColor,
      }}
      onClick={nextSlide}
      className={`duration-500 h-[471px] lg:h-[570px] block lg:flex justify-between relative ml-[20px] mr-[20px] p-[20px] rounded-[20px] lg:ml-[100px] lg:mr-[100px] lg:p-[80px] text-[${data[index].textColor}]`}
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
        {data.map((_, i) => (
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
        ))}
      </div>

      <div className="flex flex-col justify-between">
        <div
          className="text-[11px] lg:text-[16px] max-w-[600px] leading-[14px] lg:leading-[24px] mb-[30px]"
          style={
            screenWidth < pcBreakPoint
              ? {
                  fontSize: getSize(16, 11, screenWidth),
                }
              : {}
          }
        >
          {data[index].text1}
        </div>
        <div className="flex lg:hidden h-full items-center justify-center mb-[30px]">
          <img
            className="w-[132px] lg:w-[306px] h-[169px] lg:h-[391px]"
            src="https://gcdnb.pbrd.co/images/MDGHm6dtAL3P.png"
          />
        </div>
        <div
          style={
            screenWidth < pcBreakPoint
              ? {
                  fontSize: getSize(80, 36, screenWidth),
                }
              : {}
          }
          className="text-[36px] lg:text-[80px] font-[410] leading-[40px] lg:leading-[80px] tracking-[-0.72px] lg:tracking-[-1.6px] max-w-[700px]"
        >
          {data[index].text2}
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
