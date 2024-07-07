import { useEffect, useState } from "react";
import { useScreenWidth } from "./hooks";
import { getSize } from "./util";
import { pcBreakPoint } from "./Carousel";
import Reveal from "./Reveal";

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
    },
    {
      name: "Lorem Ipsum Lorem",
      designation: "Designation",
      image: "/boy2.png",
    },
    {
      name: "Lorem Ipsum Lorem",
      designation: "Designation",
      image: "/boy3.png",
    },
    {
      name: "Lorem Ipsum Lorem",
      designation: "Designation",
      image: "/boy1.png",
    },
    {
      name: "Lorem Ipsum Lorem",
      designation: "Designation",
      image: "/boy2.png",
    },
    {
      name: "Lorem Ipsum Lorem",
      designation: "Designation",
      image: "/boy3.png",
    },
  ];

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
      <Reveal>
        <div
          className="flex w-full justify-center"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "30px",
          }}
        >
          {range.map((id, index) => (
            <div
              key={index}
              style={{
                width: screenWidth > pcBreakPoint ? "381px" : "100%",
                marginRight: screenWidth > pcBreakPoint ? "20px" : 0,
              }}
            >
              <img
                src={boys[id].image}
                className="overflow-hidden object-cover rounded-[10px] mb-[15px] w-full lg:w-[460px] max-h-[353px] lg:max-h-[460px]"
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
                    {boys[id].name}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      lineHeight: "19px",
                      fontWeight: 410,
                    }}
                  >
                    {boys[id].designation}
                  </div>
                </div>
                <div>
                  <button className="readBioButton">Read Bio</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <div
          style={{
            display: "flex",
          }}
        >
          {[...Array(boys.length - 3).keys()].map((item, index) => (
            <div
              key={index}
              className="cursor-pointer border h-[13px] w-[13px] rounded-full border-black"
              style={{
                marginRight: index === boys.length - 1 ? 0 : "12px",
                background: index === 0 ? "black" : "white",
              }}
            ></div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
