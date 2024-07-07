import React, { useEffect, useRef } from "react";
import { useScreenWidth } from "./hooks";
import { pcBreakPoint } from "./Carousel";
import { interpolate } from "./util";

const SineWave = () => {
  const canvasRef = useRef(null);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 200;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const wave = {
      y: canvas.height / 2,
      length: interpolate(450, 0.05, 1920, 0.02, screenWidth),
      amplitude: interpolate(450, 40, 1920, 50, screenWidth),
      frequency: 0.05,
      lineWidth: interpolate(450, 4, 1920, 6, screenWidth),
    };

    const strokeColor = "red";
    const dotColor = "red";
    const dotRadius = interpolate(450, 3, 1920, 5, screenWidth);
    const dotSpacing = interpolate(450, 120, 1920, 280, screenWidth);
    let increment = 0;

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      // Start drawing from the left edge
      ctx.moveTo(0, wave.y + Math.sin(increment) * wave.amplitude);
      ctx.lineWidth = wave.lineWidth;

      for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(
          i,
          wave.y + Math.sin(i * wave.length + increment) * wave.amplitude
        );
      }

      ctx.strokeStyle = strokeColor;
      ctx.stroke();

      // Start drawing dots after the first dotSpacing
      for (let i = dotSpacing; i < canvas.width; i += dotSpacing) {
        const y =
          wave.y + Math.sin(i * wave.length + increment) * wave.amplitude;
        ctx.beginPath();
        ctx.arc(i, y, dotRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = "#f9f2e8";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(i, y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }

      increment += wave.frequency;
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [screenWidth]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "200px",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    />
  );
};

export default SineWave;
