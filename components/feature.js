import React, { useContext, useEffect } from "react";
import "./GridComponent.css"; // Import the CSS file
import Reveal from "./Reveal";

import { useInView } from "react-intersection-observer";
import { GlobalStateContext } from "./GlobalContext";

const GridComponent = () => {
  const data = [
    {
      text: "Select avatar & Warmup",
      description:
        "Choose an avatar and introduce your child to the Ling Six Test with our engaging warmup mode.",
      image: "/select_avatar.png",
    },
    {
      text: "Interactive gameplay & remote control",
      description:
        "Gather insights into your child's hearing health through fun gameplay. Parents and SLPs can easily manage the process remotely.",
      image: "/interactive_gameplay.png",
    },
    {
      text: "Monitor & Share",
      description:
        "Monitor hearing health over time and easily share statistics with SLPs.",
      image: "/monitor_share.png",
    },
  ];

  return (
    <div className="mb-0 lg:mb-[100px]">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col lg:flex-row lg:items-center">
          {index % 2 === 0 ? (
            <>
              <div className="w-full lg:w-[50%] lg:-ml-[100px]">
                <Reveal>
                  <img src={item.image} alt={item.text} />
                </Reveal>
              </div>
              <div className="w-[300px] lg:w-[400px] lg:text-left lg:-mt-[200px] h-[400px] lg:h-[500px] flex flex-col text-center justify-center items-center mx-auto">
                <div className="md:text-[50px] md:leading-[50px] text-[36px] leading-[40px] lg:text-[64px] lg:leading-[65px] lg:-tracking-widest">
                  <Reveal>{item.text}</Reveal>
                </div>
                <div className="text-[13px] leading-[18px] md:text-[17px] md:leading-[23px] lg:text-[20px] lg:leading-[29px] mt-[60px]">
                  <Reveal>{item.description}</Reveal>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full lg:w-[50%] lg:order-2 lg:-mt-[100px]">
                <Reveal>
                  <img src={item.image} alt={item.text} />
                </Reveal>
              </div>
              <div className="w-[300px] lg:w-[400px] lg:text-left lg:mt-[200px] h-[400px] lg:h-[500px] flex flex-col text-center justify-center items-center mx-auto">
                <div className="md:text-[50px] md:leading-[50px] text-[36px] leading-[40px] lg:text-[64px] lg:leading-[65px] lg:-tracking-widest">
                  <Reveal>{item.text}</Reveal>
                </div>
                <div className="text-[13px] leading-[18px] md:text-[17px] md:leading-[23px] lg:text-[20px] lg:leading-[29px] mt-[30px]">
                  <Reveal>{item.description}</Reveal>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
