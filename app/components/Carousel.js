export default function Carousel() {
  return (
    <div
      style={{
        borderRadius: "20px",
        height: "570px",
        padding: "50px",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        background: "#FFE4BE",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          right: "50px",
          display: "flex",
          justifyContent: "space-between",
          width: "75px",
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            border: "1px solid black",
            height: "13px",
            width: "13px",
          }}
        ></div>
        <div
          style={{
            borderRadius: "50%",
            border: "1px solid black",
            height: "13px",
            width: "13px",
          }}
        ></div>
        <div
          style={{
            borderRadius: "50%",
            border: "1px solid black",
            height: "13px",
            width: "13px",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: "16px", width: "600px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </div>
        <div
          style={{
            fontSize: "80px",
            fontWeight: "410",
            lineHeight: "80px",
            letter: "-2%",
            width: "900px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ height: "306px" }}
          src="https://gcdnb.pbrd.co/images/MDGHm6dtAL3P.png"
        />
      </div>
    </div>
  );
}
