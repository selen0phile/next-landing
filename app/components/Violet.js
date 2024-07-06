export default function Violet() {
  return (
    <div
      style={{
        borderRadius: "20px",
        height: "570px",
        padding: "70px",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        background: "#BCBAFF",
      }}
    >
      <div
        style={{
          width: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: "96px",
            fontWeight: "410",
            lineHeight: "96px",
            letter: "-5%",
            color: "#5F32BC",
          }}
        >
          we are still developing...
        </div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "22px",
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/settings.png"
            style={{ width: "113px", marginRight: "40px" }}
          />
          <div>Early Development Phase</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="/ear.png" style={{ width: "113px", marginRight: "40px" }} />
          <div>
            <b>NOT A REPLACEMENT</b> for Traditional Methods
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
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
