"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { GlobalStateContext } from "./GlobalContext";
const Navbar = () => {
  useEffect(() => {
    document.addEventListener("mousedown", () => setShowMenu(false));
  }, []);

  const { link, setLink } = useContext(GlobalStateContext);

  const links = [
    { title: "About", url: "#about" },
    { title: "Features", url: "#features" },
    { title: "Disclaimer", url: "#disclaimer" },
    { title: "FAQs", url: "#faq" },
    { title: "Contact", url: "#contact" },
  ];
  const [hidden, setHidden] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    const p = scrollY.getPrevious();
    if (latestScrollY > p && latestScrollY > 150) setHidden(true);
    else setHidden(false);
  });
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="max-w-[1440px] fixed z-20 flex w-[90%] justify-between items-center bg-white lg:h-[70px] h-[45px]  pr-[10px] pl-[10px] rounded-[15px] lg:mt-[30px] mt-[20px]"
    >
      <div>
        <img src="/logo.png" className="h-[30px] lg:h-[48px]" alt="logo" />
      </div>

      <div className="hidden lg:block">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            padding: "2px",
            backgroundColor: "#F7EDDD",
            borderRadius: "22.5px",
          }}
        >
          {links.map((x, index) => (
            <div
              style={{
                backgroundColor: x.url == link ? "black" : "#F7EDDD", 
                textAlign: "center",
                justifyContent: "center",
                color: x.url == link ? "white" : "black",
                fontFamily: "SF UI Display",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                borderRadius: "22.5px",
                border: x.url == link ? "4px solid #F7EDDD" : "none",
                padding: x.url == link ? "6px" : "8px",
                width: "100px",
              }}
            >
              <Link key={index} href={x.url}>
                {x.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-black rounded-[10px] text-white hover:bg-gray-500 cursor-pointer flex items-center w-[90px] lg:w-[150px] text-[13px] lg:text-[16px] justify-center h-[35px] lg:h-[50px] mr-4 z-20">
          Open App &nbsp; <HiOutlineArrowRight />
        </div>

        <div className="cursor-pointer lg:hidden" onClick={toggleMenu}>
          {showMenu ? <MdClose size={30} /> : <RxHamburgerMenu size={30} />}
        </div>
      </div>

      <div className="absolute top-[50px] left-[0px] bg-[#FFE4BE] w-full rounded-b-xl">
        <ul
          className="list-none flex flex-col items-center h-[0px] text-[14px] font-[500] overflow-hidden"
          style={{
            height: showMenu ? "350px" : "0",
            transition: "height 0.2s ease-in",
          }}
        >
          {links.map((link, index) => (
            <Link
              onClick={() => setShowMenu(false)}
              key={index}
              href={link.url}
              style={{ marginTop: "30px" }}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
export default Navbar;
