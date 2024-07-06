import React from "react";
import "./FooterComponent.css"; // Import the CSS file
import { useScreenWidth } from "./hooks";
import { getSize } from "./util";

const FooterComponent = () => {
  const screenWidth = useScreenWidth();
  return (
    <footer className="lg:mr-[100px] lg:ml-[100px] mb-[50px]">
      <div className="block lg:flex justify-between items-center">
        <div className="flex items-center w-full justify-center lg:w-fit">
          <img src="/logo.png" alt="SLST Logo" className="logo-image" />
        </div>
        <div className="block lg:flex items-center">
          <div className="flex flex-col items-center mt-[60px] lg:mt-[0px]">
            <div className="text-[16px] lg:text-[20px]">
              Looking to collaborate?
            </div>
            &emsp;
            <button className="contact-button">Get in Touch →</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-[30px] justify-between">
        <div
          className="hidden lg:block"
          style={{
            fontSize: getSize(20, 13, screenWidth),
          }}
        >
          ©2024 Stanford Ling Sound Test, All rights reserved.
        </div>
        <div className="flex items-center w-[130px] justify-between mt-[70px] lg:mt-0">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/youtube.png" alt="YouTube" className="social-icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/x.png" alt="Twitter" className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedIn.png" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
        <div
          className="block lg:hidden mt-[20px]"
          style={{
            fontSize: getSize(20, 13, screenWidth),
          }}
        >
          ©2024 Stanford Ling Sound Test, All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
