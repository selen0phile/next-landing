"use client";

import { useState } from "react";

export default function Accordion({title, desc}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid #000000",
        marginBottom: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: "24px",
          lineHeight: "29px",
          fontWeight: 500,
          marginBottom: "20px",
          justifyContent: "space-between",
        }}
      >
        <div>{title}</div>
        <div
          style={{
            cursor: "pointer",
            fontSize: "40px",
          }}
          onClick={() => setOpen(!open)}
        >
          {open ? "-" : "+"}
        </div>
      </div>
      <div
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          letter: "-2%",
          fontWeight: 410,
          maxHeight: open ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-out, margin-bottom 0.3s ease-out",
          marginBottom: open ? "20px" : "0",
        }}
      >
        {desc}
      </div>
    </div>
  );
}
