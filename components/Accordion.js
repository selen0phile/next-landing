"use client";

import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import Reveal from "./Reveal";
import { Collapse } from "react-collapse";

export default function Accordion({ title, desc }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black mb-[25px]">
      <Reveal width="100%">
        <div
          className="flex text-[16px] lg:text-[24px] leading-[29px]  font-[500] justify-between items-center"
          onClick={() => setOpen(!open)}
        >
          <div>{title}</div>

          <div className="cursor-pointer ml-[10px]">
            {open ? <IoMdRemove size={20} /> : <IoMdAdd size={20} />}
          </div>
        </div>
      </Reveal>
      <Collapse isOpened={open}>
        <br />
        <div className="text-[12px] lg:text-[16px] font-[500] leading-[24px] tracking-[-2%]">
          {desc}
        </div>
      </Collapse>
      <br />
    </div>
  );
}
