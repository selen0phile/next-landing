import { useEffect, useState } from "react";
import { useScreenWidth } from "./hooks";
import { getSize } from "./util";
import { mobileBreakPoint } from "./Carousel";

export default function Boys() {
  const screenWidth = useScreenWidth();
  const [range, setRange] = useState([0,1,2]);
  useEffect(() => {
    if (screenWidth > mobileBreakPoint) {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: getSize(80, 20, screenWidth),
      }}
    >
      <div
        style={{
          fontSize: getSize(64, 36, screenWidth), 
          letterSpacing: "-3px",
          lineHeight: getSize(65, 40, screenWidth),
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: 410,
        }}
      >
        The Minds behind SLST
      </div>
      <div
        style={{
          textAlign: "center",
          width: getSize(852, 308, screenWidth),
          marginBottom: "60px",
          fontSize: getSize(20,13,screenWidth),
          lineHeight: getSize(29, 18, screenWidth),
          letter: "-1px",
          fontWeight: 410,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "30px",
          height: getSize(525,100,screenWidth),

        }}
      >
        {range.map((id) => (
          <div
            style={{
              width: screenWidth > mobileBreakPoint ? "381px" : "100%",
            }}
          >
            <img
              src={boys[id].image}
              style={{
                height: screenWidth > mobileBreakPoint ? getSize(460, 353, screenWidth) : "100%",
                width: screenWidth > mobileBreakPoint ? getSize(460, 353, screenWidth) : "100%",
                overflow: "hidden",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
      <div
        style={{
          display: "flex",
        }}
      >
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            style={{
              borderRadius: "100%",
              border: "1px solid black",
              height: "13px",
              width: "13px",
              marginRight: index === 4 ? 0 : "12px",
              background: index === 0 ? "black" : "white",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
