import React from "react";
import "./GridComponent.css"; // Import the CSS file

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
    <div className="grid-container">
      {data.map((item, index) => (
        <div key={index} className="grid-item">
          {index % 2 === 0 ? (
            <>
              <div className="image-container">
                <img src={item.image} alt={item.text} />
              </div>
              <div style={{ width: "50%" }}>
                <div className="text-container">
                  <h3>{item.text}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-container">
                <h3>{item.text}</h3>
                <p>{item.description}</p>
              </div>
              <div className="image-container">
                <img src={item.image} alt={item.text} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
