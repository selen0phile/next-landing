// "use client"
// import React, { useRef, useEffect } from "react";
// import p5 from "p5";
// import { useScreenWidth } from "./hooks";

// const SineWaveAnimation = () => {
//   const sketchRef = useRef();
//   const screenWidth = useScreenWidth();

//   useEffect(() => {
//     const sketch = (p) => {
//       let xspacing = 8; // Distance between each horizontal position
//       let w; // Width of the entire wave
//       let theta = 0.0; // Start angle at 0
//       let amplitude = 75.0; // Height of wave
//       let period = 500.0; // How many pixels before the wave repeats
//       let dx; // Value for incrementing x
//       let yvalues; // Using an array to store height values for the wave

//       p.setup = () => {
//         p.createCanvas(100, 400).parent(sketchRef.current); // Full width of the window
//         w = p.width + 16;
//         dx = (p.TWO_PI / period) * xspacing;
//         yvalues = new Array(p.floor(w / xspacing));
//         p.clear();
//       };

//       p.draw = () => {
//         p.clear(); // Clear the canvas to make it transparent
//         calcWave();
//         renderWave();
//       };

//       const calcWave = () => {
//         theta += 0.02;
//         let x = theta;
//         for (let i = 0; i < yvalues.length; i++) {
//           yvalues[i] = p.sin(x) * amplitude;
//           x += dx;
//         }
//       };

//       const renderWave = () => {
//         p.noStroke();
//         p.fill(255, 50, 50);

//         // Draw the dots on the sine wave
//         for (let x = 0; x < yvalues.length; x++) {
//           let posX = x * xspacing;
//           let posY = p.height / 2 + yvalues[x];
//           p.ellipse(posX, posY, 8, 8); // Smaller dot size for clearer visibility
//         }
//       };

//       // Resize canvas when the window is resized
//       p.windowResized = () => {
//         p.resizeCanvas(p.windowWidth, 400);
//         w = p.width + 16;
//         dx = (p.TWO_PI / period) * xspacing;
//         yvalues = new Array(p.floor(w / xspacing));
//         p.clear(); // Clear the canvas to maintain transparency
//       };
//     };

//     const p5Instance = new p5(sketch);

//     return () => {
//       p5Instance.remove();
//     };
//   }, []);

//   return (
//     <div
//       ref={sketchRef}
//       style={{ position: "relative", height: "400px" }}
//     ></div>
//   );
// };

// export default SineWaveAnimation;
