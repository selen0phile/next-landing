export default function Boys() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <div
        style={{
          fontSize: "64px",
          letter: "-7%",
          lineHeight: "65px",
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
          width: "852px",
          marginBottom: "60px",
          fontSize: "20px",
          lineHeight: "29px",
          letter: "-2%",
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
        }}
      >
        {[1, 2, 3].map((item) => (
          <div
            style={{
              width: "381px",
              height: "525px",
            }}
          >
            <img
              src={`/boy${item}.png`}
              style={{
                height: "460px",
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
                  Lorem Ipsum Lorem
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: 410,
                  }}
                >
                  Designation
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
