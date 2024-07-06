import { pcBreakPoint } from "./Carousel";
import { useScreenWidth } from "./hooks";
import { getSize } from "./util";

export default function Violet() {
  const screenWidth = useScreenWidth();
  return (
    <div className="block lg:flex justify-between relative bg-[#BCBAFF] ml-[20px] mr-[20px] p-[40px] rounded-[20px] lg:ml-[100px] lg:mr-[100px] lg:p-[80px] lg:h-[570px]">
      <div
        style={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginBottom: screenWidth > pcBreakPoint ? "0" : "50px",
        }}
      >
        <div
          style={{
            fontSize: getSize(96, 48, screenWidth),
            fontWeight: "410",
            lineHeight: getSize(96, 48, screenWidth),
            letterSpacing: getSize(-4.48, -2.52, screenWidth),
            color: "#5F32BC",
            marginBottom: screenWidth > pcBreakPoint ? "0" : "50px",
          }}
        >
          we are still developing...
        </div>
        <div
          style={{
            width: getSize(461, 290, screenWidth),
            fontSize: getSize(20, 13, screenWidth),
            fontWeight: "500",
            lineHeight: getSize(22, 18, screenWidth),
            letter: "-2%",
            color: "#5F32BC",
          }}
        >
          We're excited to share our app with you, but we're still in the early
          stages of development. Our methods have not yet undergone rigorous
          scientific testing yet, and our app is not intended to replace
          traditional audiologists or professional hearing assessments. With
          your help, we can make it a valuable tool for monitoring hearing
          health at home.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#5F32BC",
        }}
      >
        <div className="flex items-center mb-[20px]">
          <img
            src="/settings.png"
            style={{ width: "113px", marginRight: "40px" }}
          />
          <div>Early Development Phase</div>
        </div>
        <div className="flex items-center mb-[20px]">
          <img src="/ear.png" style={{ width: "113px", marginRight: "40px" }} />
          <div>
            <b>NOT A REPLACEMENT</b> for Traditional Methods
          </div>
        </div>
        <div className="flex items-center mb-[20px]">
          <img
            src="/batti.png"
            style={{ width: "113px", marginRight: "40px" }}
          />
          <div>Collaborate with Us</div>
        </div>
      </div>
    </div>
  );
}
