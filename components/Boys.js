"use client";

import { useEffect, useState } from "react";
import { useScreenWidth } from "./hooks";
import { getSize } from "./util";
import { pcBreakPoint } from "./Carousel";
import Reveal from "./Reveal";
import Button from "./Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Boys() {
  const screenWidth = useScreenWidth();
  const [range, setRange] = useState([0, 1, 2]);
  useEffect(() => {
    if (screenWidth > pcBreakPoint) {
      setRange([0, 1, 2]);
    } else {
      setRange([0]);
    }
  }, [screenWidth]);

  const boys = [
    {
      name: "Lorem Ipsum Lorem",
      designation: "Designation",
      image: "/boy1.png",
      bio: "#",
    },
    {
      name: "Lorem Ipsum Lorem",
      designation: "Designation",
      image: "/boy2.png",
      bio: "#",
    },
    {
      name: "Lorem Ipsum Lorem",
      designation: "Designation",
      image: "/boy3.png",
      bio: "#",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: screenWidth > pcBreakPoint ? 3 : 1,
    slidesToScroll: screenWidth > pcBreakPoint ? 3 : 1,
  };

  return (
    <div className="flex flex-col items-center justify-center p-[20px] lg:p-[80px]">
      <Reveal>
        <div className="text-center text-[36px] lg:text-[65px] leading-[40px] lg:leading-[65px] tracking-[-2.24px] lg:tracking-[-4px] mb-[30px]">
          The Minds behind SLST
        </div>
      </Reveal>
      <Reveal>
        <div className="text-center w-[308px] lg:w-[852px] mb-[30px] text-[13px] lg:text-[20px] leading-[18px] lg:leading-[29px] tracking-[-1px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </Reveal>
      <div className="w-full justify-center mb-[30px]">
        <Slider {...settings}>
          {boys.map((boy, index) => (
            <Reveal key={index}>
              <div
                // initial={{ opacity: 0, y: 250 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: 250 }}
                // transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  padding: "10px",
                  // width: screenWidth > pcBreakPoint ? "381px" : "100%",
                  // marginRight: screenWidth > pcBreakPoint ? "20px" : 0,
                }}
              >
                <img
                  src={boy.image}
                  className="overflow-hidden object-cover  rounded-[10px] mb-[15px] w-full lg:w-[460px] max-h-[353px] lg:max-h-[460px]"
                />
                <div className="flex justify-between">
                  <div>
                    <div
                      style={{
                        fontSize: "20px",
                        lineHeight: "24px",
                        fontWeight: 500,
                        marginBottom: "5px",
                      }}
                    >
                      {boy.name}
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        lineHeight: "19px",
                        fontWeight: 410,
                      }}
                    >
                      {boy.designation}
                    </div>
                  </div>
                  <div>
                    <Button
                      text="Read Bio"
                      icon={false}
                      className="h-[40px] text-[12px] px-[13px] leading-[19px] rounded-[17px]"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </Slider>
      </div>
      {/* <Reveal>
        <div
          style={{
            display: "flex",
          }}
        >
          {[...Array(parseInt((boys.length + 2) / 3)).keys()].map(
            (item, index) => (
              <div
                key={index}
                onClick={() =>
                  setRange([index * 3, index * 3 + 1, index * 3 + 2])
                }
                className="cursor-pointer border h-[13px] w-[13px] rounded-full border-black"
                style={{
                  marginRight: index === boys.length - 1 ? 0 : "12px",
                  background: range[0] / 3 === index ? "black" : "white",
                }}
              ></div>
            )
          )}
        </div>
      </Reveal> */}
    </div>
  );
}
